let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/**
 * Generates a random number between 0 and 9 (inclusive).
 * 
 * @returns {number} A random number.
 */
const generateTarget = () => Math.floor(Math.random() * 9 + 1);

//console.log(`The random number is ${generateTarget()}`);

/**
 * Calculates the absolute value of a number just like the Math.abs()
 * 
 * @param {number} val  - The input value
 * @returns {number} The absolute value of the input.
 */
const calculateAbsoluteValue = val => {
    if(val < 0) 
    {
        // If the value is negative, make it positive
        return val * -1; 
    }
    // Return the input value as it is if it's none-negative
    return val;
}

/**
 * Calculates the absolute distance between two numbers.
 * 
 * @param {number} val1 - The first value.
 * @param {number} val2 - The second value.
 * @returns {number} The absolute distance between val1 and val2.
 */
const getAbsoluteDistance = (val1, val2) => calculateAbsoluteValue(val1 - val2);

/**
 *  Compares two guesses (human and computer) to determine the winner based 
 *  on their proximity to the target number.
 * 
 * @param {number} humanGuess - The human guess
 * @param {number} computerGuess - The computer guess
 * @param {number} targetNum - The target number
 * @returns {boolean} True if the human wins, false if the computer wins.
 */
const compareGuesses = (humanGuess, computerGuess, targetNum) => {

    // Check if the humanGuess is out of range (0 to 9)
    if (humanGuess < 0 || humanGuess > 9)
    {
        window.alert('Your number is out of range, pleas choose a number between 0 and 9 (inclusive)');
        return ;
    }
    // Calculate the absolute differences between guesses and target
   //  using the custom absolute value function (calculateAbsoluteValue)
    const humanDifference = getAbsoluteDistance(humanGuess, targetNum);
    const computerDifference = getAbsoluteDistance(computerGuess, targetNum);
    return humanDifference <= computerDifference;
}

//console.log(`Human is the winner: ${compareGuesses(1, 5, 9)}`);

/**
 * Increases the winner's score after each round.
 * 
 * @param {string} winner 
 */
const updateScore = winner => {
    // Check if winner is a string type
    if (typeof winner !== 'string') console.log('winner should be a string');

    // Convert the string to lower case
    winner = winner.toLowerCase();

    // Increase the score by 1 depending on the winner
    switch(winner)
    {
        case 'human':
        humanScore++;
        break;
        case 'computer':
        computerScore += 1;
        break;
    }
}

//updateScore('human')
//console.log(humanScore);

/**
 * Updates the round number each round
 * 
 * @returns {number} The updated current round number.
 */
const advanceRound = () => currentRoundNumber++;
    



