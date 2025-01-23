function addExitButton (elemClass) {
    let elems = document.querySelectorAll(`.${elemClass}`);
    for (let elem of elems) {
        let exitButton = document.createElement('button');
        exitButton.className = 'remove-button';
        exitButton.innerText = '[x]';
        exitButton.style.top = `0px`;
        elem.append(exitButton);
        exitButton.style.left = `${exitButton.parentElement.clientWidth - exitButton.clientWidth}px`;
    }
}

addExitButton('pane');

function removeElement (event) {
    event.currentTarget.parentElement.remove();
}

let removeButtons = document.querySelectorAll(`.remove-button`);
for (let button of removeButtons) {

    button.onclick = (event) => {removeElement(event)};
}