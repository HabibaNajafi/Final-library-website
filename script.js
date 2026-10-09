// ============================================
// BookNest - Login & Register (script.js)
// ============================================

// ---- Keys used in localStorage ----
const USERS_KEY = "booknest_users";
const CURRENT_USER_KEY = "booknest_current_user";

// Page names (change these if your files are named differently)
const LOGIN_PAGE = "login.html";
const HOME_PAGE = "home.html";

// Pages that need a logged-in user (write the names in lowercase)
const PROTECTED_PAGES = ["home.html"];

// ---- Get elements from the page ----
// authBox only exists on the login page. If it is null, we are on another page.
const authBox = document.querySelector(".auto-box");
const isAuthPage = authBox !== null;

const loginForm = document.getElementById("loginform");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginMessage = document.getElementById("loginMeddage"); // spelled like your HTML

const registerForm = document.getElementById("registerForm");
const registerName = document.getElementById("registerName");
const registerEmail = document.getElementById("registerEmail");

// LIMITATION: your registration HTML has no separate password input.
// So we use the "confirmPassword" field as the registration password for now.
const registerPassword = document.getElementById("confirmPassword");
const registerMessage = document.getElementById("registerMessage");

const showRegisterBtn = document.getElementById("showRegister");
const showLoginBtn = document.getElementById("showLogin");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");

// ============================================
// Helper functions
// ============================================

// Read all saved users (returns an empty array if none)
function getUsers() {
    const savedUsers = localStorage.getItem(USERS_KEY);
    if (!savedUsers) {
        return [];
    }
    try {
        return JSON.parse(savedUsers);
    } catch (error) {
        return []; // saved data was broken
    }
}

// Save the users array
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Read the logged-in user. Returns null if nobody is logged in.
function getCurrentUser() {
    const savedUser = sessionStorage.getItem(CURRENT_USER_KEY); // session, not permanent
    if (!savedUser) {
        return null;
    }
    try {
        const user = JSON.parse(savedUser);
        if (user && user.loggedIn === true) {
            return user;
        }
        return null;
    } catch (error) {
        return null; // saved data was broken
    }
}

// Show a message in a message paragraph ("success" or "error")
function showMessage(element, text, type) {
    element.textContent = text;
    element.className = "message " + type;
}

// Clear a message
function clearMessage(element) {
    element.textContent = "";
    element.className = "message";
}

