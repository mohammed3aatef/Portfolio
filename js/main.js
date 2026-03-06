let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active", "text-white");
        link.classList.add("text-warning");
      });

      let activeLink = document.querySelector('.nav-link[href*="' + id + '"]');

      if (activeLink) {
        activeLink.classList.add("active", "text-white");
        activeLink.classList.remove("text-warning");
      }
    }
  });
});
