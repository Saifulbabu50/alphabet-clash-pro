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

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you win');
        // update score:
        // 1.get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseFloat(currentScoreText);
        console.log('the score', currentScore)

        // 2.increase the score by1
        const newScore = currentScore + 1;

        // 3.show the updated score
        currentScoreElement.innerText = newScore;

        // pressed oto color remove
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        // oto play
        continueGame()
    }
    else {
        console.log('you lost');
        // step-1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseFloat(currentLifeText)
        // step-2:reduce the life count
        const newLife = currentLife - 1;
        // step-3: display the updated life count
        currentLifeElement.innerText = newLife;
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

    setBackgroundColorById(alphabet);
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}