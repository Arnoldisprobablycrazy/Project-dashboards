// Get the input fields and login button from the HTML
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

// Add a click event listener to the login button
loginButton.addEventListener("click", function() {
  // Get the username and password values
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  // Check if the username and password are valid
  if (username === "myusername" && password === "mypassword") {
    // Set the login status to true
    const loginSuccessful = true;
    alert("Login successful!");
    
    // Redirect the user to the dashboard page
    if (loginSuccessful) {
      window.location.href = "pharmacy.html";
    }
    
  } else {
    alert("Invalid username or password.");
  }
});
