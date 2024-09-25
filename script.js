// Function to toggle the dropdown and hamburger menu
function toggleMenu() {
    const dropdown = document.querySelector(".dropdown");
    const hamburger = document.getElementById("hamburger");
    
    dropdown.classList.toggle("active"); // Toggle dropdown visibility
    hamburger.classList.toggle("active"); // Toggle hamburger transformation
}

// Click event for the hamburger menu
document.getElementById("hamburger").addEventListener("click", toggleMenu);

// Click event for outside the menu
document.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".dropdown");
    const hamburger = document.getElementById("hamburger");
    
    // Check if the click was outside the hamburger and dropdown
    if (!hamburger.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("active"); // Close dropdown
        hamburger.classList.remove("active"); // Reset hamburger icon
    }
});

// Keydown event for the Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const dropdown = document.querySelector(".dropdown");
        const hamburger = document.getElementById("hamburger");
        
        dropdown.classList.remove("active"); // Close dropdown
        hamburger.classList.remove("active"); // Reset hamburger icon
    }
});