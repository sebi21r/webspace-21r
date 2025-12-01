
var german = document.getElementsByClassName("german")
var english = document.getElementsByClassName("english")

function toggleLanguage(lang) {

    if(lang == "german") {

        if(german[0].classList.contains("hidden")) {

        forLoop(german)
        forLoop(english)

        }

    } else if(lang == "english") {

        if(english[0].classList.contains("hidden")) {

        forLoop(german)
        forLoop(english)

        }

    } else {
        console.error("There was an Error changing the Page language: " + lang)
    }

}

function forLoop(value) {
    for (let i = 0; i < value.length; i++) {
        value[i].classList.toggle("hidden");
    }
}