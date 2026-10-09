/* ============================================================
   BookNest saved + read lists (booknest-lists.js)
   - Saved books work for guests (browser storage) and for accounts.
   - Read books belong to an account.
   - Everything is inside one function, so the only global name is BookNestLists.
   ============================================================ */
(function () {
  "use strict";

  var USERS_KEY = "booknest_users";
  var SESSION_KEY = "booknest_current_user";
  var GUEST_SAVED_KEY = "booknest_saved_items";   // the key brows-books.html already uses

  /* ---------- reading and writing browser storage safely ---------- */
  function readJSON(storage, key, fallback) {
    try {
      var value = JSON.parse(storage.getItem(key));
      return value === null || value === undefined ? fallback : value;
    } catch (e) {
      return fallback;
    }
  }

  function writeJSON(storage, key, value) {
    try {
      storage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  /* ---------- who is logged in? ---------- */
  function getAccountInfo() {
    var session = readJSON(sessionStorage, SESSION_KEY, null);
    if (!session || session.loggedIn !== true) return null;

    var users = readJSON(localStorage, USERS_KEY, []);
    var account = users.find(function (user) { return user.email === session.email; });
    if (!account) return null;

    return { users: users, account: account };
  }

  function isLoggedIn() {
    return getAccountInfo() !== null;
  }

  /* ---------- a book record: the same small shape for every list ---------- */
  function makeRecord(book) {
    var source = book.source || (typeof book.id === "number" ? "catalog" : "browse");
    return {
      id: book.id,
      source: source,
      title: book.title || "Untitled",
      author: book.author || "",
      cover: book.cover || book.image || ""
    };
  }

  function sameBook(a, b) {
    var sourceA = a.source || (typeof a.id === "number" ? "catalog" : "browse");
    var sourceB = b.source || (typeof b.id === "number" ? "catalog" : "browse");
    return String(a.id) === String(b.id) && sourceA === sourceB;
  }

  function hasBook(list, book) {
    return list.some(function (item) { return sameBook(item, book); });
  }

  /* ---------- guest saved list (browser storage, no login needed) ---------- */
  function getGuestSaved() {
    return readJSON(localStorage, GUEST_SAVED_KEY, []);
  }

  function setGuestSaved(list) {
    return writeJSON(localStorage, GUEST_SAVED_KEY, list);
  }

  /* ---------- saved books ---------- */
  function getSaved() {
    var info = getAccountInfo();
    if (info) return info.account.saved || [];
    return getGuestSaved();
  }

  function isSaved(book) {
    return hasBook(getSaved(), book);
  }

  /* Save or unsave. Returns true if the book is saved now, false if it was removed. */
  function toggleSaved(book) {
    var info = getAccountInfo();
    var list = info ? (info.account.saved || []) : getGuestSaved();
    var nowSaved;

    if (hasBook(list, book)) {
      list = list.filter(function (item) { return !sameBook(item, book); });
      nowSaved = false;
    } else {
      list = list.concat([makeRecord(book)]);
      nowSaved = true;
    }

    if (info) {
      info.account.saved = list;
      writeJSON(localStorage, USERS_KEY, info.users);
    } else {
      setGuestSaved(list);
    }
    return nowSaved;
  }

  function removeSaved(book) {
    if (isSaved(book)) toggleSaved(book);
  }

  /* ---------- merging guest saves into an account ---------- */
  function hasGuestSaved() {
    return getGuestSaved().length > 0;
  }

  /* Returns how many NEW books were added (duplicates are skipped). */
  function mergeGuestSavedIntoAccount() {
    var info = getAccountInfo();
    if (!info) return 0;

    var accountList = info.account.saved || [];
    var added = 0;

    getGuestSaved().forEach(function (guestBook) {
      if (!hasBook(accountList, guestBook)) {
        accountList.push(makeRecord(guestBook));
        added += 1;
      }
    });

    info.account.saved = accountList;
    writeJSON(localStorage, USERS_KEY, info.users);
    setGuestSaved([]);
    return added;
  }

  /* ---------- read books (account only) ---------- */
  function getRead() {
    var info = getAccountInfo();
    return info ? (info.account.read || []) : [];
  }

  function isRead(book) {
    return hasBook(getRead(), book);
  }

  /* Returns true if saved as read, false if nobody is logged in or it was already there. */
  function markRead(book) {
    var info = getAccountInfo();
    if (!info) return false;

    var list = info.account.read || [];
    if (hasBook(list, book)) return false;

    var record = makeRecord(book);
    record.finishedOn = new Date().toISOString();
    list.push(record);

    info.account.read = list;
    writeJSON(localStorage, USERS_KEY, info.users);
    return true;
  }

  function removeRead(book) {
    var info = getAccountInfo();
    if (!info) return false;

    info.account.read = (info.account.read || []).filter(function (item) {
      return !sameBook(item, book);
    });
    writeJSON(localStorage, USERS_KEY, info.users);
    return true;
  }

  /* ---------- the one global name ---------- */
  window.BookNestLists = {
    isLoggedIn: isLoggedIn,
    getSaved: getSaved,
    isSaved: isSaved,
    toggleSaved: toggleSaved,
    removeSaved: removeSaved,
    hasGuestSaved: hasGuestSaved,
    mergeGuestSavedIntoAccount: mergeGuestSavedIntoAccount,
    getRead: getRead,
    isRead: isRead,
    markRead: markRead,
    removeRead: removeRead
  };
})();