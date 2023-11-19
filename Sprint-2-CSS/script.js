function myFunction() {
  let navBar = document.getElementById("navBar");
  let navLinks = document.getElementById("navLinks");
  let icon = document.querySelector(".icon img");

  // Toggle class for nav-bar
  navBar.classList.toggle("rwd");

  // Toggle class for nav-links
  navLinks.classList.toggle("rwdd");

  // Toggle image source for the icon
  if (icon.getAttribute("src") === "./assets/menu.svg") {
    icon.setAttribute("src", "./assets/close-menu.svg");
  } else {
    icon.setAttribute("src", "./assets/menu.svg");
  }
}
