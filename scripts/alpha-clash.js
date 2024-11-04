// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')

// }



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}



function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log("your random alphabet is : ",alphabet);

    // set random to screen to show
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackGroundColorById(alphabet);
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log(" presser pressed: ",playerPressed)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed===expectedAlphabet){

        const currentScoreElement= document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // increase +1
        const newScore = currentScore+1;
        currentScoreElement.innerText=newScore;


        RemoveBackGroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLifeElement =document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife-1;
        currentLifeElement.innerText=newLife;
    }

}

document.addEventListener('keyup', handleKeyboardButtonPress)