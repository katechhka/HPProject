document.getElementById("avatar").addEventListener("click", () => {
    document.getElementById("userForm").style.display = "block";
    document.querySelector('.mainpage').classList.add("mainpage_click");
    let elements = [...document.getElementsByClassName("text")].forEach(item => {
        item.classList.add("text_click");
    })

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
document.getElementById("LKuserLogin").value = localStorage.getItem("login");
document.getElementById("LKuserEmail").value = localStorage.getItem("mail");
document.getElementById("LKuserPassword").value = localStorage.getItem("pas");
userFormPic.src = localStorage.getItem('avatar');
