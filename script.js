"use strict";

/**
 * The function prevents the default form submission behavior, closes the form modal, and displays an
 * alert message indicating that the message has been sent.
 * @param event - The event parameter is an object that represents the event that triggered the
 * function. In this case, it is likely a form submission event.
 */
function submitMessage(event) {
    event.preventDefault();
    event.target.querySelector(".btn-close").click();
    alert("Message sent!");
}

/**
 * The function changes the active state of elements in a carousel based on the target ID of a click
 * event.
 * @param event - The event parameter is an object that represents an event that has occurred, such as
 * a mouse click or a key press. It contains information about the event, such as the type of event,
 * the target element that triggered the event, and any additional data related to the event.
 */
function changeCarouselActive(event) {
    const target = event.target.id;
    const dataAboutTargets = document.querySelectorAll("[data-about-target]");
    const carouselItems = document.querySelectorAll(".carousel-item");

    /* This code is looping through all elements with the attribute "data-about-target" and checking if
   the value of their "data-about-target" attribute matches the ID of the element that triggered the
   event. If there is a match, the "active" class is added to the element's class list, making it
   the active element in a carousel. If there is no match, the "active" class is removed from the
   element's class list. */
    dataAboutTargets.forEach((element) => {
        if (target === element.dataset.aboutTarget) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

/**
 * The function fades the opacity of a navbar on scroll and then restores it after a delay.
 */
function fadeNavbarOnScroll() {
    const navbar = document.querySelector("nav");
    navbar.style.opacity = 0.25;
    setTimeout(() => {
        navbar.style.opacity = 1;
    }, 2000);
}

/* This code is adding event listeners to various elements on the webpage. */
document.getElementById("contactMeModal").addEventListener("submit", submitMessage);
document.querySelectorAll(".dropdown-item").forEach((dropDown) => {
    dropDown.addEventListener("click", changeCarouselActive);
});
document.getElementById("year").innerText = new Date().getFullYear();
window.addEventListener("scroll", fadeNavbarOnScroll);
