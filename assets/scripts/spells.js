document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://hp-api.onrender.com/api/spells")
        .then(response => response.json())
        .then(spells => {
            let spellsCards = document.querySelectorAll('.apiSpells');
            spellsCards[0].addEventListener('click', function () {
                let modalSpells = $modal2({
                    content: `<p class="spell-card__container__text1">${spells[61].name}</p><p class="spell-card__container__text2">${spells[61].description}</p>`,
                    footerButtons: [
                        { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                    ]
                })
                modalSpells.show();
                document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide())
            })
            spellsCards[1].addEventListener('click', function () {
                let modalSpells = $modal2({
                    content: `<p class="spell-card__container__text1">${spells[1].name}</p><p class="spell-card__container__text2">${spells[1].description}</p>`,
                    footerButtons: [
                        { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                    ]
                })
                modalSpells.show();
                document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide())
            })
            spellsCards[2].addEventListener('click', function () {
                let modalSpells = $modal2({
                    content: `<p class="spell-card__container__text1">${spells[17].name}</p><p class="spell-card__container__text2">${spells[17].description}</p>`,
                    footerButtons: [
                        { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                    ]
                })
                modalSpells.show();
                document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide())
            })


            spellsCards[3].addEventListener('click', function () {
                let modalSpells = $modal2({
                    content: `<p class="spell-card__container__text1">${spells[59].name}</p><p class="spell-card__container__text2">${spells[59].description}</p>`,
                    footerButtons: [
                        { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                    ]
                })
                modalSpells.show();
                document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide())
            })
            spellsCards[4].addEventListener('click', function () {
                let modalSpells = $modal2({
                    content: `<p class="spell-card__container__text1">${spells[23].name}</p><p class="spell-card__container__text2">${spells[23].description}</p>`,
                    footerButtons: [
                        { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                    ]
                })
                modalSpells.show();
                document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide())
            })
            spellsCards[5].addEventListener('click', function () {
                let modalSpells = $modal2({
                    content: `<p class="spell-card__container__text1">${spells[11].name}</p><p class="spell-card__container__text2">${spells[11].description}</p>`,
                    footerButtons: [
                        { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                    ]
                })
                modalSpells.show();
                document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide())
            })


            spellsCards[6].addEventListener('click', function () {
                let modalSpells = $modal2({
                    content: `<p class="spell-card__container__text1">${spells[8].name}</p><p class="spell-card__container__text2">${spells[8].description}</p>`,
                    footerButtons: [
                        { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                    ]
                })
                modalSpells.show();
                document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide())
            })
            spellsCards[7].addEventListener('click', function () {
                let modalSpells = $modal2({
                    content: `<p class="spell-card__container__text1">${spells[39].name}</p><p class="spell-card__container__text2">${spells[39].description}</p>`,
                    footerButtons: [
                        { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                    ]
                })
                modalSpells.show();
                document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide())
            })
            spellsCards[8].addEventListener('click', function () {
                let modalSpells = $modal2({
                    content: `<p class="spell-card__container__text1">${spells[14].name}</p><p class="spell-card__container__text2">${spells[14].description}</p>`,
                    footerButtons: [
                        { class: 'btn btn__cancel button__shine', text: 'Close', handler: 'modalHandlerCancel' }
                    ]
                })
                modalSpells.show();
                document.querySelector('.btn__cancel').addEventListener("click", () => modalSpells.hide())
            })
        })
        .catch(err => console.log(err));
})


