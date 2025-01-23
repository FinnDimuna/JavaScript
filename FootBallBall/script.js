function moveBall(event) {
    let ball = document.querySelector('#ball');
    let cords = {
        x: event.clientX - field.offsetLeft - ball.clientWidth / 2 + scrollX,
        y: event.clientY - field.offsetTop - ball.clientHeight / 2 + scrollY
    };

    if (cords.x < 0) cords.x = 0;
    if (cords.y < 0) cords.y = 0;
    if (cords.x > (field.clientWidth - ball.clientWidth)) cords.x = (field.clientWidth - ball.clientWidth);
    if (cords.y > (field.clientHeight - ball.clientHeight)) cords.y = (field.clientHeight - ball.clientHeight);
    ball.style.left = `${cords.x}px`;
    ball.style.top = `${cords.y}px`;
}


field.addEventListener('click', (event) => { moveBall(event)});
