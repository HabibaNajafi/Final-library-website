
/* ============================================================
   BookNest Account Menu (auth-ui.js)
   - Visitors see Login.
   - Logged-in users see an account dropdown.
   - Guests can access Saved Books.
   - Uses the existing BookNestLists API when available.
   ============================================================ */

(function () {
  "use strict";

  var SESSION_KEY = "booknest_current_user";
  var USERS_KEY = "booknest_users";
  var GUEST_SAVED_KEY = "booknest_saved_items";

  var LOGIN_PAGE = "login.html";
  var AFTER_LOGOUT_PAGE = "home.html";

  /* ---------- Safe browser storage ---------- */

  function readJSON(storage, key, fallback) {
    try {
      var value = JSON.parse(storage.getItem(key));
      return value == null ? fallback : value;
    } catch (error) {
      return fallback;
    }
  }

  /* ---------- Current user ---------- */

  function getSessionUser() {
    var session = readJSON(
      sessionStorage,
      SESSION_KEY,
      null
    );

    if (!session || session.loggedIn !== true) {
      return null;
    }

    var users = readJSON(localStorage, USERS_KEY, []);

    var account = users.find(function (user) {
      return user.email === session.email;
    });

    if (!account) return null;

    return {
      name: account.name || session.name || "Account",
      email: account.email || session.email || ""
    };
  }

  function isLoggedIn() {
    return getSessionUser() !== null;
  }

  function thisPageForNext() {
    var page = window.location.pathname.split("/").pop();

    if (!page) page = "home.html";

    return page + window.location.search;
  }

  /* ---------- Create a menu link ---------- */

  function createLink(label, icon, href) {
    var link = document.createElement("a");

    link.className = "booknest-menu-link";
    link.href = href;
    link.innerHTML =
      '<i class="fa-solid ' + icon + '" aria-hidden="true"></i>' +
      '<span>' + label + "</span>";

    return link;
  }

  /* ---------- Login button for visitors ---------- */

  function buildLoginItem() {
    var li = document.createElement("li");
    li.className = "booknest-auth-item";

    var link = document.createElement("a");
    link.className = "booknest-login-btn";
    link.href =
      LOGIN_PAGE + "?next=" +
      encodeURIComponent(thisPageForNext());

    link.innerHTML =
      '<i class="fa-solid fa-right-to-bracket"></i> Login';

    li.appendChild(link);

    return li;
  }

  /* ---------- Account dropdown for logged-in users ---------- */

  function buildAccountItem(user) {
    var li = document.createElement("li");

    li.className =
      "booknest-auth-item booknest-auth-user";

    var firstName = user.name.split(" ")[0] || "Account";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "booknest-account-btn";
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open account menu");

    var avatar = document.createElement("div");
    avatar.className = "booknest-account-avatar";
    avatar.textContent = firstName.charAt(0).toUpperCase();

    var name = document.createElement("strong");
    name.className = "booknest-account-name";
    name.textContent = firstName;

    var chevron = document.createElement("i");
    chevron.className =
      "fa-solid fa-chevron-down booknest-account-chevron";

    button.append(avatar, name, chevron);

    var menu = document.createElement("div");
    menu.className = "booknest-account-menu";
    menu.hidden = true;

    /* Account heading */
    var head = document.createElement("div");
    head.className = "booknest-account-head";

    var fullName = document.createElement("strong");
    fullName.textContent = user.name;

    var email = document.createElement("small");
    email.textContent = user.email;

    head.append(fullName, email);

    /* Navigation links */
    
var profileLink = createLink(
  "My Profile",
  "fa-user",
  "profile.html"
);

var savedLink = createLink(
  "Saved Books",
  "fa-bookmark",
  "saved-books.html"
);

var favoritesLink = createLink(
  "Favorite Books",
  "fa-heart",
  "books.html?favorites=true"
);

var readLink = createLink(
  "Read Books",
  "fa-book-open",
  "read-books.html"
);

var borrowedLink = createLink(
  "My Borrowed Books",
  "fa-book",
  "borrowed-books.html"
);
    /* Divider before logout */
    var divider = document.createElement("div");
    divider.className = "booknest-menu-divider";

    /* Logout */
    var logoutBtn = document.createElement("button");
    logoutBtn.type = "button";
    logoutBtn.className = "booknest-menu-link booknest-logout";
    logoutBtn.setAttribute("data-bn-logout", "");

    logoutBtn.innerHTML =
      '<i class="fa-solid fa-right-from-bracket"></i>' +
      "<span>Logout</span>";

    menu.append(
      head,
      profileLink,
      savedLink,
      favoritesLink,
      readLink,
      borrowedLink,
      divider,
      logoutBtn
    );

    li.append(button, menu);

    /* Open and close the dropdown */
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      var opening = menu.hidden;

      closeMenus();

      menu.hidden = !opening;
      button.setAttribute("aria-expanded", String(opening));
    });

    /* Logout without deleting saved account data */
    logoutBtn.addEventListener("click", function () {
      try {
        sessionStorage.removeItem(SESSION_KEY);
      } catch (error) {
        // Ignore storage errors.
      }

      window.location.href = AFTER_LOGOUT_PAGE;
    });

    return li;
  }

  /* ---------- Close dropdown menus ---------- */

  function closeMenus() {
    document.querySelectorAll(".booknest-account-menu").forEach(
      function (menu) {
        menu.hidden = true;

        var button = menu.parentNode.querySelector(
          ".booknest-account-btn"
        );

        if (button) {
          button.setAttribute("aria-expanded", "false");
        }
      }
    );
  }

  /* ---------- Show Login or Account button ---------- */

  function render() {
    var navLeft = document.getElementById("navLeft");

    if (!navLeft) return;

    var old = navLeft.querySelector(".booknest-auth-item");

    if (old) old.remove();

    var user = getSessionUser();

    var item = user
      ? buildAccountItem(user)
      : buildLoginItem();

    navLeft.insertBefore(item, navLeft.firstChild);
  }

  /* ---------- Initialize ---------- */

  function start() {
    render();

    document.addEventListener("click", closeMenus);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenus();
    });

    window.addEventListener("pageshow", function () {
      render();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();