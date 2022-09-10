const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

console.log(inputName, outputName);

inputName.addEventListener("input", onChangeName);

function onChangeName() {
  outputName.textContent =
    inputName.value === "" ? `Anonymous` : `${inputName.value}`;
}
