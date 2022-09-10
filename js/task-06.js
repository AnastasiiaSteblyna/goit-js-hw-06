const input = document.querySelector("#validation-input");
const inputDataLength = Number(input.getAttribute("data-length"));

input.addEventListener("input", () => {
  //   console.log(inputDataLength, input.value.length);
  input.addEventListener("blur", changeInputColor);
});

function changeInputColor() {
  if (input.value.length !== inputDataLength) {
    input.classList.add("invalid");
  } else {
    input.classList.replace("invalid", "valid");
  }
}
