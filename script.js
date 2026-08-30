document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.getElementById("menuToggle");
  const menu = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");
  const year = document.getElementById("year");

  // Current year
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // MOBILE MENU
  if (menuButton && menu) {

    menuButton.addEventListener("click", function (event) {
      event.preventDefault();

      menu.classList.toggle("open");

      const isOpen = menu.classList.contains("open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

      menuButton.textContent = isOpen ? "✕" : "☰";
    });

    // Make every menu link clickable
    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        menu.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open menu"
        );

        menuButton.textContent = "☰";

      });

    });
  }

  // BACK TO TOP
  if (backToTop) {

    window.addEventListener("scroll", function () {

      if (window.scrollY > 400) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }

    });

    backToTop.addEventListener("click", function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });
  }

});