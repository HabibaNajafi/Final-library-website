(function () {
  "use strict";

  const USERS_KEY = "booknest_users";
  const SESSION_KEY = "booknest_current_user";

  function readJSON(storage, key, fallback) {
    try {
      const val = JSON.parse(storage.getItem(key));
      return val == null ? fallback : val;
    } catch {
      return fallback;
    }
  }

  function getCurrentSession() {
    return readJSON(sessionStorage, SESSION_KEY, null);
  }

  function getUsers() {
    return readJSON(localStorage, USERS_KEY, []);
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function showToast(msg) {
    const toast = document.getElementById("toast");
    const msgEl = document.getElementById("toastMsg");
    if (!toast || !msgEl) return;

    msgEl.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function updateAvatarDisplay(account) {
    const imgEl = document.getElementById("avatarImage");
    const initEl = document.getElementById("avatarInitials");
    const firstName = (account.name || "A").split(" ")[0];

    if (account.avatar) {
      imgEl.src = account.avatar;
      imgEl.style.display = "block";
      initEl.style.display = "none";
    } else {
      imgEl.style.display = "none";
      initEl.style.display = "flex";
      initEl.textContent = firstName.charAt(0).toUpperCase();
    }
  }

  function initProfile() {
    const session = getCurrentSession();
    if (!session || !session.loggedIn) {
      window.location.href = "index.html";
      return;
    }

    const users = getUsers();
    const account = users.find(u => u.email === session.email);
    if (!account) return;

    // Populate profile fields safely
    document.getElementById("profileDisplayName").textContent = account.name || session.name || "Member Profile";
    document.getElementById("inputName").value = account.name || session.name || "";
    document.getElementById("inputEmail").value = account.email || session.email || "";
    document.getElementById("inputPhone").value = account.phone || "";
    document.getElementById("inputGenre").value = account.favoriteGenre || "Fiction";

    // Set counters & Member ID
    document.getElementById("statBorrowed").textContent = (account.borrowed || []).length;
    document.getElementById("statFavorites").textContent = (account.favorites || []).length;
    document.getElementById("statMemberId").textContent = "#BN-" + (account.email.length * 372).toString().slice(0, 4);

    // Render Avatar
    updateAvatarDisplay(account);

    // Profile Picture Upload Listener
    document.getElementById("avatarFileInput").addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (evt) {
        const base64Image = evt.target.result;
        account.avatar = base64Image;
        saveUsers(users);
        updateAvatarDisplay(account);
        showToast("Profile picture updated!");
      };
      reader.readAsDataURL(file);
    });

    // Form Save Listener
    document.getElementById("profileForm").addEventListener("submit", function (e) {
      e.preventDefault();

      account.name = document.getElementById("inputName").value.trim();
      account.phone = document.getElementById("inputPhone").value.trim();
      account.favoriteGenre = document.getElementById("inputGenre").value;

      saveUsers(users);

      // Update session storage name
      session.name = account.name;
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));

      document.getElementById("profileDisplayName").textContent = account.name;
      updateAvatarDisplay(account);
      showToast("Profile details saved successfully!");
    });

    // Logout Action
    // Delete Account Action
    const deleteBtn = document.getElementById("deleteAccountBtn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", function () {
        const confirmed = confirm("Are you sure you want to delete your account? This action cannot be undone and will erase all your saved data.");
        
        if (confirmed) {
          // 1. Remove user account from localStorage
          const remainingUsers = users.filter(u => u.email !== session.email);
          saveUsers(remainingUsers);

          // 2. Clear current session
          sessionStorage.removeItem(SESSION_KEY);

          // 3. Redirect to home page
          window.location.href = "home.html";
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", initProfile);
})();