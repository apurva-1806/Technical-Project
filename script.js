// JavaScript for smooth scrolling (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for the marquee effect
document.addEventListener('DOMContentLoaded', () => {
    const marqueeContent = document.querySelector('.marquee-content');
    const marquee = document.querySelector('.marquee');

    marqueeContent.innerHTML += marqueeContent.innerHTML; // Duplicate the marquee content for seamless effect

    const marqueeWidth = marqueeContent.offsetWidth;
    let currentPosition = 0;

    function scrollMarquee() {
        currentPosition--;
        if (currentPosition <= -marqueeWidth) {
            currentPosition = 0;
        }
        marqueeContent.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(scrollMarquee);
    }

    scrollMarquee();
});

// JavaScript for range slider behavior (optional)
const rangeSlider = document.querySelector('input[type="range"]');
rangeSlider.addEventListener('input', (event) => {
    const value = event.target.value;
    console.log(`Slider value: ${value}`);
    // Additional behavior or styling based on slider value can be added here
});
// Customer Counter Auto-Increment
let count = 10000;  // Starting value

function updateCounter() {
    count += Math.floor(Math.random() * 5) + 1; // Increment randomly by 1-5
    document.getElementById("customer-counter").innerText = count.toLocaleString();
}

setInterval(updateCounter, 3000); // Update every 3 seconds
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const products = document.querySelectorAll(".product");

    searchBar.addEventListener("keyup", function () {
        let filter = searchBar.value.toLowerCase();

        products.forEach(product => {
            let productName = product.querySelector("h3").innerText.toLowerCase();
            if (productName.includes(filter)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
function searchProducts() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.querySelector("h3").innerText.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
