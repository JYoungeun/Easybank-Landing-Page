const hamburger = document.getElementById("hamburger");
const dropdown = document.querySelector(".dropdown");

function toggleMenu() {
    dropdown.classList.toggle("active");
    hamburger.classList.toggle("active");
}

document.getElementById("hamburger").addEventListener("click", toggleMenu);

document.addEventListener("click", function(event) {
    if (!hamburger.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
        hamburger.classList.remove("active");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        dropdown.classList.remove("active");
        hamburger.classList.remove("active");
    }
});