const body = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

colorBtn.addEventListener("click", onColorBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorBtn(event) {
  colorText.textContent = getRandomHexColor();
  body.style.backgroundColor = colorText.textContent;
}
