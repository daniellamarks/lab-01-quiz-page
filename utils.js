export function countsAsYes(userInput) { 
    const firstLetter = userInput[0];
    if (firstLetter.toLowerCase() === 'y') return true;
    return false;
}

// return userInput[0].toLowerCase() === 'y';