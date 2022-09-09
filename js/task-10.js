function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", () => {
  return createBoxes(inputEl.value);
});
btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let newBoxes = [];
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    newBoxes.push(box);
    boxSize += 10;
    //     let box = `<div style="background-color: ${getRandomHexColor()};
    // width: ${boxSize}px; height: ${boxSize}px"></div>`;
  }
  return boxesEl.append(...newBoxes);
  // return boxesEl.insertAdjacentHTML("beforeend", box.join(""));
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
