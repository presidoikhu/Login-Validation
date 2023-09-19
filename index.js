document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Regular expressions for validation
    const usernamePattern = /^[a-zA-Z0-9_]{4,12}$/; // 4-12 characters, alphanumeric + underscore
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 characters, one letter, one number, and optional special characters

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //if-statement to check if input matches pattern
    if (!usernamePattern.test(username)) {
        alert('Invalid username. It must be 4-12 characters long and contain only letters, numbers, or underscores.');
    } else if (!passwordPattern.test(password)) {
        alert('Invalid password. It must be at least 8 characters long, contain at least one letter and one number, and may include special characters.');
    } else {
        ('Login successful!');
        
    }
});


//eye(visibility)

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".password-toggle img");
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.src = "https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/640/eye-slash-128.png";
      toggleButton.alt = "Hide password";
    } else {
      passwordInput.type = "password";
      toggleButton.src = "https://cdn0.iconfinder.com/data/icons/interface-line-4/48/show_view_visible-128.png";
      toggleButton.alt = "Show password";
    }
  }

