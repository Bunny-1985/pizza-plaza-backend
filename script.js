document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-btn");
    const cartButtons = document.querySelectorAll(".cart-btn");
    const contactButton = document.querySelector(".contact-btn");

    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const orderData = {
                name: "John Doe",
                phone: "1234567890",
                address: "123 Pizza Street",
                pizza: "Margherita",
                quantity: 1
            };

            fetch("http://localhost:5000/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData)
            })
            .then(response => response.json())
            .then(data => alert(data.message))
            .catch(error => console.error("Error:", error));
        });
    });

    contactButton.addEventListener("click", () => {
        const contactData = {
            name: "John Doe",
            email: "john@example.com",
            message: "I love your pizza!"
        };

        fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactData)
        })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error("Error:", error));
    });
});

