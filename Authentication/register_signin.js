let users = JSON.parse(localStorage.getItem("users")) || [];
localStorage.setItem('auth', 'false');

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const user = users.find(u => u.username === username && u.password === password);
    const auth = localStorage.getItem('auth'); 
    if (user) {
        localStorage.setItem('auth', 'true');
        window.location.href = "index.html"
        alert("Login successful");
        console.log('auth:', auth);
    } else {
        alert("Login failed. Please check your username and password.");
    }
}

function register() {
    const newUsername = document.getElementById("register-username").value;
    const newPassword = document.getElementById("register-password").value;
    const auth = localStorage.getItem('auth');
    if (newUsername.trim() === "" || newPassword.trim() === "") {
        alert("Username or password cannot be blank. Please enter a valid username or password.");
    } else if (users.some(u => u.username === newUsername)) {
        alert("Username is already taken. Please choose another one.");
        window.location.href = "signin.html";
    } else {
        users.push({ username: newUsername, password: newPassword });
        console.log('auth:', auth); 
        alert("Registration successful. You can now log in with your new credentials.");
        saveUserDataToLocalStorage(users);
        window.location.href = "index.html";
        localStorage.setItem('auth', 'true');
        console.log('auth:', auth);
}}

function saveUserDataToLocalStorage(data) {
    localStorage.setItem("users", JSON.stringify(data));
}
