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

function validatePreferedGames() {
    let preferedGamesSelected = 0;

    let preferedGames = [
        document.getElementById("preferedGame1"),
        document.getElementById("preferedGame2"),
        document.getElementById("preferedGame3"),
        document.getElementById("preferedGame4"),
        document.getElementById("preferedGame5"),
        document.getElementById("preferedGame6")
    ]

    for (i = 0; i < preferedGames.length; i++) {
        if (preferedGames[i].checked === true) {
            preferedGamesSelected++
        }
    }

    return preferedGamesSelected > 3 ? false : true;
}

function validatePasswords() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    return password1 !== password2 ? false : true;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let error = [];

    // validate dob
    let dob = document.getElementById("dob").value;
    if (!validateDOB(dob)) {
        error.push("Utilizador tem de ter 18 anos ou mais.\r\n");
    }

    // validate preferedGames options
    if (!validatePreferedGames()) {
        error.push("Utilizador apenas pode seleccionar 3 tipos de jogos.\r\n");
    }

    // validate preferedGames options
    if (!validatePasswords()) {
        error.push("Password e confirmação de password não são iguais.\r\n");
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
