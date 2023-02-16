const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navMenu");
const links = document.querySelectorAll(".navMenu > li");
console.log(links);

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  hamburger.classList.toggle("toggle");
});
