const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
function handleInput(event) {
    const dataText = event.currentTarget.value.trim();
    output.textContent = dataText || "Anonymous"
}
input.addEventListener("input", handleInput);


