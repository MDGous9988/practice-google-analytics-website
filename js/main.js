

function trackButtonClick(action, label) {
    gtag("event", "button_click", {
        event_category: "engagement",
        button_name: action,
        event_label: label,
    });
    alert("Button clicked: " + action);
}

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        gtag("event", "generate_lead", {
            event_category: "lead_generation",
            method: "Contact Form",
        });
        alert("Form submitted! (Check GA4 DebugView)");
        window.location.href = "thankyou.html";
    });

function trackAddToCart(productName, productCategory, price) {
    gtag("event", "add_to_cart", {
        currency: "USD",
        value: price,
        items: [
            {
                item_id: productName.replace(/\s/g, "_").toLowerCase(),
                item_name: productName,
                item_category: productCategory,
                price: price,
                quantity: 1,
            },
        ],
    });
    alert(productName + " added to cart! (Simulated)");
}
