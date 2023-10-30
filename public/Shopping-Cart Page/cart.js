let order_list = document.getElementById("order_list");
let total = document.getElementById("total");
let basket = JSON.parse(localStorage.getItem("data")) || [];


let generateCartItems = () => {
    if (basket.length !== 0) { 
        order_list.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = menuItemsData.find((y) => y.id === id) || {};
            return `
            <div class="orderbox">
                <div class="quantity-control">
                    <button onclick="decrement('${id}')" class="quantity-button-minus">-</button>
                    <div class="amount">${item}</div>
                    <button onclick="increment('${id}')" class="quantity-button-plus">+</button>
                </div>
                <div class="food">
                    <h3 class="foodname">${search.name}</h3>
                </div>
                <h3 class="foodfee">฿ ${item * search.price}</h3>
            </div>
            `;
        }).join(''); 
    }
    else {
        order_list.innerHTML = "";
    }
};

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((menu) => menu.id === selectedItem);

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1
        });
    } else {
        search.item += 1;
    }

    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
    TotalAmount()
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
    TotalAmount()
};

let TotalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((x) => {
            let { item, id } = x;
            let search = menuItemsData.find((y) => y.id === id) || {};
            return item * search.price;
        }).reduce((x, y) => x + y, 0);

        total.innerHTML = `
            <h2 class="total">Total</h2>
            <h2 class="money">฿ ${amount+19}</h2>
            <a id="confirm-button" class="confirm" href="Shopping-Cart Page/finish.html">Confirm</a>
        `;
        
    } else {
        total.innerHTML = `
        <h2 class="total">Total</h2>
        <h2 class="money">฿0</h2>
        <a id="confirm-button" class="confirm" href="Shopping-Cart Page/finish.html">Confirm</a>
        `; 
    }

};

generateCartItems(); 
TotalAmount(); 

document.addEventListener('DOMContentLoaded', function () {
    let confirmButton = document.getElementById('confirm-button');
  
    if (confirmButton) {
      confirmButton.addEventListener('click', function () {
        const orderData = {
            userInfo: JSON.parse(localStorage.getItem("shipping")) || [],
            
            data: basket, 
        };
  
        fetch('/storeOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Server response:', data);
            localStorage.removeItem('data'); // Clear local storage
          });
      });
    }
  });
  

document.addEventListener("DOMContentLoaded", function() {
    let confirmButton = document.getElementById("confirm-button"); 
    
    if (confirmButton) {
        confirmButton.addEventListener("click", function() {
            localStorage.removeItem("data");
        });
    }
});

document.getElementById("backButton").addEventListener("click", function() {
    window.history.back();
});