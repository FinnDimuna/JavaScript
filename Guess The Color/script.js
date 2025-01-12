let buttonIndex = 0, isStarted = 0, trueAnswer, playButtons, points = 0, pointsDiv;

function getRandomColor() {
    constMaxInt = 255;
    let colorCodes = []
    for (let i = 0; i < 3; i++) {
        colorCodes.push((Math.round(Math.random() * constMaxInt).toString(16)));
    }
    let colorCode = colorCodes.join("");
    console.log(colorCode);
    return `#${colorCode}`;
};

function appendColor() {
    if (buttonIndex >= 6) return;
    buttonIndex++;
    let colorButton = document.createElement('button');
    colorButton.style.cursor = 'pointer';
    colorButton.style.backgroundColor = getRandomColor();
    colorButton.style.width = '100px';
    colorButton.style.height = '100px';
    colorButton.style.borderRadius = '3px';
    colorButton.style.margin = '20px';
    colorButton.setAttribute('class', 'playButton');
    colorButton.setAttribute('id', `colorButton${buttonIndex}`);
    document.getElementById('mainDiv').appendChild(colorButton);
    return;
};

async function showColors() {
    if (isStarted === 1) return;
    isStarted = 1;
    mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    document.body.append(mainDiv);
    for (let i = 0; i < 6; i++) {
        await new Promise((resolve, reject) => {
        setTimeout(() => {
            appendColor();
            resolve();
        }, 150);
    });
    };
    guessColor();
    pointsDiv = document.createElement('div');
    pointsDiv.setAttribute('id', 'points');
    pointsDiv.innerHTML = `Очков: ${points}`;
    document.body.append(pointsDiv);
    playButtons = document.getElementsByClassName('playButton');
    playButtons = [...playButtons];
    
    playButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log(index+1);
            answerChecker(index+1);
        })
    });
};

function guessColor() {
    let colorNum = Math.round(Math.random() * 6);
    let button = document.getElementById(`colorButton${colorNum}`);
    trueAnswer = getComputedStyle(button).backgroundColor;
    let trueBtn = document.createElement('div');
    trueBtn.setAttribute('id', 'question');
    trueBtn.innerHTML = `Угадай, какой из цветов соответствует ${trueAnswer}`;
    document.body.append(trueBtn);
    return;
};

function answerChecker(index) {
    if (getComputedStyle(document.getElementById(`colorButton${index}`)).backgroundColor === trueAnswer) {
        alert('Победа!');
        points++;
        pointsDiv.innerHTML = `Очков: ${points}`;
        
        setTimeout(() => {
            confirm("Новая игра?") ? newGame() : `lol`;
        }, 200);
    } else {
        alert('Не угадал');
    }
};

function newGame() {
    playButtons.forEach(button => button.remove());
    document.getElementById('question').remove();
    document.getElementById('points').remove();
    isStarted = 0;
    buttonIndex = 0;
    setTimeout(() => {showColors()}, 300);
}


document.getElementById('startGame').addEventListener('click', showColors);
