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
        alert('Login successful!');
        
    }
});


