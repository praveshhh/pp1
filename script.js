// Auto-scroll for restaurant cards
const restaurantList = document.querySelector('.restaurant-cards');

let scrollAmount = 0;
let scrollSpeed = 1; // Adjust to control the scroll speed

function autoScrollRestaurants() {
    scrollAmount += scrollSpeed;

    // Scroll the restaurant list
    restaurantList.scrollLeft = scrollAmount;

    // Reset when it reaches the end
    if (restaurantList.scrollLeft + restaurantList.clientWidth >= restaurantList.scrollWidth) {
        scrollAmount = 0;
    }

    requestAnimationFrame(autoScrollRestaurants);
}

// Start auto-scroll on page load
window.onload = () => {
    autoScrollRestaurants();
};
