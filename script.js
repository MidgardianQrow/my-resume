document.getElementId(contactForm).addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("thank you, " + name + "! Your message has been sent.");
    } else {
        alert("Please fill out all fields.");
    }
});