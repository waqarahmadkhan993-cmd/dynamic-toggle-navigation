
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu and update the active link
navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navItems.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        navLinks.classList.remove("show");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Close the mobile menu with the Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});

// Keep the desktop menu in its normal layout after resizing
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});
