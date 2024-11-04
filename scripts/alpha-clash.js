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