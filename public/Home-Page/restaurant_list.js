let restaurant_list = document.getElementById("restaurant-list")

let generateShop = () => {
    return (restaurant_list.innerHTML = restaurantsData.map((restaurant_info) => {
        let { id, name, img, rating, href } = restaurant_info;
        return `
        <div class="restaurant_card" style="background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%),url(${img});">
          <div class="name_and_ratings_wrapper">
            <div class="stars_trial" style="--rating: ${rating};" aria-label="Rating of this product is ${rating} out of 5."></div>
            <div><div class="restaurant_name_wrapper"><a href="${href}" style="color: white;">${name}</a></div></div>
          </div> 
        </div>
        `;
    }).join(""));
};


document.addEventListener('DOMContentLoaded', function () {
    generateShop();
  });
  