let buttons = document.getElementsByClassName("sort");
for (let button of buttons) {
    button.style.fontSize = getComputedStyle(document.querySelector('th')).fontSize;
}

let sorted = 0;

function tableSort(sortIndex) {

    let tableBody = document.querySelector(`#table tbody`);
    console.log(document.querySelectorAll('th').length);


    let rows = tableBody.querySelectorAll(`tr`);
    let arrRows = Array.from(rows);

    if (sorted !== 1) {
        sorted = 1;
        arrRows.sort((a, b) => {
            let aText = a.querySelector(`td:nth-of-type(${sortIndex})`).innerText;
            let bText = b.querySelector(`td:nth-of-type(${sortIndex})`).innerText;
            return aText.localeCompare(bText);
        });
    } else {
        sorted = 0;
        arrRows.sort((a, b) => {
            let aText = a.querySelector(`td:nth-of-type(${sortIndex})`).innerText;
            let bText = b.querySelector(`td:nth-of-type(${sortIndex})`).innerText;
            return bText.localeCompare(aText);
        });
    }
    arrRows.forEach(row => tableBody.append(row));
}

document.getElementById('sortByName').addEventListener('click', tableSort.bind(null, 1));
document.getElementById('sortBySurname').addEventListener('click', tableSort.bind(null, 2));
document.getElementById('sortByAge').addEventListener('click', tableSort.bind(null, 3));
