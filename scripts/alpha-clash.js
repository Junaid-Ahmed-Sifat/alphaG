// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')

// }






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

    if (playerPressed=="Escape"){
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed===expectedAlphabet){

        // const currentScoreElement= document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        const currentScore = getTextElementValueById('current-score');
        const UpdatedScore =currentScore+1;
        setTextElementValueById('current-score',UpdatedScore);
        // // increase +1
        // newScore = currentScore+1;
        // currentScoreElement.innerText=newScore;
        

        RemoveBackGroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // const currentLifeElement =document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife-1;
        // currentLifeElement.innerText=newLife;
        const currentLife=getTextElementValueById('current-life');
        const UpdatedLife =currentLife-1;
        setTextElementValueById('current-life',UpdatedLife);

        if (UpdatedLife===0){
            gameOver()
        }



    }

}

document.addEventListener('keyup', handleKeyboardButtonPress)



function play(){
    // hide everything show only playGround
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');



    // reset score 
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame();

    
}



function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById("last-score",lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    RemoveBackGroundColorById(currentAlphabet)
    
}