
$("#hero").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#searchButton").click();
    }
});

let searchBtn = document.querySelector('.mainpage__container__button');
searchBtn.addEventListener('click', function () {

    let heroName = document.getElementById('hero').value;
    let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regName.test(heroName)) {
        document.getElementById('res').textContent =
            'Enter first and last name!';
    }

    if (heroName.length !== 0) {
        let array = heroName.split(" ");
        let name = array[0].split('');
        let first_name = name[0].toUpperCase()
        name.splice(0, 1);
        let resultname = [first_name, ...name].join('');
        let surname = array[1].split('');
        let first_surname = surname[0].toUpperCase();
        surname.splice(0, 1);
        let resultsurname = [first_surname, ...surname].join('');
        heroName = resultname + " " + resultsurname;
    }


    fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(heroes => {
            for (let hero of heroes) {
                if (heroName == hero.name) {
                    function getStatusInfo() {
                        if (hero.alive == true) {
                            return "alive";
                        }
                        else {
                            return "dead";
                        }
                    }
                    function getStudentInfo() {
                        if (hero.hogwartsStudent == true) {
                            return "student";
                        }
                        else if (hero.hogwartsStaff == true) {
                            return "staff";
                        }
                        else return ""
                    }
                    let modal = $modal({
                        content: ` <img src="${hero.image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${hero.name}</span></div><div class="hero__container__container2__div2">Species: <span>${hero.species}</span></div><div class="hero__container__container2__div3">Gender: <span>${hero.gender}</span></div><div class="hero__container__container2__div4">House: <span>${hero.house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${hero.dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${hero.ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${hero.eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${hero.hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${hero.wand.wood}, ${hero.wand.core}, ${hero.wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${hero.patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${hero.actor}</span></div></div>`,
                        footerButtons: [
                            { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                        ]
                    });

                    modal.show();
                    document.getElementById('hero').value = "";

                }
                if (heroName !== hero.name) {
                    document.getElementById('res').textContent =
                        'We could not find anything :( Try again';
                }
            }

        })
        .catch(err => console.log(err));

});
