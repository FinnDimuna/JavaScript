let buttons = document.getElementsByClassName("sort");
for (let button of buttons) {
    button.style.fontSize = getComputedStyle(document.querySelector('th')).fontSize;
}


function NameSort() {

    let tableBody = document.querySelector(`#table tbody`);
    console.log(document.querySelectorAll('th').length);


    let rows = tableBody.querySelectorAll(`tr`);
    let arrRows = Array.from(rows);
    arrRows.sort((a, b) => {
        let aText = a.querySelector('td:nth-of-type(1)').innerText;
        let bText = b.querySelector('td:nth-of-type(2)').innerText;
        return aText.localeCompare(bText);
    });

    arrRows.forEach(row => tableBody.append(row));
}


document.getElementById('sort').addEventListener('click', NameSort);








