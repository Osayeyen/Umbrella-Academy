document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded");

    // Get the form element
    const form = document.getElementById('registerForm');

    // Check if the form exists before adding the event listener
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form field values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;

            // Log the form data
            console.log("Form Submitted:", { name, email, address });
        });
    }
});
