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

function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
}