
$(document).ready(function () {
    $('.slider').slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});

$(function () {
    $("[data-tooltip]").mousemove(function (eventObject) {
        $data_tooltip = $(this).attr("data-tooltip");
        $("#tooltip").html($data_tooltip)
            .css({
                "top": eventObject.pageY + 5,
                "left": eventObject.pageX + 5
            })
            .show();
    }).mouseout(function () {
        $("#tooltip").hide()
            .html("")
            .css({
                "top": 0,
                "left": 0
            });
    });
});


fetch("https://hp-api.onrender.com/api/characters")
    .then(response => response.json())
    .then(heroes => {
        for (let hero of heroes) {
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
        }
        document.querySelector('.lord').addEventListener('click', function (e) {
            let modal = $modal({
                content: ` <img src="${heroes[16].image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${heroes[16].name}</span></div><div class="hero__container__container2__div2">Species: <span>${heroes[16].species}</span></div><div class="hero__container__container2__div3">Gender: <span>${heroes[16].gender}</span></div><div class="hero__container__container2__div4">House: <span>${heroes[16].house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${heroes[16].dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${heroes[16].ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${heroes[16].eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${heroes[16].hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${heroes[16].wand.wood}, ${heroes[16].wand.core}, ${heroes[16].wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${heroes[0].patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${heroes[16].actor}</span></div></div>`,
                footerButtons: [
                    { class: 'btn btn__cancel button__shine ', text: 'Close', handler: 'modalHandlerCancel' }

                ]
            })
            modal.show();
            document.querySelector('.btn__cancel').addEventListener("click", () => modal.hide());


        })
        document.querySelector('.harry').addEventListener('click', function () {
            let modal = $modal({
                content: ` <img src="${heroes[0].image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${heroes[0].name}</span></div><div class="hero__container__container2__div2">Species: <span>${heroes[0].species}</span></div><div class="hero__container__container2__div3">Gender: <span>${heroes[0].gender}</span></div><div class="hero__container__container2__div4">House: <span>${heroes[0].house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${heroes[0].dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${heroes[0].ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${heroes[0].eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${heroes[0].hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${heroes[0].wand.wood}, ${heroes[0].wand.core}, ${heroes[0].wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${heroes[0].patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${heroes[0].actor}</span></div></div>`,
                footerButtons: [
                    { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                ]

            })
            modal.show();
            document.querySelector('.btn__cancel').addEventListener("click", () => modal.hide());
        })
        document.querySelector('.ron').addEventListener('click', function () {
            let modal = $modal({
                content: ` <img src="${heroes[2].image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${heroes[2].name}</span></div><div class="hero__container__container2__div2">Species: <span>${heroes[2].species}</span></div><div class="hero__container__container2__div3">Gender: <span>${heroes[2].gender}</span></div><div class="hero__container__container2__div4">House: <span>${heroes[2].house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${heroes[2].dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${heroes[2].ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${heroes[2].eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${heroes[2].hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${heroes[2].wand.wood}, ${heroes[2].wand.core}, ${heroes[2].wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${heroes[2].patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${heroes[2].actor}</span></div></div>`,
                footerButtons: [
                    { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                ]

            })
            modal.show();
            document.querySelector('.btn__cancel').addEventListener("click", () => modal.hide());
        })
        document.querySelector('.snape').addEventListener('click', function () {
            let modal = $modal({
                content: ` <img src="${heroes[7].image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${heroes[7].name}</span></div><div class="hero__container__container2__div2">Species: <span>${heroes[7].species}</span></div><div class="hero__container__container2__div3">Gender: <span>${heroes[7].gender}</span></div><div class="hero__container__container2__div4">House: <span>${heroes[7].house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${heroes[7].dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${heroes[7].ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${heroes[7].eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${heroes[7].hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${heroes[7].wand.wood}, ${heroes[7].wand.core}, ${heroes[7].wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${heroes[7].patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${heroes[7].actor}</span></div></div>`,
                footerButtons: [
                    { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                ]

            })
            modal.show();
            document.querySelector('.btn__cancel').addEventListener("click", () => modal.hide());
        })
        document.querySelector('.hermione').addEventListener('click', function () {
            let modal = $modal({
                content: ` <img src="${heroes[1].image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${heroes[1].name}</span></div><div class="hero__container__container2__div2">Species: <span>${heroes[1].species}</span></div><div class="hero__container__container2__div3">Gender: <span>${heroes[1].gender}</span></div><div class="hero__container__container2__div4">House: <span>${heroes[1].house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${heroes[1].dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${heroes[1].ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${heroes[1].eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${heroes[1].hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${heroes[1].wand.wood}, ${heroes[1].wand.core}, ${heroes[1].wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${heroes[1].patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${heroes[1].actor}</span></div></div>`,
                footerButtons: [
                    { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                ]
            })
            modal.show();
            document.querySelector('.btn__cancel').addEventListener("click", () => modal.hide());
        })
        document.querySelector('.albus').addEventListener('click', function () {
            let modal = $modal({
                content: ` <img src="${heroes[30].image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${heroes[30].name}</span></div><div class="hero__container__container2__div2">Species: <span>${heroes[30].species}</span></div><div class="hero__container__container2__div3">Gender: <span>${heroes[30].gender}</span></div><div class="hero__container__container2__div4">House: <span>${heroes[30].house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${heroes[30].dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${heroes[30].ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${heroes[30].eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${heroes[30].hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${heroes[30].wand.wood}, ${heroes[30].wand.core}, ${heroes[30].wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${heroes[30].patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${heroes[0].actor}</span></div></div>`,
                footerButtons: [
                    { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                ]

            })
            modal.show();
            document.querySelector('.btn__cancel').addEventListener("click", () => modal.hide());
        })
        document.querySelector('.rubeus').addEventListener('click', function () {
            let modal = $modal({
                content: ` <img src="${heroes[8].image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${heroes[8].name}</span></div><div class="hero__container__container2__div2">Species: <span>${heroes[8].species}</span></div><div class="hero__container__container2__div3">Gender: <span>${heroes[8].gender}</span></div><div class="hero__container__container2__div4">House: <span>${heroes[8].house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${heroes[8].dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${heroes[8].ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${heroes[8].eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${heroes[8].hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${heroes[8].wand.wood}, ${heroes[8].wand.core}, ${heroes[8].wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${heroes[8].patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${heroes[8].actor}</span></div></div>`,
                footerButtons: [
                    { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                ]

            })
            modal.show();
            document.querySelector('.btn__cancel').addEventListener("click", () => modal.hide());
        })
        document.querySelector('.snape').addEventListener('click', function () {
            let modal = $modal({
                content: ` <img src="${heroes[7].image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${heroes[7].name}</span></div><div class="hero__container__container2__div2">Species: <span>${heroes[7].species}</span></div><div class="hero__container__container2__div3">Gender: <span>${heroes[7].gender}</span></div><div class="hero__container__container2__div4">House: <span>${heroes[7].house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${heroes[7].dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${heroes[7].ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${heroes[7].eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${heroes[7].hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${heroes[7].wand.wood}, ${heroes[7].wand.core}, ${heroes[7].wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${heroes[7].patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${heroes[7].actor}</span></div></div>`,
                footerButtons: [
                    { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                ]

            })
            modal.show();
            document.querySelector('.btn__cancel').add
        })
        document.querySelector('.draco').addEventListener('click', function () {
            let modal = $modal({
                content: ` <img src="${heroes[3].image}" alt="image of hero" class="hero__container__img"><div class="hero__container__container2"><div class="hero__container__container2__div1">Name: <span>${heroes[3].name}</span></div><div class="hero__container__container2__div2">Species: <span>${heroes[3].species}</span></div><div class="hero__container__container2__div3">Gender: <span>${heroes[3].gender}</span></div><div class="hero__container__container2__div4">House: <span>${heroes[3].house}</span></div><div class="hero__container__container2__div5">Date of birth: <span>${heroes[3].dateOfBirth}</span></div><div class="hero__container__container2__div6">Ancestry: <span>${heroes[3].ancestry}</span></div><div class="hero__container__container2__div7">Eye colour: <span>${heroes[3].eyeColour}</span></div><div class="hero__container__container__div8">Hair colour: <span>${heroes[3].hairColour}</span></div><div class="hero__container__container2__div9">Wand: <span>${heroes[3].wand.wood}, ${heroes[3].wand.core}, ${heroes[3].wand.length}</span></div><div class="hero__container__container2__div10">Patronus: <span>${heroes[3].patronus}</span></div><div class="hero__container__container2__div11">Status: <span>${getStudentInfo()},${getStatusInfo()}</span></div><div class="hero__container__container2__div12">Actor: <span>${heroes[3].actor}</span></div></div>`,
                footerButtons: [
                    { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                ]
            })
            modal.show();
            document.querySelector('.btn__cancel').addEventListener("click", () => modal.hide());
        })
    })
    .catch(err => console.log(err));

$(".mainpage").fadeIn(1300);


let instaFooter = document.getElementById('insta');
let whatsFooter = document.getElementById('whats');
instaFooter.addEventListener('mouseover', e => instaFooter.src = "./assets/images/footer/insta.svg");
instaFooter.addEventListener('mouseout', e => instaFooter.src = "./assets/images/footer/image_41.png");
whatsFooter.addEventListener('mouseover', e => whatsFooter.src = "./assets/images/footer/whats.svg");
whatsFooter.addEventListener('mouseout', e => whatsFooter.src = "./assets/images/footer/image_40.png");




