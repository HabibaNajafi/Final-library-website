
document.addEventListener("DOMContentLoaded", function () {
    const SESSION_KEY = "booknest_current_user";

    const avatar = document.getElementById("profileAvatar");
    const nameElement = document.getElementById("profileName");
    const emailElement = document.getElementById("profileEmail");
    const details = document.getElementById("profileDetails");
    const message = document.getElementById("profileMessage");
    const logoutButton = document.getElementById("profileLogout");

    let currentUser = null;

    try {
        const savedSession = sessionStorage.getItem(SESSION_KEY);

        if (savedSession) {
            const user = JSON.parse(savedSession);

            if (user && user.loggedIn === true && user.email) {
                // Confirm the account still exists.
                const users = JSON.parse(
                    localStorage.getItem("booknest_users") || "[]"
                );

                currentUser = users.find(function (account) {
                    return account.email === user.email;
                }) || null;
            }
        }
    } catch (error) {
        console.error("Could not load the profile:", error);
    }

    if (!currentUser) {
        details.hidden = true;
        avatar.textContent = "?";
        message.hidden = false;
        message.textContent =
            "You are not logged in. Please log in to view your profile.";

        logoutButton.hidden = true;

        const loginLink = document.createElement("a");
        loginLink.href = "login.html?next=profile.html";
        loginLink.textContent = "Log in to BookNest";
        loginLink.className = "home-button";
        loginLink.style.marginTop = "12px";

        message.appendChild(document.createElement("br"));
        message.appendChild(loginLink);

        return;
    }

    // Display information from the actual registered account.
    nameElement.textContent = currentUser.name || "Name not provided";
    emailElement.textContent = currentUser.email;
    avatar.textContent = (currentUser.name || "?").trim().charAt(0).toUpperCase();

    logoutButton.addEventListener("click", function () {
        sessionStorage.removeItem(SESSION_KEY);
        window.location.href = "home.html";
    });
});