// modal effect

let modal = document.querySelector(".modal");
let open = document.querySelector(".open-button");
let close = document.querySelector(".close-button");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");
let navbarHandle = document.querySelector(".navbar-handle");
let mobileButtons = document.getElementsByClassName(".mobile-button");

open.addEventListener("click", function () {
  modal.classList.add("unhidden");
  modal.style.display = "flex";
  body.style.overflowY = "hidden";
});

close.addEventListener("click", function () {
  modal.classList.remove("unhidden");
  modal.style.display = "none";
  body.style.overflowY = "scroll";
});

// scroll effect

document.onreadystatechange = function () {
  let lastScrollPosition = 0;
  const mediaQuery = window.matchMedia("(max-width: 376px)");
  const navbar = document.querySelector(".navbar");
  let deliveryAddress = document.querySelector("#top-address-container");
  window.addEventListener("scroll", function () {
    lastScrollPosition = window.scrollY;

    if (lastScrollPosition > 100) {
      navbar.classList.add("navbar-white");
    } else {
      navbar.classList.remove("navbar-white");
    }
    if (lastScrollPosition > 280) {
      deliveryAddress.style.display = "block";
    } else {
      deliveryAddress.style.display = "none";
    }

    if (mediaQuery.matches && lastScrollPosition > 100) {
      navbarHandle.style.display = "none";
      mobileButtons.style.display = "none";
    } else if (mediaQuery.matches && lastScrollPosition < 100) {
      navbarHandle.style.display = "flex";
      mobileButtons.style.display = "block";
    }
  });
};

// document.mediaStateChange = function() {
//   const mediaQuery = widow.matchMedia("(max-width: 375px)");

//   if (mediaQuery.matches) {

//   }
// }
