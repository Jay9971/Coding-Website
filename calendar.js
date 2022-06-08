//calendar interactivity

let templateMonths = [
{
    name: 'January',
    days: 31,
    starts: 7,
},
{
    name: 'Febuary',
    days: 28,
    starts: 3,
},
{
    name: 'March',
    days: 31,
    starts: 3,
},
{
    name: 'April',
    days: 30,
    starts: 6,
},
{
    name: 'May',
    days: 31,
    starts: 1,
},
{
    name: 'June',
    days: 30,
    starts: 4,
},
{
    name: 'July',
    days: 31,
    starts: 6,
},
{
    name: 'August',
    days: 31,
    starts: 2,
},{
    name: 'September',
    days: 30,
    starts: 5,
},{
    name: 'October',
    days: 31,
    starts: 7,
},{
    name: 'November',
    days: 30,
    starts: 3,
},
{
    name: 'December',
    days: 31,
    starts: 5,
},
];




function Next() {
    let month = document.getElementById('month');
    var pp = false;
    for (var i = 0; i < templateMonths.length; i++) {
        if (month.innerText == 'December' && pp == false) {
            var year = document.getElementById('year');
            var num = parseInt(year.innerText);
            year.innerText = String(num + 1);
            for (var u = 0; u < (templateMonths.length - 1); u++) {
                templateMonths[u].starts++;
                if (templateMonths[u].starts == 8) {
                    templateMonths[u].starts = 1;
                }
            }
            pp = true;
        }
        if (i == 11) {
            var z = 0;
        } else {
            var z = i + 1;
        }
        if (templateMonths[i].name == month.innerText) {
            month.innerText = templateMonths[z].name;
            for (var n = 0; n < (templateMonths[i].days + (templateMonths[i].starts - 1)); n++) {
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
            //adds start day offset
            var o = (templateMonths[i].days + 1) - (templateMonths[z].starts - 1);
            for (var l = 0; l < (templateMonths[z].starts - 1); l++) {
                var day = document.createElement('li');
                dawn = document.getElementById('dawn');
                dawn.appendChild(day);
                //day.innerText = String(o);  -- this thing will make it so previous month days pop up in blanks so.. use at ur own risk
                day.setAttribute('id', 'day');
                o++;
            }
            for (var n = 0; n < templateMonths[z].days; n++) {
                var year = document.getElementById('year');
                var day = document.createElement('li');
                dawn = document.getElementById('dawn');
                dawn.appendChild(day);
                day.innerText = String(n + 1);
                day.setAttribute('id', 'day');
                //reinburse mod data
                if (templateMonths[z].hasOwnProperty('mods')) {
                    for (let t=0; t < templateMonths[z].mods.length; t++) {
                        if (t < 10) {
                            var theval = templateMonths[z].mods[t][0][0];
                        } else {
                            var theval = templateMonths[z].mods[t][0][0];
                            theval = theval + templateMonths[z].mods[t][0][1];
                        }
                        if (day.innerText == theval && year.innerText == templateMonths[z].mods[t][1]) {
                            day.innerText = templateMonths[z].mods[t][0];
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
    var pp = false;
    for (var i = 0; i < templateMonths.length; i++) {
        if (month.innerText == 'January' && pp == false) {
            var year = document.getElementById('year');
            var num = parseInt(year.innerText);
            year.innerText = String(num - 1);
            for (var u = 1; u < (templateMonths.length); u++) {
                templateMonths[u].starts--;
                if (templateMonths[u].starts == 0) {
                    templateMonths[u].starts = 7;
                }
            }
            pp = true;
        }
        if (i == 0) {
            var z = 11;
        } else {
            var z = i - 1;
        }
        if (templateMonths[i].name == month.innerText) {
            month.innerText = templateMonths[z].name;
            for (var n = 0; n < (templateMonths[i].days + (templateMonths[i].starts - 1)); n++) {
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
            //adds start day offset
            var o = (templateMonths[i].days + 1) - (templateMonths[z].starts - 1);
            for (var l = 0; l < (templateMonths[z].starts - 1); l++) {
                var day = document.createElement('li');
                dawn = document.getElementById('dawn');
                dawn.appendChild(day);
                //day.innerText = String(o);  -- this thing will make it so previous month days pop up in blanks so.. use at ur own risk
                day.setAttribute('id', 'day');
                o++;
            }
            for (var n = 0; n < templateMonths[z].days; n++) {
                var year = document.getElementById('year');
                var day = document.createElement('li');
                dawn = document.getElementById('dawn');
                dawn.appendChild(day);
                day.innerText = String(n + 1);
                day.setAttribute('id', 'day');
                //reinburse mod data
                if (templateMonths[z].hasOwnProperty('mods')) {
                    for (let t=0; t < templateMonths[z].mods.length; t++) {
                        if (t < 10) {
                            var theval = templateMonths[z].mods[t][0][0];
                        } else {
                            var theval = templateMonths[z].mods[t][0][0];
                            theval = theval + templateMonths[z].mods[t][0][1];
                        }
                        if (day.innerText == theval && year.innerText == templateMonths[z].mods[t][1]) {
                            day.innerText = templateMonths[z].mods[t][0];
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
