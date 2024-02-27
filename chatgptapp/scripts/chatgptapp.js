// Get the modal element
var modal = document.getElementById('popupModal');

// Show the modal after 10 seconds
setTimeout(function() {
    modal.style.display = "block";
}, 3000); // 3 seconds in milliseconds

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    var email = document.getElementById("emailInput").value; // Get email input value
    // You can add your own logic here, e.g., send email to server, show confirmation message, etc.
    alert("Email submitted: " + email);
    modal.style.display = "none"; // Close the modal after submission
});

// Toggle dropdown menu
document.querySelector('.dropbtn').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});
