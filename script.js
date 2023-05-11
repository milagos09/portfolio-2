"use strict";

function submitMessage(event) {
    event.preventDefault();
    event.target.querySelector(".btn-close").click();
    alert("Message sent!");
}

function changeCarouselActive(event) {
    const target = event.target.id;
    const dataAboutTargets = document.querySelectorAll("[data-about-target]");
    const carouselItems = document.querySelectorAll(".carousel-item");

    dataAboutTargets.forEach((element) => {
        if (target === element.dataset.aboutTarget) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

function fadeNavbarOnScroll() {
    const navbar = document.querySelector("nav");
    navbar.style.opacity = 0.25;
    setTimeout(() => {
        navbar.style.opacity = 1;
    }, 2200);
}

document.getElementById("contactMeModal").addEventListener("submit", submitMessage);

document.querySelectorAll(".dropdown-item").forEach((dropDown) => {
    dropDown.addEventListener("click", changeCarouselActive);
});

document.getElementById("year").innerText = new Date().getFullYear();

window.addEventListener("scroll", fadeNavbarOnScroll);
