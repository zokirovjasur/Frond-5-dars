const closeBtn = document.getElementById("close-nav"),
  open = document.getElementById("open-nav"),
  nav = document.getElementById("nav");

window.addEventListener("click", (e) => {
  if (e.target.id == "close-nav") {
    nav.classList.add("max-lg:hidden");
  }
  if (e.target.id == "open-nav") {
    nav.classList.remove("max-lg:hidden");
  }
});

const darkModeToggle = document.getElementById("dark-mode");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
