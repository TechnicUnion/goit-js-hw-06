function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

// btnCreateEl.addEventListener("click", onButtonCreate);
// btnDestroyEl.addEventListener("click", onButtonDestroy);

// function onButtonCreate {
// }

function createBoxes(amount) {
  let box = [];
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    let div = `<div style="background-color: ${getRandomHexColor()};
width: ${boxSize}px; height: ${boxSize}px"></div>`;
    box.push(div);
    boxSize += 10;
  }
  return boxesEl.insertAdjacentHTML("beforeend", box.join(""));
}
