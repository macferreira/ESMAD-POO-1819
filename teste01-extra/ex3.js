const form = document.getElementById("form01");
const teamFilter = document.getElementById("sltTeam");
let playersTable = document.getElementById("playersTable");
let players = [];

function createPlayer(name, photo, team) {
    let player = {
        name: name,
        photo: photo,
        team: team
    }

    players.push(player);
}

function removePlayer() {
    let playerId = this.parentNode.getElementsByTagName('input')[1].value;
    players[playerId - 1].done = true
    renderTable();
}

function renderTable(teamFilter = "all") {

    filteredPlayers = [];
    playersTable.innerHTML = "";

    for (i = 0; i < players.length; i++) {
        if (!players[i].done && (teamFilter === "all" || teamFilter === players[i].team)) {
            filteredPlayer = players[i];
            filteredPlayer.playerId = i + 1;
            filteredPlayers.push(filteredPlayer);
        }
    }

    for (i = 0; i < filteredPlayers.length; i++) {
        if (i === 0 || (i) % 3 === 0) {
            currentTr = document.createElement("tr");
            playersTable.appendChild(currentTr);
        }
        let currentTd = document.createElement("td");
        currentPlayerHtml = `<div>${filteredPlayers[i].name}</div><div><img src="${filteredPlayers[i].photo}"></div><div><input type="button" value="Remover"><input type="hidden" name="playerId" value="${filteredPlayers[i].playerId}"></div>`;
        currentTd.innerHTML = currentPlayerHtml;

        currentTr.appendChild(currentTd);

        let inputRemovePlayer = currentTd.getElementsByTagName('input')[0];
        inputRemovePlayer.addEventListener('click', removePlayer);
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let txtName = document.getElementById("txtName").value;
    let txtPhoto = document.getElementById("txtPhoto").value;
    let sltTeam = document.getElementById("sltTeam").value;

    createPlayer(txtName, txtPhoto, sltTeam);
    renderTable();
});

teamFilter.addEventListener("change", function () {
    renderTable(teamFilter.value);
});
