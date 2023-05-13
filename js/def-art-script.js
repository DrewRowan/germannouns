import definitiveArticles from '../json/definitive-articles.json' assert { type: 'json' };

const nextButton = document.querySelectorAll('#next');
let answerButtons;
let currentArticle;
let currentGender;

function init() {
    currentGender = getRandomElement(definitiveArticles);
    currentArticle = getRandomElement(definitiveArticles[currentGender]);
    addButtons(definitiveArticles[currentGender]);

    document.getElementById("title-case").innerHTML = currentGender + ": " +currentArticle;
    // document.getElementById("translation-noun").innerHTML = "(" + currentNoun.english + ")";
    answerButtons = document.querySelectorAll('.btn-answer');
    attachEventListeners();
}

function getRandomElement(object) {
    var length = Object.keys(object).length;
    var random = Math.floor(Math.random()*length);
    return Object.keys(object)[random];
}

function addButtons(object) {
    let random;

    let array = arrayise(object);
    while(0 < array.length) {
        random = Math.floor(Math.random()*array.length);
        let randomValue = Object.values(array)[random];
        appendButton('definitive_articles_buttons', Object.keys(randomValue)[0], Object.values(randomValue)[0]);
        array.splice(random, 1);
    }
}

function arrayise(object) {
    return Object.keys(object).map(function (key) {
        return { [key]: object[key] };
      });
}

function appendButton(attachToElementId, buttonId, buttonText){
	var buttonEl = document.createElement("button");
	buttonEl.id = buttonId;
	buttonEl.className = "btn btn-answer";
    buttonEl.innerHTML = buttonText;
	document.getElementById(attachToElementId).appendChild(buttonEl);
}

function attachEventListeners() {
    answerButtons.forEach(button => {
        button.addEventListener('click', function handleClick(event) {
            var answer = this.id;
            if (answer == currentArticle) {
                this.classList.add("btn-success");
                setTimeout(() => {
                    window.location.reload();
                  }, "1000");
            } else {
                this.classList.add("btn-danger");
            }
        });
    });
}

init();

