const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll("nav li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};
//navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("header-scrolled");
    document.getElementById("navbar").classList.remove("header");
  } else {
    document.getElementById("navbar").classList.add("header");
    document.getElementById("navbar").classList.remove("header-scrolled");
  }
}

navSlide();
