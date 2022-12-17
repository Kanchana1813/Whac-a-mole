const squareDivs = document.querySelectorAll('.square');
const startButton = document.querySelector('.start');
const level = document.querySelector('.difficulty');
const decreasingTime = document.querySelector('.decrease');
const score = document.querySelector('.score');
const over = document.querySelector('.over');
const end = document.querySelector('.end');

let gameTime = 10;
let gameScore = 0;
let selectRandomSquareTimer;
let decreaseTimeTimer;

squareDivs.forEach((squareDiv) => {
    squareDiv.onclick = () => {
        if (squareDiv.classList.contains('mole-image') && gameTime > 0) {
            gameScore = gameScore + 1;
            score.innerText = gameScore;
        }
    }
})


const selectRandomSquare = ()=>{
    squareDivs.forEach((squareDiv) => {
        squareDiv.classList.remove('mole-image');
    })
    
    const randomSelectedDiv = squareDivs[Math.floor(Math.random()*9)];
    randomSelectedDiv.classList.add('mole-image');
}


const decreaseTime = () => {
    gameTime = gameTime - 1;
    decreasingTime.innerText = gameTime;
    if (gameTime === 0) {
        clearInterval(selectRandomSquare);
        clearInterval(decreaseTimeTimer);
        over.innerText = 'Game Over!'
        startButton.disabled = false;
    }
}

end.onclick = () => {
    clearInterval(selectRandomSquare);
        clearInterval(decreaseTimeTimer);
        over.innerText = 'Game Over!';
        startButton.disabled = false;
        gameTime = 11;
}

startButton.onclick = ()=>{
    
    let intervalTime;
    
    if (level.value === 'easy') {
        intervalTime = 800;
    } else if (level.value === 'medium') {
        intervalTime = 600;
    } else if (level.value === 'hard') {
        intervalTime = 400;
    } else {
        intervalTime = 800;
    }

    gameTime = 11;
    selectRandomSquareTimer = setInterval(selectRandomSquare, intervalTime);
    decreaseTimeTimer = setInterval(decreaseTime, 1000);
    startButton.disabled = true;
    over.innerText = '';
}