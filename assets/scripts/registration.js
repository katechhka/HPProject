let loginSt = localStorage.getItem('login');
let link = "https://cdn-icons-png.flaticon.com/512/195/195138.png"
document.addEventListener("DOMContentLoaded", function () {
    if (loginSt !== null) {
        document.getElementById('signUp').style.display = "none";
        document.getElementById('img_avatar').style.width = '3em';
        document.getElementById('avatar').style.display = "block";
        if (localStorage.getItem('avatar') == "") {
            document.getElementById('img_avatar').src = link;
        }
        else {
            document.getElementById('img_avatar').src = localStorage.getItem('avatar');
        }
    }
})

document.getElementById('signUp').addEventListener("click", () => {
    document.getElementById('registrationForm').style.display = "flex";
    document.querySelector('.mainpage').classList.add("mainpage_click");
    let elements = [...document.getElementsByClassName("text")].forEach(item => {
        item.classList.add("text_click");
    })


})
document.getElementById('close').addEventListener("click", () => {
    document.getElementById('registrationForm').style.display = "none";
    document.querySelector('.mainpage').classList.remove("mainpage_click");
    let elements = [...document.getElementsByClassName("text")].forEach(item => {
        item.classList.remove("text_click");
    })

});

let mainpage = document.querySelector('.text');
let pas1 = document.getElementById('userPassword1');
let pas2 = document.getElementById('userPassword2');
document.getElementById('registration').addEventListener("click", (evt) => {
    if (pas1.value !== pas2.value) {
        evt.preventDefault();
        document.getElementById('pasInfo').innerHTML = "Passwords don't match!";
    }

    else {
        document.getElementById('pasInfo').innerHTML = " ";
    }

});
let Inputs = [...document.querySelectorAll('.form__item')].forEach(item => {
    item.addEventListener('input', () => {

        if (!item.validity.valid) {
            item.classList.add("error");
        } else {
            item.classList.remove("error");
            item.classList.add("valid");
        }
        if (pas2.value !== "" && pas2.value != pas1.value) {
            pas2.classList.add("error");
        }

    })
});

document.getElementById('regForm').addEventListener("submit", () => {
    document.querySelector('.mainpage').classList.remove("mainpage_click");
    let elements = [...document.getElementsByClassName("text")].forEach(item => {
        item.classList.remove("text_click");
    })
    document.getElementById('img_avatar').style.width = '3em';
    document.getElementById('avatar').style.display = "block";
    document.getElementById('signUp').style.display = "none";
    let login = document.getElementById('userLogin').value;
    let mail = document.getElementById('userEmail').value;
    let pas = document.getElementById('userPassword1').value;
    let avatar = document.getElementById('selectHero').value;

    let mailSt = localStorage.getItem('mail');
    let pasSt = localStorage.getItem('pas');
    let avatarSt = localStorage.getItem('avatar');

    if (loginSt === null) {
        localStorage.setItem('login', login);
    }
    if (mailSt === null) {
        localStorage.setItem('mail', mail);
    }
    if (pasSt === null) {
        localStorage.setItem('pas', pas);
    }
    if (avatarSt === null) {
        localStorage.setItem('avatar', avatar);
    }
    if (avatar === '') {
        localStorage.setItem('avatar', link);
    }
    if (avatar == "") {
        document.getElementById('img_avatar').src = link;
    }
    else {
        document.getElementById('img_avatar').src = localStorage.getItem('avatar');
    }
    let Inputs = [...document.querySelectorAll('.form__item')].forEach(item => {
        if (item.validity.valid) {
            document.getElementById('registrationForm').style.display = "none";
            mainpage.classList.remove("mainpage_click");


            let mail = localStorage.getItem("mail");
            let pas = localStorage.getItem("pas");
            let login = localStorage.getItem("login");
            let userFormPic = document.getElementById('userFormPic');

            let aboutInput = document.getElementById('LKuserComment').value;
            const loginUpper = login;
            const splitted = loginUpper.split("")
            const first = splitted[0].toUpperCase()
            splitted.splice(0, 1)
            const resultLogin = [first, ...splitted].join("");

            document.getElementById("avatar").addEventListener("click", () => {
                document.getElementById("userForm").style.display = "block";
                document.querySelector('.mainpage').classList.add("mainpage_click");
                let elements = [...document.getElementsByClassName("text")].forEach(item => {
                    item.classList.add("text_click");
                })
                userFormPic.src = localStorage.getItem('avatar');
                let aboutMe = localStorage.getItem("about");
                if (aboutMe !== null) {
                    document.getElementById('LKuserComment').value = aboutMe;
                }
            });


            document.getElementById('kabinet_save').addEventListener('click', () => {
                localStorage.setItem('about', document.getElementById('LKuserComment').value);
                localStorage.setItem('login', document.getElementById("LKuserLogin").value);
                localStorage.setItem('pas', document.getElementById("LKuserPassword").value);
                localStorage.setItem('mail', document.getElementById("LKuserEmail").value);
                if (document.getElementById("LKuserAvatar").value !== "") {
                    localStorage.setItem('avatar', document.getElementById("LKuserAvatar").value);
                }

                else {
                    userFormPic.src = localStorage.getItem('avatar');
                }
                document.getElementById("userForm").style.display = "none";
                document.getElementById("img_avatar").src = localStorage.getItem('avatar');
                document.querySelector('.mainpage').classList.remove("mainpage_click");
                let elements = [...document.getElementsByClassName("text")].forEach(item => {
                    item.classList.remove("text_click");
                })
            });
            document.getElementById("kabinet_close").addEventListener("click", () => {
                document.getElementById("userForm").style.display = "none";
                document.querySelector('.mainpage').classList.remove("mainpage_click");
                let elements = [...document.getElementsByClassName("text")].forEach(item => {
                    item.classList.remove("text_click");
                })
            });
            document.getElementById('welcomeUser').innerHTML = `Hi, ${resultLogin}`
            document.getElementById("LKuserLogin").value = login;
            document.getElementById("LKuserEmail").value = mail;
            document.getElementById("LKuserPassword").value = pas;
        }
    });
});

