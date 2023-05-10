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

document.getElementById("contactMeModal").addEventListener("submit", submitMessage);

document.querySelectorAll(".dropdown-item").forEach((dropDown) => {
    dropDown.addEventListener("click", changeCarouselActive);
});
