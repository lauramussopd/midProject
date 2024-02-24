function validateIronhack() {
    const string = document.getElementById("full-name").value;
    if (string === "ironhack" || string === "Ironhack") {
        alert("I am Ironhack");
    }
    else if (string === "") {
        alert("Put something!");
    }
    else {
        alert("Glad to hear you're not me");
    }
}

function validateEmail() {
    const string = document.getElementById("email-form").value;
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailPattern.test(string)) {
        alert("This is an email");
    } else {
        alert("This is NOT an email") 
    }
}

function checkPhone() {
    const phone = document.getElementById("phone").value;
    const phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if(phone.value.match(phoneNum)) {
            alert("CORRECT phone number");
        }
        else {
            alert("RETRY with a valid phone number");
        }
}



const submit = document.getElementById("submit-button");

submit.addEventListener("click", validateAll);

function validateAll(e) {
    e.preventDefault();
    validateIronhack();
    validateEmail();
    checkPhone();
}