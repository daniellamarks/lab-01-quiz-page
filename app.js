// import functions and grab DOM elements
import { countsAsYes } from './utils.js';

const quizButton = document.getElementById('quiz-button');

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

    const firstAnswer = prompt('Is the peripheral nervous system one of two parts of the nervous system?');
    const secondAnswer = prompt('Is the Autonomic Nervous System made of only 2 parts?');
    const thirdAnswer = prompt('Can diseases affect both specific nerves or the system as a whole?');

    if (countsAsYes(firstAnswer) === true) {
        score++;
    }
    
    if (countsAsYes(secondAnswer) === false) {
        score++;
    }
    if (countsAsYes(thirdAnswer) === true) {
        score++;
    }
    // eslint-disable-next-line indent
    const resultsString = `Good work ${name}, you got ${score} correct.`;
    results.textContent = resultsString;
    
});
// set event listeners to update state and DOM