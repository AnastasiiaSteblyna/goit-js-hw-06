const input = document.querySelector("#validation-input");
const inputDataLength = Number(input.getAttribute("data-length"));

input.addEventListener("input", () => {
  input.addEventListener("blur", changeInputColor);
});

function changeInputColor() {
  if (input.value.trim().length !== inputDataLength) {
    input.classList.add("invalid");
  } else {
    input.classList.replace("invalid", "valid");
  }
}
