document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".submit-btn");

    if (!submitButton) {
        console.error("Submit button not found!");
        return;
    }

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        const name = document.querySelector("[name='name']").value;
        const email = document.querySelector("[name='email']").value;
        const phone = document.querySelector("[name='phone']").value;
        const address = document.querySelector("[name='address']").value;
        const subject = document.querySelector("[name='subject']").value;
        const message = document.querySelector("[name='message']").value;

        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        fetch("https://script.google.com/macros/s/AKfycbzPr9-gpbS8p7MCX_HibkzByI2ykoJO2-JuVVdOISgmiah_gvPPRp6HKQrb1VdmK114/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, address, subject, message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                alert("Your response has been recorded!");
            } else {
                alert("Failed to submit response.");
            }
        })
        .catch(error => alert("Failed to submit response."));
    });
});
