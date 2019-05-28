const form = document.getElementById("form01");
const table = document.getElementById("table01");

let images = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let imageURL = document.getElementById("image").value;

    images.push(imageURL);

    table.innerHTML = "";

    let currentTr = null;
    for (i = 0; i < images.length; i++) {

        if (i === 0 || (i) % 3 === 0) {
            currentTr = document.createElement("tr");
            table.appendChild(currentTr);
        }

        let currentImage = document.createElement("img");
        currentImage.setAttribute("src", images[i]);

        let currentTd = document.createElement("td");
        currentTd.appendChild(currentImage);

        currentTr.appendChild(currentTd);
    }
});
