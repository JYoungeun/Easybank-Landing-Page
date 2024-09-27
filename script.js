const hamburger = document.getElementById("hamburger");
const dropdown = document.querySelector(".dropdown");
const closeIcon = document.getElementById("close-icon");

function toggleMenu() {
    dropdown.classList.toggle("active");
    hamburger.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
}

function toggleCloseIcon() {
    dropdown.classList.toggle("active");
    hamburger.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
}

hamburger.addEventListener("click", toggleMenu);

closeIcon.addEventListener("click", toggleCloseIcon);

document.addEventListener("click", function(event) {
    if (!hamburger.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
        hamburger.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        dropdown.classList.remove("active");
        hamburger.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }
});