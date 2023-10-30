let menu_list = document.getElementById("menu_list")

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop =()=>{
    return (menu_list.innerHTML= menuItemsData.slice(16, 22).map((menu_display)=>{
        let {id, name, price, img} = menu_display;
        let search = basket.find((x) => x.id === id) || [] ;
        return `
        <div id=product-id-${id} class="menu-item">
            <div class="menu-image" id=${id}>
                <img src="${img}" alt="Pizza">
                <button class="add-button" onclick="increment(${id})">+</button>
            </div>
            <p class="menu-name">${name}</p>
            <p class="menu-price">฿${price}</p>
        </div>
        `
    }).join(""));
};

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((menu)=> menu.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        });
    }
    else{
        search.item += 1;
    }

    //console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket))
    update(selectedItem.id);
};


let update = (id) => {
    let search = basket.find((menu)=> menu.id === id);
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((n) => n.item).reduce((x,y) =>x+y,0);
};



generateShop();
calculation();

