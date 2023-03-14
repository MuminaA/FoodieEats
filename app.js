// modal effect

let modal = document.querySelector(".modal");
let open = document.querySelector(".open-button");
let close = document.querySelector(".close-button");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");

open.addEventListener("click", function() {
    modal.classList.add("unhidden");
    modal.style.display = "flex";
    body.style.overflowY = "hidden";
});

close.addEventListener("click", function() {
    modal.classList.remove("unhidden");
    modal.style.display = "none";
    body.style.overflowY = "scroll";
})

// scroll effect

document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100)
      navbar.classList.add('navbar-white');
    else
      navbar.classList.remove('navbar-white');
  });
}