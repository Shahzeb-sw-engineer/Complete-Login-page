function showtext() {
    let input = document.getElementById("input")
    if (input.type === "password") {
        input.type = "text"
    }
    else {
        input.type = "password"
    }
}

const showAlert = (message)=>{
   let container = document.getElementById("alert-container")
    let alert_message = document.getElementById("alert-message")
    alert_message.textContent = message

    container.classList.remove("hidden")

}
const closealert = ()=>{
    let container = document.getElementById("alert-container")
    container.classList.add("hidden")
}
function submitform(event) {
    event.preventDefault();
    let email = document.getElementById("Email")
    let input = document.getElementById("input");
    if (email.value.trim() === "" ) {
        showAlert("Email   field cannot be empty.");
        input.focus();
        return;
    }
    else if (input.value.trim() === ""){
        showAlert("Password  fields cannot be empty.");
        email.focus();
        return;
    }
    else if (input.value.length < 6) {
        showAlert("Password should not be less  than 6 characters")
        input.focus();
        return;
    }
    else {
        window.location.href = "profile.html"
        showAlert("successfullly loged in")
    }
}
