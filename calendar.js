//calendar interactivity

let templateMonths = [
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
                var year = document.getElementById('year');
                //archive mod data
                if (templateMonths[i].hasOwnProperty('mods') && day.innerText.length > 2) {
                    let pack = [day.innerText, year.innerText];
                    templateMonths[i].mods.push(pack);
                } else if (day.innerText.length > 2) {
                    templateMonths[i].mods = [];
                    let pack = [day.innerText, year.innerText];
                    templateMonths[i].mods.push(pack);
                }
                day.remove();
            }
            for (var n = 0; n < templateMonths[i + 1].days; n++) {
                var year = document.getElementById('year');
                var day = document.createElement('li');
                dawn = document.getElementById('dawn');
                dawn.appendChild(day);
                day.innerText = String(n + 1);
                day.setAttribute('id', 'day');
                //reinburse mod data
                if (templateMonths[i + 1].hasOwnProperty('mods')) {
                    for (let t=0; t < templateMonths[i + 1].mods.length; t++) {
                        if (t < 10) {
                            var theval = templateMonths[i + 1].mods[t][0][0];
                        } else {
                            var theval = templateMonths[i + 1].mods[t][0][0];
                            theval = theval + templateMonths[i + 1].mods[t][0][1];
                        }
                        if (day.innerText == theval && year.innerText == templateMonths[i + 1].mods[t][1]) {
                            day.innerText = templateMonths[i + 1].mods[t][0];
                        }
                    }
                }
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
                var year = document.getElementById('year');
                //archive mod data
                if (templateMonths[i].hasOwnProperty('mods') && day.innerText.length > 2) {
                    let pack = [day.innerText, year.innerText];
                    templateMonths[i].mods.push(pack);
                } else if (day.innerText.length > 2) {
                    templateMonths[i].mods = [];
                    let pack = [day.innerText, year.innerText];
                    templateMonths[i].mods.push(pack);
                }
                day.remove();
            }
            for (var n = 0; n < templateMonths[i - 1].days; n++) {
                var year = document.getElementById('year');
                var day = document.createElement('li');
                dawn = document.getElementById('dawn');
                dawn.appendChild(day);
                day.innerText = String(n + 1);
                day.setAttribute('id', 'day');
                //reinburse mod data
                if (templateMonths[i - 1].hasOwnProperty('mods')) {
                    for (let t=0; t < templateMonths[i - 1].mods.length; t++) {
                        if (t < 10) {
                            var theval = templateMonths[i - 1].mods[t][0][0];
                        } else {
                            var theval = templateMonths[i - 1].mods[t][0][0];
                            theval = theval + templateMonths[i - 1].mods[t][0][1];
                        }
                        if (day.innerText == theval && year.innerText == templateMonths[i - 1].mods[t][1]) {
                            day.innerText = templateMonths[i - 1].mods[t][0];
                        }
                    }
                }
            }
            break;
        }
    }
}

function Pop(id) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
}
