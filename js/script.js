const btn_movee = document.querySelector("#btn-movee");
const btn_move = document.querySelector("#btn-move");
const container = document.querySelector(".container");

btn_move.addEventListener("click", () => {
  container.classList.add("btn-move");
});

btn_movee.addEventListener("click", () => {
  container.classList.remove("btn-move");
});
