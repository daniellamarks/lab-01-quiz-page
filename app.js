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
    
    let score = 0;

    const firstAnswer = prompt('Is the peripheral nervous system one of two parts of the nervous system?');
    const secondAnswer = prompt('Is the Autonomic Nervous System made of only 2 parts?');
    const thirdAnswer = prompt('Can diseases affect both specific nerves or the system as a whole?');

    if (countsAsYes(firstAnswer) === true) {
        score++;
    }
    console.log(score);

    if (countsAsYes(secondAnswer) === false) {
        score++;
    }
    if (countsAsYes(thirdAnswer) === true) {
        score++;
    }

    alert(`You've finished the quiz! Click okay to see your score.`);

    score = Math.round((score / 3) * 100);

    if (score >= 2) {
        results.classList.add('green');
        const resultsString = `Amazing work ${name}, you got ${score}% correct.`;
        results.textContent = resultsString;
    } else {
        results.classList.add('red');
        const resultsString = `Sorry ${name}, you only got ${score} correct.`;
        results.textContent = resultsString;
    }
    
});
