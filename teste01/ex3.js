const form = document.getElementById("form01");
const priorityFilter = document.getElementById("txtPriority");
let tasks = [];

/** Modal, From w3c https://www.w3schools.com/howto/howto_css_modals.asp */
// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function giveFocusOnTitle() {
    document.getElementById("txtTitle").focus()
}

function validateTxtTitle(txtTitleToValidate) {
    return txtTitleToValidate === "" ? false : true;
}

function validateTxtDesc(txtDescToValidate) {
    return txtDescToValidate.length > 100 ? false : true;
}

function createTask(title, description, priority) {
    let task = {
        title: title,
        description: description,
        priority: priority
    }

    tasks.push(task);
}

function showTask() {
    let taskId = this.parentNode.getElementsByTagName('input')[2].value;

    document.getElementById("modal-task-description").innerHTML = tasks[taskId - 1].description;
    modal.style.display = "block";
}

function doTask() {
    let taskId = this.parentNode.getElementsByTagName('input')[2].value;
    tasks[taskId - 1].done = true
    renderTable();
}

function renderTable(filterPriority = "all") {

    console.log(filterPriority);
    let tableContainer = document.getElementById("tasksTable");
    tableContainer.innerHTML = "";

    let table = document.createElement("table");
    tableContainer.appendChild(table);

    table.innerHTML = `<tr><th>Título</th><th>Prioridade</th><th>Opções</th></tr>`;

    for (i = 0; i < tasks.length; i++) {
        if (!tasks[i].done && (filterPriority === "all" || filterPriority === tasks[i].priority)) {
            let tempTr = document.createElement("tr");
            tempTr.innerHTML = `<td>${tasks[i].title}</td><td>${tasks[i].priority}</td><td><input type="button" value="Ver Tarefa"><input type="button" value="Realizar Tarefa"><input type="hidden" name="taskId" value="${i + 1}"></td>`;

            table.appendChild(tempTr);

            let inputShowTask = tempTr.getElementsByTagName('input')[0];
            inputShowTask.addEventListener('click', showTask);

            let inputDoTask = tempTr.getElementsByTagName('input')[1];
            inputDoTask.addEventListener('click', doTask);
        }
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let error = [];

    // validate title
    let txtTitle = document.getElementById("txtTitle").value;
    if (!validateTxtTitle(txtTitle)) {
        error.push("Título da tarefa não definido.\r\n");
    }

    // validate task description
    let txtDesc = document.getElementById("txtDesc").value;
    if (!validateTxtDesc(txtDesc)) {
        error.push("Descrição da tarefa não pode ter mais de 100 caracteres.\r\n");
    }

    let txtPriority = document.getElementById("txtPriority").value;

    // if there are errors we need to block submit and alert the user
    if (error.length > 0) {
        let errorString = "ERRO!\r\n";
        for (i = 0; i < error.length; i++) {
            errorString += error[i]
        }

        alert(errorString);
    } else {
        createTask(txtTitle, txtDesc, txtPriority);
        renderTable();
    }

    giveFocusOnTitle()
});

form.addEventListener("reset", function () {
    giveFocusOnTitle()
});

priorityFilter.addEventListener("change", function () {
    renderTable(priorityFilter.value);
});
