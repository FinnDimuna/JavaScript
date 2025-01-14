let buttons = document.getElementsByClassName("sort");
for (let button of buttons) {
    button.style.fontSize = getComputedStyle(document.querySelector('th')).fontSize;
}

let sorted = 0;

function NameSort() {

    let tableBody = document.querySelector(`#table tbody`);
    console.log(document.querySelectorAll('th').length);


    let rows = tableBody.querySelectorAll(`tr`);
    let arrRows = Array.from(rows);

    if (sorted !== 1) {
        sorted = 1;
        arrRows.sort((a, b) => {
            let aText = a.querySelector('td:nth-of-type(1)').innerText;
            let bText = b.querySelector('td:nth-of-type(2)').innerText;
            return aText.localeCompare(bText);
        });
    } else {
        sorted = 0;
        arrRows.sort((a, b) => {
            let aText = a.querySelector('td:nth-of-type(1)').innerText;
            let bText = b.querySelector('td:nth-of-type(2)').innerText;
            return bText.localeCompare(aText);
        });
    }
    arrRows.forEach(row => tableBody.append(row));
}

document.getElementById('sort').addEventListener('click', NameSort);