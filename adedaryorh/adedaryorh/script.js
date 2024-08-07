document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(form);
        console.log("Form Data:");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Send the data to a server using fetch or AJAX
         fetch('/submit', {
             method: 'POST',
             body: formData
         }).then(response => response.json())
         .then(data => {
             console.log(data);
         })
         .catch(error => {
            console.error(error);
         });
    });
});