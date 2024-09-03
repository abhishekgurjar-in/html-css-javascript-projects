document.addEventListener("DOMContentLoaded", function () {
    const cartBtn = document.querySelector(".cart");
    const cartSection = document.querySelector(".cart-section");
    const menuBtn = document.querySelector(".menu");
    const hamburger = document.querySelector(".menu-content");
    const closeBtn = document.querySelector(".close-btn");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("mainImage");
    const cartAmount = document.querySelector(".cart-amount span");
    const addToCartBtn = document.querySelector(".add-to-cart");

    let itemCount = 1; // Initial cart amount
    const maxItems = 4; // Maximum items in cart

    cartBtn.addEventListener("click", () => {
        toggleCartSection();
    });

    menuBtn.addEventListener("click", () => {
        hamburger.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        hamburger.style.display = "none";
    });

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            mainImage.src = thumbnail.getAttribute("data-src");
        });
    });

    addToCartBtn.addEventListener("click", () => {
        if (itemCount > 0) {
            addToCart();
        }
    });

    function toggleCartSection() {
        if (cartSection.style.display === "none" || cartSection.style.display === "") {
            cartSection.style.display = "block";
        } else {
            cartSection.style.display = "none";
        }
    }

    function addToCart() {
        // Logic to add item to cart section
        const cartContent = document.querySelector(".cart-content");
        const newItem = document.createElement("div");
        newItem.textContent = ` ${itemCount} Fall Limited Edition
Sneakers Added Successfully`;
        cartContent.appendChild(newItem);
        itemCount = 1; // Reset cart amount after adding to cart
        cartAmount.textContent = itemCount;
        toggleCartSection(); // Close cart section after adding
    }

    // Increase cart amount
    document.querySelector(".plus").addEventListener("click", () => {
        if (itemCount < maxItems) {
            itemCount++;
            cartAmount.textContent = itemCount;
        }
    });

    // Decrease cart amount
    document.querySelector(".minus").addEventListener("click", () => {
        if (itemCount > 1) {
            itemCount--;
            cartAmount.textContent = itemCount;
        }
    });
});
