function randomPage() {
    var pages = [
        "../Restaurant2/restaurant.html",
        "../Restaurant3/restaurant.html",
        "../Restaurant1/restaurant.html",
        "../Restaurant5/restaurant.html",
        "../Restaurant6/restaurant.html",
    ];
    var randomIndex = Math.floor(Math.random() * pages.length);
    var randomPage = pages[randomIndex];
    window.location.href = randomPage;
}
