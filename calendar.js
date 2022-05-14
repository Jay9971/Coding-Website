//calendar interactivity

const templateMonths = [
{
    name: 'January',
    days: 31,
},
{
    name: 'Febuary',
    days: 28,
},
{
    name: 'March',
    days: 31,
},
{
    name: 'April',
    days: 30,
},
{
    name: 'May',
    days: 31,
},
{
    name: 'June',
    days: 30,
},
{
    name: 'July',
    days: 31,
},
{
    name: 'August',
    days: 31,
},{
    name: 'September',
    days: 30,
},{
    name: 'October',
    days: 31,
},{
    name: 'November',
    days: 30,
},
{
    name: 'December',
    days: 31,
},
];




function Next() {
    let month = document.getElementById('month');
    for (var i = 0; i < templateMonths.length; i++) {
        if (month.innerText == 'December') {
            var year = document.getElementById('year');
            var num = parseInt(year.innerText);
            year.innerText = String(num + 1);
            month.innerText = templateMonths[0].name;
            break;
        }
        if (templateMonths[i].name == month.innerText) {
            month.innerText = templateMonths[i + 1].name;
            for (var n = 0; n < templateMonths[i].days; n++) {
                var day = document.getElementById('day');
                day.remove();
            }
            for (var n = 0; n < templateMonths[i + 1].days; n++) {
                var day = document.createElement('li');
                dawn = document.getElementById('dawn');
                dawn.appendChild(day);
                day.innerText = String(n + 1);
                day.setAttribute('id', 'day');
            }
            break;
        }
    }
}


function Prev() {
    let month = document.getElementById('month');
    for (var i = 0; i < templateMonths.length; i++) {
        if (month.innerText == 'January') {
            var year = document.getElementById('year');
            var num = parseInt(year.innerText);
            year.innerText = String(num - 1);
            month.innerText = templateMonths[11].name;
            break;
        }
        if (templateMonths[i].name == month.innerText) {
            month.innerText = templateMonths[i - 1].name;
            for (var n = 0; n < templateMonths[i].days; n++) {
                var day = document.getElementById('day');
                day.remove();
            }
            for (var n = 0; n < templateMonths[i - 1].days; n++) {
                var day = document.createElement('li');
                dawn = document.getElementById('dawn');
                dawn.appendChild(day);
                day.innerText = String(n + 1);
                day.setAttribute('id', 'day');
            }
            break;
        }
    }
}