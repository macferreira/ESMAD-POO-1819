const form = document.getElementById("form01");
const div = document.getElementById("div01");
const buttonDeleteLast = document.getElementById("delete-last-btn");
const buttonDeleteAll = document.getElementById("delete-all-btn");

let proverbs = [];

function renderProverbsDiv() {
    if (proverbs.length === 0) {

        div.innerHTML = "<p>SEM PROVÉRBIOS</p>";
    } else {
        div.innerHTML = "";

        for (i = proverbs.length-1; i >= 0 ; i--) {

            let currentParagraph = document.createElement("p");
            let currentProverb = document.createTextNode(proverbs[i]);
            
            currentParagraph.appendChild(currentProverb);
            div.appendChild(currentParagraph);
        }
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let proverb = document.getElementById("proverb");

    proverbs.push(proverb.value);

    renderProverbsDiv();

    proverb.value = "";
});

buttonDeleteLast.addEventListener("click", function() {
    proverbs.pop();
    renderProverbsDiv();
});

buttonDeleteAll.addEventListener("click", function() {
    proverbs = [];
    renderProverbsDiv();
});
