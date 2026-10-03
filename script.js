// BookNest login page. Demo only: there is no server, so data lives in localStorage.
const HOME_PAGE = "index.html";           // where to go after login
const USERS_KEY = "booknest_users";       // all registered users
const SESSION_KEY = "booknest_session";   // the logged-in user (read by access.js)
const REMEMBER_KEY = "booknest_remember_email";

const $ = (id) => document.getElementById(id);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- Storage helpers ----------
const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
const saveUsers = (list) => localStorage.setItem(USERS_KEY, JSON.stringify(list));

// We never store the real password, only a SHA-256 fingerprint of it.
async function hash(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// ---------- Validation rules ----------
const rules = {
    name:  (v) => (v.trim().length >= 2 ? "" : "Enter your full name"),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter a valid email, like name@mail.com"),
    password: (v) =>
        v.length < 8 ? "Use at least 8 characters"
        : !/[A-Za-z]/.test(v) || !/\d/.test(v) ? "Include a letter and a number"
        : "",
    phone: (v) => (/^\+?[\d\s-]{7,15}$/.test(v.trim()) ? "" : "Enter a valid phone number"),
};

// Shows or clears the error under one field. Returns true if the field is valid.
function check(inputId, rule) {
    const input = $(inputId);
    const field = input.closest(".field");
    const error = rules[rule](input.value);
    field.classList.toggle("invalid", !!error);
    field.classList.toggle("valid", !error && input.value !== "");
    field.querySelector(".error-text").textContent = error;
    return !error;
}

function showMessage(id, text, type) {
    const box = $(id);
    box.textContent = text;
    box.className = "form-message " + (type || "");
}

function setLoading(form, on) {
    const btn = form.querySelector(".btn");
    btn.classList.toggle("loading", on);
    btn.disabled = on;
}

// ---------- Live validation (when leaving a field) ----------
const liveFields = [
    ["loginEmail", "email"], ["loginPassword", "password"],
    ["regName", "name"], ["regEmail", "email"], ["regPassword", "password"], ["regPhone", "phone"],
];
liveFields.forEach(([id, rule]) => {
    $(id).addEventListener("blur", () => check(id, rule));
    $(id).addEventListener("input", () => {
        if ($(id).closest(".field").classList.contains("invalid")) check(id, rule);
    });
});

// ---------- Show / hide password ----------
document.querySelectorAll(".toggle-pw").forEach((btn) => {
    btn.addEventListener("click", () => {
        const input = $(btn.dataset.target);
        const show = input.type === "password";
        input.type = show ? "text" : "password";
        btn.innerHTML = show ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
        btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
});

// ---------- Password strength meter ----------
$("regPassword").addEventListener("input", (e) => {
    const v = e.target.value;
    let score = 0;
    if (v.length >= 8) score++;
    if (/[a-z]/.test(v) && /[A-Z]/.test(v)) score++;
    if (/\d/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;
    const levels = [
        ["0%", "transparent", "Use 8+ characters with letters, numbers and a symbol"],
        ["25%", "#e5645a", "Weak"],
        ["50%", "#e8a23c", "Fair"],
        ["75%", "#d9ae5e", "Good"],
        ["100%", "#5fbf7a", "Strong"],
    ];
    const [width, color, label] = levels[v ? Math.max(score, 1) : 0];
    const bar = document.querySelector(".strength-bar span");
    bar.style.width = width;
    bar.style.background = color;
    $("strengthText").textContent = label;
});

// ---------- Ripple effect on buttons ----------
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const r = btn.getBoundingClientRect();
        const size = Math.max(r.width, r.height);
        const dot = document.createElement("span");
        dot.className = "ripple";
        dot.style.width = dot.style.height = size + "px";
        dot.style.left = e.clientX - r.left - size / 2 + "px";
        dot.style.top = e.clientY - r.top - size / 2 + "px";
        btn.appendChild(dot);
        setTimeout(() => dot.remove(), 600);
    });
});

// ---------- Success animation, then go to the home page ----------
function showSuccess(title) {
    $("successTitle").textContent = title;
    $("successOverlay").classList.add("show");
    setTimeout(() => (window.location.href = HOME_PAGE), 2000);
}

// ---------- Remember me: fill the email next time ----------
const remembered = localStorage.getItem(REMEMBER_KEY);
if (remembered) {
    $("loginEmail").value = remembered;
    $("rememberMe").checked = true;
}

// ---------- LOGIN ----------
$("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    showMessage("loginMessage", "");
    const okEmail = check("loginEmail", "email");
    const okPass = check("loginPassword", "password");
    if (!okEmail || !okPass) return showMessage("loginMessage", "Fix the highlighted fields", "error");

    setLoading(e.target, true);
    await wait(1200); // pretend to contact a server so the spinner is visible

    const email = $("loginEmail").value.trim().toLowerCase();
    const user = getUsers().find((u) => u.email === email);
    const passHash = await hash($("loginPassword").value);

    if (!user || user.passHash !== passHash) {
        setLoading(e.target, false);
        return showMessage("loginMessage", "Email or password is incorrect", "error");
    }

    // Save the session. access.js reads "membership" from here on every page.
    localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email, membership: user.membership }));
    if ($("rememberMe").checked) localStorage.setItem(REMEMBER_KEY, email);
    else localStorage.removeItem(REMEMBER_KEY);

    showSuccess("Welcome back, " + user.name.split(" ")[0]);
});

// ---------- REGISTER ----------
$("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    showMessage("registerMessage", "");
    const results = [
        check("regName", "name"), check("regEmail", "email"),
        check("regPassword", "password"), check("regPhone", "phone"),
    ];
    if (results.includes(false)) return showMessage("registerMessage", "Fix the highlighted fields", "error");

    setLoading(e.target, true);
    await wait(1200);

    const email = $("regEmail").value.trim().toLowerCase();
    const users = getUsers();
    if (users.some((u) => u.email === email)) {
        setLoading(e.target, false);
        return showMessage("registerMessage", "This email already has an account. Try logging in.", "error");
    }

    users.push({
        name: $("regName").value.trim(),
        email,
        phone: $("regPhone").value.trim(),
        membership: document.querySelector('input[name="membership"]:checked').value,
        passHash: await hash($("regPassword").value),
    });
    saveUsers(users);

    setLoading(e.target, false);
    e.target.reset();
    document.querySelector(".strength-bar span").style.width = "0";
    document.querySelectorAll(".field").forEach((f) => f.classList.remove("valid", "invalid"));
    $("login").checked = true;           // switch to the Login tab
    $("loginEmail").value = email;
    showMessage("loginMessage", "Account created. Log in to continue.", "success");
});

// ---------- FORGOT PASSWORD (demo) ----------
$("forgotLink").addEventListener("click", (e) => {
    e.preventDefault();
    if (!check("loginEmail", "email")) return showMessage("loginMessage", "Type your email above first", "error");
    showMessage("loginMessage", "If this email has an account, a reset link would be sent.", "success");
});
