// Importar header do index.js

function importHeader() {
    fetch("index.html")
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");

            const desiredPart = doc.getElementById("header").innerHTML;

            document.getElementById("headerLogin").innerHTML = desiredPart;
            const hideButton = (document.querySelector(
                ".header__nav"
            ).style.display = "none");
        });
}

importHeader();
