const form = document.querySelector(".login-form")
form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
const elements = event.currentTarget.elements;
const infoEmail = elements.email.value.trim();
const  infoPassword =  elements.password.value.trim()
    
    if(infoEmail === "" || infoPassword ==="") {
        alert("All form fields must be filled in")
        return
}
const info = {
    email: infoEmail,
    password: infoPassword
}
console.log(info)
event.currentTarget.reset()
}