// Check password strength. Returns a list of missing requirements.
function validatePassword(password) {
    const problems = [];

    if (password.length < 8) {
        problems.push("at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
        problems.push("one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
        problems.push("one lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
        problems.push("one number");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        problems.push("one special character (! @ # $ % ^ & *)");
    }

    return problems;
}

// ============================================
// Logged-in check and logout
// ============================================

// If the user is already logged in, send them to Home.html.
// Returns true if we redirected, false if not.

// Where should we send the user after login?
// If the address has ?next=books.html we go there, otherwise to the home page.
function getReturnPage() {
    const params = new URLSearchParams(window.location.search);
    const next = params.get("next");

    // Only allow a simple page name like books.html or books.html?id=3
    // (this blocks addresses like https://other-site.com)
    const safePage = /^[A-Za-z0-9_-]+\.html(\?[A-Za-z0-9_=&%.-]*)?$/;

    if (next && safePage.test(next) && !next.startsWith("login.html")) {
        return next;
    }
    return HOME_PAGE;
}
function redirectIfLoggedIn() {
    if (getCurrentUser() !== null) {
        // replace() does not keep this page in the Back-button history,
        // so the user cannot go "back" to the login page.
                window.location.replace(getReturnPage());
        return true;
    }
    return false;
}

// Log the user out and go back to the login page.
// You can call this from any page (see the logout button section at the bottom).
function logoutUser() {
    sessionStorage.removeItem(CURRENT_USER_KEY); // only ends the session, NOT the saved accounts
    window.location.href = LOGIN_PAGE;
}

// Use this on pages that need a login (like Home.html).
// If nobody is logged in, send the visitor to the login page.
function checkAuth() {
    if (getCurrentUser() === null) {
        // replace() keeps the protected page out of the Back-button history
        window.location.replace(LOGIN_PAGE);
        return false;
    }
    return true;
}

// Is the page we are on listed in PROTECTED_PAGES?
function isProtectedPage() {
    const pageName = window.location.pathname.split("/").pop().toLowerCase();
    return PROTECTED_PAGES.includes(pageName);
}

// ============================================
// Switching between the two forms
// ============================================

// Your CSS shows the Register form (and the matching left panel)
// only while ".auto-box" has the class "register-active".
function showRegisterForm() {
    authBox.classList.add("register-active");
    clearMessage(loginMessage);
}

function showLoginForm() {
    authBox.classList.remove("register-active");
    clearMessage(registerMessage);
}

// ============================================
// Registration
// ============================================

function registerUser() {
    const name = registerName.value.trim();
    const email = registerEmail.value.trim().toLowerCase(); // lowercase!
    const password = registerPassword.value;

    if (name === "") {
        showMessage(registerMessage, "Please enter your full name.", "error");
        return;
    }

    // Check password strength
    const problems = validatePassword(password);
    if (problems.length > 0) {
        showMessage(
            registerMessage,
            "Weak password. Missing: " + problems.join(", ") + ".",
            "error"
        );
        return;
    }

    // Check for an existing account with the same email
    const users = getUsers();
    const emailTaken = users.some(function (user) {
        return user.email === email;
    });

    if (emailTaken) {
        showMessage(registerMessage, "An account with this email already exists.", "error");
        return;
    }

    // Save the new user
    // every account starts with its own empty favorites list
    users.push({ name: name, email: email, password: password, favorites: [] });
    saveUsers(users);

    // Clear the registration form
    registerForm.reset();

    // Switch to the login form (we do NOT log the user in automatically)
    showLoginForm();

    // Pre-fill the email and ask them to log in.
    // The message goes in the LOGIN message area because that is the form now visible.
    loginEmail.value = email;
    loginPassword.value = "";
    showMessage(
        loginMessage,
        "Account created successfully! Please log in with your email and password.",
        "success"
    );
}

// ============================================
// Login
// ============================================

function loginUser() {
    const email = loginEmail.value.trim().toLowerCase();
    const password = loginPassword.value;

    const users = getUsers();

    // Find the user with this email
    const foundUser = users.find(function (user) {
        return user.email === email;
    });

    if (!foundUser) {
        showMessage(loginMessage, "No account found with this email.", "error");
        return;
    }

    if (foundUser.password !== password) {
        showMessage(loginMessage, "Incorrect password.", "error");
        return;
    }

    // Save who is logged in
    const currentUser = {
        name: foundUser.name,
        email: foundUser.email,
        loggedIn: true
    };
    sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser)); // cleared when the tab closes

    showMessage(loginMessage, "Login successful! Redirecting...", "success");

    // Short pause so the user can see the message, then go to Home.html
    setTimeout(function () {
                window.location.href = getReturnPage();
    }, 800);
}

// ============================================
// Start-up and event listeners (login page only)
// ============================================

if (isAuthPage) {
    // 1. Already logged in? Go to Home.html. Otherwise show the LOGIN form first.
    if (!redirectIfLoggedIn()) {
        showLoginForm();
    }

    // 2. Also check when the page is restored with the Back button.
    window.addEventListener("pageshow", function () {
        redirectIfLoggedIn();
    });

    // 3. Switching buttons (preventDefault stops any accidental page refresh)
    registerBtn.addEventListener("click", function (event) {
        event.preventDefault();
        showRegisterForm();
    });

    showRegisterBtn.addEventListener("click", function (event) {
        event.preventDefault();
        showRegisterForm();
    });

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        showLoginForm();
    });

    showLoginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        showLoginForm();
    });

    // 4. Form submissions
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // stop the page from reloading
        registerUser();
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        loginUser();
    });
}

// ============================================
// Logout button (works on any page that loads this file)
// ============================================
// Any of these will log the user out when clicked:
//   - an element with id="logoutBtn"
//   - an element with class="logout-btn"
//   - an element with the attribute data-logout
// If none of them exist on the page, nothing happens.
const logoutButtons = document.querySelectorAll("#logoutBtn, .logout-btn, [data-logout]");

logoutButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault(); // stops a link (<a href="#">) from jumping
        logoutUser();
    });
});

// ============================================
// Protect pages + clean up old sessions
// ============================================

// Older versions saved the login in localStorage. Remove that leftover,
// otherwise it would look like the user is still "permanently" logged in.
localStorage.removeItem(CURRENT_USER_KEY);

// On a protected page (like Home.html), a visitor who is not logged in is sent to login
if (isProtectedPage()) {
    checkAuth();
}
