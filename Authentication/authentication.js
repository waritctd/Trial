function isSignIn() {
    const auth = localStorage.getItem('auth');
    console.log('auth:', auth);
    if (auth === 'true') {
        //alert("continue to site");
    } else {
        alert("Please sign in first.");
        window.location.href = "signin.html";
    }
}