let comments = [];
let login = localStorage.getItem("login");
let aboutInput = document.getElementById('LKuserComment').value;
const loginUpper = login;
const splitted = loginUpper.split("")
const first = splitted[0].toUpperCase()
splitted.splice(0, 1)
const resultLogin = [first, ...splitted].join("");
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("comment-name").value = resultLogin;

});

let form = document.getElementsByClassName("comments__form-group")[0];
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let commentName = document.getElementById("comment-name"); //объявляю переменные для вводимых данных (имя + комментарий)
    let commentBody = document.getElementById("comment-body");

    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000),
    };

    const newElement = document.createElement("div"); //создаю новый див, куда буду выводить введенную информацию (фото + имя + коммент + время)

    let avatar = "assets/images/mainpage/user.png";
    const imgUrl = localStorage.getItem("avatar");
    const imgTag = `<img src=${imgUrl || avatar
        } style='position:relative; width: 60px; top: 10px; left: 5px;' alt='avatar' />`;

    let login = localStorage.getItem("login");



    newElement.innerHTML = `
    ${imgTag}
    <p class="comments__name" role="alert">${resultLogin || commentName.value}:</p> 
    <p class="comments__content" role="alert">${commentBody.value}</p>
    <p class="comments__time"><em>${timeConverter(Math.floor(Date.now() / 1000))}</em></p>`;

    const commentsWrapper = document.querySelector(".comments__result-item");
    commentsWrapper.prepend(newElement);

    //очищаем строку
    commentBody.value = "";

    comments.push(comment); // добавляем коммент в массив

    saveComments();
    showButtons();
    showComments();


    let block = document.getElementById("block"); // получение блока с комментариями для слайдера
    block.scrollTo(0, 0);
});

function showComments() {
    let commentField = document.getElementById("comment-field");
    let out = "";
    comments.forEach(function (item) {
        out += `<p class="comments__name" role="alert">${login || commentName.value}:</p>
        <p class="comments__content" role="alert">${commentBody.value}</p>
        <p class="comments__time"><em>${timeConverter(Math.floor(Date.now() / 1000))}</em></p>`;
    });
    commentField.innerHTML = out;

    const commentsWrapper = document.querySelector(".comments__result-item");
}

function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
    if (localStorage.getItem("comments")) comments = JSON.parse(localStorage.getItem("comments"));
    showComments();
}

function timeConverter(UNIX_timestamp) {
    // вычисление времени введенного комментария
    let a = new Date(UNIX_timestamp * 1000);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + " " + month + " " + year;
    return time;
}
