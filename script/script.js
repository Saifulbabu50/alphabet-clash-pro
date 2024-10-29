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


function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your randon alphabet', alphabet);

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