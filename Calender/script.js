let monthMap = new Map();
monthMap.set(0, 'Январь')
    .set(1, 'Февраль')
    .set(2, 'Март')
    .set(3, 'Апрель')
    .set(4, 'Май')
    .set(5, 'Июнь')
    .set(6, 'Июль')
    .set(7, 'Август')
    .set(8, 'Сентябрь')
    .set(9, 'Октябрь')
    .set(10, 'Ноябрь')
    .set(11, 'Декабрь');

let throttled = 0;
let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth();

let calender = document.createElement('div');
calender.id = 'container';

let mainHeader = document.createElement('div');
mainHeader.id = 'mainH';



let caption = document.createElement('div');
caption.id = 'caption';

let decreaseButton = document.createElement('button');
decreaseButton.id = 'dButton';
decreaseButton.innerText = '←';
decreaseButton.className = 'calenderButton';

let increaseButton = document.createElement('button');
increaseButton.id = 'iButton';
increaseButton.innerText = '→';
increaseButton.className = 'calenderButton';




function createCalender(year, month) {

    let dDate = new Date(year, month);

    let table = '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>';


    function GetDay(date) {
        let day = date.getDay();
        if (day === 0) day = 7;
        return (day - 1);
    }

    for (let i = 0; i < GetDay(dDate); i++) {
        table += '<td></td>';
    }
    let lastDate = new Date(dDate);

    lastDate.setMonth(dDate.getMonth() + 1);
    lastDate.setDate(0);

    for (let i = 1; i <= lastDate.getDate(); i++) {

        table += `<td>${i}</td>`;

        if (GetDay(dDate) % 7 === 6) {
            table += '<tr></tr>';
        }
        dDate.setDate(dDate.getDate()+1);
    }
    dDate.setDate(dDate.getDate()-1);
    if (GetDay(lastDate) % 7 !== 6) {
        for (let i = GetDay(lastDate); i < 6; i++) {
            table += '<td></td>';
        }
    }
    table += '</table>';
    calender.innerHTML = table;
    caption.innerHTML = `${monthMap.get(dDate.getMonth())} ${dDate.getFullYear()}`;
    if (throttled === 0) {
        throttled = 1;
        document.getElementById('calender').append(calender);
        mainHeader.style.width = getComputedStyle(calender).width;
        document.getElementById('calender').prepend(mainHeader);
        document.getElementById('mainH').append(caption);
        document.getElementById('caption').before(decreaseButton);
        document.getElementById('caption').after(increaseButton);



    }

}

function decreaseCalender() {
    if (todayMonth === 0) {
        todayMonth = 11;
        --todayYear;

    } else {
        --todayMonth;
    }
        createCalender(todayYear, todayMonth);
}

function increaseCalender() {
    if (todayMonth === 11) {
        todayMonth = 0;
        ++todayYear;

    } else {
        ++todayMonth;
    }
    createCalender(todayYear, todayMonth);
}

createCalender(todayYear, todayMonth);

document.getElementById('dButton').addEventListener('click', decreaseCalender);
document.getElementById('iButton').addEventListener('click', increaseCalender);