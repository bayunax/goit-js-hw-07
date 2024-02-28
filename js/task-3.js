const userInput = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");
userInput.addEventListener("input", handleInput);
function handleInput(event) {
    const dataText = event.currentTarget.value.trim;
    userOutput.textContent = dataText || "Anonymus"
}

