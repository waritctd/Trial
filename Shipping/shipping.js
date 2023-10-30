function submit() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const tel = document.getElementById("tel").value;
    const auth = localStorage.getItem('auth');
    
    if (name.trim() === "" || address.trim() === "" || tel.trim() === "") {
        alert("Your information cannot be blank. Please enter valid information.");
    } else {
        const newShipping = { userName: name, userAddress: address, userTel: tel };
        localStorage.setItem("shipping", JSON.stringify(newShipping)); // Replace the old information with the new one

        console.log('auth:', auth); 
        alert("Shipping address successfully submitted. You can now continue to order with your current address.");
        window.location.href = "index.html";
    }
}