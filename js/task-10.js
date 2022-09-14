const destroyBtn = document.querySelector(`button[data-destroy]`);
const createBtn = document.querySelector(`button[data-create]`);
const inputNum = document.querySelector(`[type="number"]`);
const mainBox = document.querySelector(`#boxes`);

createBtn.addEventListener(`click`, onCreateBtn);

destroyBtn.addEventListener(`click`, () => {
  inputNum.value = "";
  mainBox.innerHTML = "";
});

function onCreateBtn() {
  let array = [];
  let boxSize = 30;

  for (let i = 1; i <= Number(inputNum.value); i += 1) {
    boxSize += 10;
    const box = document.createElement(`div`);
    box.style.display = `inline-block`;
    box.style.padding = boxSize + `px`;
    box.style.backgroundColor = getRandomHexColor();
    array.push(box);
    console.log(array);
  }

  const markup = array.map((box) => box.outerHTML).join("");

  mainBox.insertAdjacentHTML("beforeend", markup);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
