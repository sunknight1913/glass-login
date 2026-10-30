const form = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const reveal = document.getElementById("reveal");
const status = document.getElementById("status");

// Show / hide password
reveal.addEventListener("click", () => {
  const showing = password.type === "text";
  password.type = showing ? "password" : "text";
  reveal.classList.toggle("is-on", !showing);
  reveal.setAttribute("aria-pressed", String(!showing));
  reveal.setAttribute("aria-label", showing ? "Show password" : "Hide password");
  password.focus();
});

// Demo submit — no backend, just validates and reports
form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.className = "status";

  if (!email.value.trim() || !password.value) {
    status.textContent = "Please fill in your email and password.";
    (!email.value.trim() ? email : password).focus();
    return;
  }

  if (!email.validity.valid) {
    status.textContent = "That email address doesn't look right.";
    email.focus();
    return;
  }

  if (password.value.length < 6) {
    status.textContent = "Password must be at least 6 characters.";
    password.focus();
    return;
  }

  status.className = "status ok";
  status.textContent = `Signed in as ${email.value.trim()} (demo)`;
});
