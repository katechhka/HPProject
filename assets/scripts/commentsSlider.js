let btn = document.getElementById("btnEnd");
let btnStart = document.getElementById("btnStart");
let block = document.getElementById("block");

btnEnd.onclick = () => {
    block.scrollBy(0, 120); // на 120 px вниз
};
btnStart.onclick = () => {
    block.scrollBy(0, -120); // на 120 px вверх
};

// кнопки появляются после введения 5-го комеентария, чтоб мб листать
function showButtons() {
    if (comments.length < 2) {
        btnEnd.style.display = "none";
        btnStart.style.display = "none";
    } else {
        btnEnd.style.display = "flex";
        btnStart.style.display = "flex";
    }
}
