const form = document.getElementById("loginForm");
const error = document.getElementById("error");
const logoutBtn = document.getElementById("logoutBtn");

// Fake login
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = username.value;
    const pass = password.value;

    if (user !== "" && pass !== "0") {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      error.textContent = "Invalid credentials!";
    }
  });
}

// Protect dashboard
if (logoutBtn) {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  });
}
