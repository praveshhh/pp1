// Auto-scroll for donation and restaurant cards
const donationList = document.querySelector('.donation-cards');
const restaurantList = document.querySelector('.restaurant-cards');

let scrollAmountDonation = 0;
let scrollAmountRestaurant = 0;
const scrollSpeed = 1; // Adjust to control the scroll speed

function autoScroll(element, scrollAmount) {
    scrollAmount += scrollSpeed;

    // Scroll the element
    element.scrollLeft = scrollAmount;

    // Reset when it reaches the end
    if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
        scrollAmount = 0;
    }

    requestAnimationFrame(() => autoScroll(element, scrollAmount));
}

// Start auto-scroll on page load
window.onload = () => {
    autoScroll(donationList, scrollAmountDonation);
    autoScroll(restaurantList, scrollAmountRestaurant);
};
