function showSidebar() {
  const hamberger_menu = document.querySelector(".hamberger_menu");
  const menu = document.querySelector(".Menu");
  hamberger_menu.style.display = "flex";
  menu.style.opacity = 0;
}
function hideSidebar() {
  const hamberger_menu = document.querySelector(".hamberger_menu");
  const menu = document.querySelector(".Menu");
  hamberger_menu.style.display = "none";
  menu.style.opacity = 1;
}
