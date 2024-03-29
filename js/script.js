import data from '../json/noun.json' assert { type: 'json' };

const nouns = data.nouns;
const answerButtons = document.querySelectorAll('.btn-answer');
const nextButton = document.querySelectorAll('#next');
let currentNoun;

function init() {
    currentNoun = nouns[Math.floor(Math.random()*nouns.length)];
    document.getElementById("title-noun").innerHTML = currentNoun.singular.noun;
    document.getElementById("translation-noun").innerHTML = "(" + currentNoun.english + ")";
    attachEventListeners();
}

function attachEventListeners() {
    answerButtons.forEach(button => {
        button.addEventListener('click', function handleClick(event) {
            var answer = this.id;
            var correct = currentNoun.singular.article;
            if (answer == correct) {
                this.classList.add("btn-success");
                document.getElementById("translation-noun").style.display = 'block';
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

