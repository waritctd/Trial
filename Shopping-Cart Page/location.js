document.addEventListener("DOMContentLoaded", function () {
    updateLocationText();
  });

function getUserAddress() {
    const shippingData = localStorage.getItem("shipping");
    if (shippingData) {
      const shippingObject = JSON.parse(shippingData);
      if (shippingObject.userAddress) {
        const firstWord = shippingObject.userAddress.split(' ')[0];
        return firstWord;
      }
    }
    return "Your Location";
  }
  
  function updateLocationText() {
    const locationText = document.getElementById("locationText");
    if (locationText) {
      const userAddress = getUserAddress();
      console.log("User Address:", userAddress);
      locationText.textContent = userAddress;
    } else {
      console.log("Element with ID 'locationText' not found.");
    }
  }
  
  updateLocationText();
  
  