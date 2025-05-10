document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Example logic for login validation
  if (username === "admin" && password === "password123") {
    alert("Login successful!");
    errorMessage.textContent = "";
    // Optionally, redirect to another page
    // window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});
