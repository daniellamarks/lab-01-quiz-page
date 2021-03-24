// import functions and grab DOM elements
import { countsAsYes } from "./utils.js"

const quizButton = document.getElementById("quiz-button");

const results = document.getElementById('results');

quizButton.addEventListener('click', () => {
    const confirmQuiz = confirm(`Do you reaaaaaally want to take the Quiz?`);
    if (confirmQuiz === false) {
        alert(`That's okay! Try another time.`);
        return;
    }

    const name = prompt(`What is your name?`);
    console.log(name);
    
    let score = 0;

    const firstAnswer = prompt('Is the peripheral nervous system one of two parts of the nervous system?')
    const secondAnswer = prompt('')
    const thirdAnswer = prompt('')

})
// set event listeners to update state and DOM