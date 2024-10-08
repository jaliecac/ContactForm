function validateForm() {
    let isValid = true;
    let emptyCount = 0;

    // Get all the inputs to check if they are valid and get error spans
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const fError = document.getElementById("firstError");
    const f1Error = document.getElementById("first1Error");
    const lError = document.getElementById("lastError");
    const eError = document.getElementById("emailError");
    const mError = document.getElementById("messageError");
    const radios = document.getElementsByTagName("input");
    const radioError = document.getElementById("radioError");
    const checkBox = document.getElementById("consent");
    const cError = document.getElementById("consentError");

    if (fName == "" || f1Error == "") {
        fError.textContent = "This field is required";
        f1Error.textContent = "This field is required";
        isValid = false;
    }
    if (lName == "") {
        lError.textContent = "This field is required";
        isValid = false;
    }
    if (email == "" || !email.includes("@")) {
        eError.textContent = "Please enter a valid email address";
        isValid = false;
    }
    if (message == "") {
        mError.textContent = "This field is required";
        isValid = false;
    }
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].type == "radio") {
            if (radios[i].checked == false){
                emptyCount++;
            }
        }
        if (emptyCount == 2) {
            radioError.textContent = "Please select a query type"
            isValid= false;
        }
    }
    if (!checkBox.checked) {
        cError.textContent = "To submit this form, please consent to being contacted";
        isValid = false;
    }

    if (isValid == true) {
        alert("Form Submitted!");
    }

    return isValid;
}

function hideErrors() {
    const fError = document.getElementById("firstError");
    const f1Error = document.getElementById("first1Error");
    const lError = document.getElementById("lastError");
    const eError = document.getElementById("emailError");
    const mError = document.getElementById("messageError");
    const radioError = document.getElementById("radioError");
    const cError = document.getElementById("consentError");
    
    f1Error.textContent = "";
    fError.textContent = "";
    lError.textContent = "";
    eError.textContent = "";
    mError.textContent = "";
    radioError.textContent = "";
    cError.textContent = "";
}