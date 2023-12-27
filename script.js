var menu = document.querySelector("#nav-prt2 #menu");
var full = document.querySelector("#full-scr-nav");
var isOpen = false;

menu.addEventListener("click", function () {
  isOpen = !isOpen;

  full.style.top = isOpen ? "0%" : "-100%";

  document.querySelector("#logo").style.color = isOpen ? "#232025" : "#D5CDC4";
  document.querySelector("#nav-prt2 h2").style.display = isOpen ? "none" : "block";
  document.querySelector("#menu").style.color = isOpen ? "#232025" : "#D5CDC4";

  document.querySelector("#line-1").style.backgroundColor = isOpen ? "#232025" : "#D5CDC4";
  document.querySelector("#line-2").style.backgroundColor = isOpen ? "#232025" : "#D5CDC4";

  // Toggle the class 'openmenu' on the menu div
  document.querySelector("#menu").classList.toggle("openmenu", isOpen);
});

document.querySelector("#page-1 img").style.scale = "1"