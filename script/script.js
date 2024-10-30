// function play() {
//     // step-1: hide the home screen.to hied the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // console.log(playGround.classList)
// }

function handleKeyboardUpEvent(event) {
    const playerPressed = event.key;
    console.log('button pressd', playerPressed);

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escaped') {
        gameOver()
    }

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you win');

        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore)



        // ---------------------
        // update score:
        // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseFloat(currentScoreText);
        // console.log('the score', currentScore)

        // // 2.increase the score by1
        const newScore = currentScore + 1;

        // // 3.show the updated score
        // currentScoreElement.innerText = newScore;

        // // pressed oto color remove
        // // start a new round
        removeBackgroundColorById(expectedAlphabet);
        // oto play
        continueGame();
    }
    else {
        console.log('you lost');

        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);
        if (updateLife === 0) {
            gameOver();
        }



        // ----------------------
        // // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseFloat(currentLifeText)
        // // step-2:reduce the life count
        // const newLife = currentLife - 1;
        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardUpEvent);

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your randon alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set buton bg color
    setBackgroundColorById(alphabet);


}


function play() {
    // hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // step-1: get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}