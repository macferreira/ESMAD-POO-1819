const form = document.getElementById("form01");

function validateDOB(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age > 17 ? true : false;
}

function validateWorkArea() {

    let validateWorkAreaError = false;
    let workAreaNodeList = document.getElementsByName("workArea");
    let workAreaSelected = "";
    let workAreaOtherValue = document.getElementById("workAreaOther").value;

    for (i=0; i < workAreaNodeList.length; i++) {
        if (workAreaNodeList[i].checked) {
            workAreaSelected = workAreaNodeList[i].value;
        }
    }

    if (workAreaSelected === "") {
        validateWorkAreaError = "Deve seleccionar uma área de trabalho.\r\n";
    }

    if (workAreaSelected === "other" && workAreaOtherValue === "") {
        validateWorkAreaError = "Ao seleccionar outro como área de trabalho deverá preencher campo de texto.\r\n";
    }

    return validateWorkAreaError;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let error = [];

    // validate dob
    let dob = document.getElementById("dob").value;
    if (!validateDOB(dob)) {
        error.push("Utilizador tem de ter 18 anos ou mais.\r\n");
    }

    // validate workArea options
    validateWorkAreaError = validateWorkArea();
    if (validateWorkAreaError !== false) {
        error.push(validateWorkAreaError);
    }

    // if there are errors we need to block submit and alert the user
    if (error.length > 0) {
        let errorString = "NÂO REGISTADO!\r\n";
        for (i = 0; i < error.length; i++) {
            errorString += error[i]
        }

        alert(errorString);
    } else {
        let userName = document.getElementById("name").value;
        let successString = "OBRIGADO PELO SEU REGISTO " + userName;
        alert(successString);
    }
});
