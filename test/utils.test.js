// IMPORT MODULES under test here:
import { countsAsYes } from '../utils.js';

const test = QUnit.test;

test('a function that returns true if the first letter of user input is y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'yes is true');
    expect.equal(countsAsYes('YEAH'), true, 'yes is true');
    expect.equal(countsAsYes('naaah'), false, 'naah is true');
});
