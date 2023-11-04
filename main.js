const open = document.getElementById("open");
const openA = document.getElementById("open1");
const close = document.getElementById("close");
const modal = document.getElementById("modal-container");

open.addEventListener("click", () => {
  modal.classList.add("show");
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});

openA.addEventListener("click", () => {
  modal.classList.add("show");
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});
