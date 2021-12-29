// Navbar script
(function () {
  if (document.querySelector("#top-nav-toggle")) {
    var navToggle = document.querySelector("#top-nav-toggle");

    function watchNavClose(e) {
      var topNav = document.querySelector(".top-bar");
      if (!e.path.includes(topNav)) {
        openCloseNav();
        document.documentElement.removeEventListener("click", watchNavClose);
      }
    }

    function openCloseNav() {
      var navToggle = document.querySelector("#top-nav-toggle");

      if (!navToggle.classList.contains("closed")) {
        navToggle.classList.add("closed");
        document.querySelector("#top-bar__nav").classList.remove("collapsed");
        document.querySelector("html").addEventListener("click", watchNavClose);
      } else {
        navToggle.classList.remove("closed");
        document.querySelector("#top-bar__nav").classList.add("collapsed");
        document.documentElement.removeEventListener("click", watchNavClose);
      }
    }

    navToggle.addEventListener("click", openCloseNav);
  }
})();



// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      top: position,
      left: 0,
    });

    navigation.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// preloader
window.addEventListener("load", () => {
  const loader = document.getElementById("pre-loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 2000);
});

// PopUp
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    popup.classList.add("show");
  }, 5000);
});
