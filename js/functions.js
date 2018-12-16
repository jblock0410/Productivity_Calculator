
/*
function addItemButton1() {
    let li = document.createElement('li');
    li.setAttribute('class', 'timeEntry' );
    let input = document.querySelector('strategicInput');
    let ul = document.getElementById('strategicUl');
    li.textContent = parseFloat(input.value);
    if (isNaN(parseFloat(input.value)) == true) {
        input.value = '';
    } else {   
        ul.appendChild(li);
        input.value = '';
        strategicInput = input.value;
        strategicArray.push(strategicInput);
    }
    let p = document.createElement('p');
    let section = document.getElementById('strategicSection');
}
*/

/*
function addItemButton1() {
    let li = document.createElement('li');
    let input = document.querySelector('.strategicInput');
    let ul = document.getElementById('strategicUl');
    let strategicArray = [];
    li.textContent = parseFloat(input.value);
    if (isNaN(parseFloat(input.value)) == true) {
        input.value = '';
    } else {   
        ul.appendChild(li);
        input.value = '';
        strategicArray.push(input.value);
    }
}
*/


var input = document.querySelector('.strategicInput');
var strategicArray = [];

function addItemButton1() {
    let li = document.createElement('li');
    let ul = document.getElementById('strategicUl');
    input = document.querySelector('.strategicInput');
    li.textContent = parseFloat(input.value);
    if (isNaN(parseFloat(input.value)) == true) { 
        input.value = '';
    } else {
        ul.appendChild(li);
        input.value = ''; 
    }
}
function addToArray1() {
    let li = document.getElementById('strategicUl').textContent;
    strategicArray.push(li);
    return strategicArray;
}


       /* for (let i = 0; i < ul.length; i++) {
            strategicArray.push(input[i].value); 
        }
    }
}*/





function addItemButton2() {
    let li = document.createElement('li');
    let input = document.querySelector('.teamInput');
    let ul = document.getElementById('teamUl');
    li.textContent = parseFloat(input.value);
    if (isNaN(parseFloat(input.value)) == true) {
        input.value = '';
    } else {   
        ul.appendChild(li);
        input.value = '';
    }
}

function addItemButton3() {
    let li = document.createElement('li');
    let input = document.querySelector('.leaderMeetingsInput');
    let ul = document.getElementById('leaderMeetingsUl');
    li.textContent = parseFloat(input.value);
    if (isNaN(parseFloat(input.value)) == true) {
        input.value = '';
    } else {   
        ul.appendChild(li);
        input.value = '';
    }
}

function addItemButton4() {
    let li = document.createElement('li');
    let input = document.querySelector('.staffMeetingsInput');
    let ul = document.getElementById('staffMeetingsUl');
    li.textContent = parseFloat(input.value);
    if (isNaN(parseFloat(input.value)) == true) {
        input.value = '';
    } else {   
        ul.appendChild(li);
        input.value = '';
    }
}

function addItemButton5() {
    let li = document.createElement('li');
    let input = document.querySelector('.tasksInput');
    let ul = document.getElementById('tasksUl');
    li.textContent = parseFloat(input.value);
    if (isNaN(parseFloat(input.value)) == true) {
        input.value = '';
    } else {   
        ul.appendChild(li);
        input.value = '';
    }
}

function addItemButton6() {
    let li = document.createElement('li');
    let input = document.querySelector('.vacationInput');
    let ul = document.getElementById('vacationUl');
    li.textContent = parseFloat(input.value);
    if (isNaN(parseFloat(input.value)) == true) {
        input.value = '';
    } else {   
        ul.appendChild(li);
        input.value = '';
    }
}

function addItemButton7() {
    let li = document.createElement('li');
    let input = document.querySelector('.sickLeaveInput');
    let ul = document.getElementById('sickLeaveUl');
    li.textContent = parseFloat(input.value);
    if (isNaN(parseFloat(input.value)) == true) {
        input.value = '';
    } else {   
        ul.appendChild(li);
        input.value = '';
    }
}

function addItemButton (button) {
    let buttonId = button.id;
    switch (buttonId) {
        case 'strategic': 
            addItemButton1(buttonId);
            break;
        case 'team':
            addItemButton2(buttonId);
            break;
        case 'leaderMeetings':
            addItemButton3(buttonId);
            break;
        case 'staffMeetings':
            addItemButton4(buttonId);
            break;
        case 'tasks':
            addItemButton5(buttonId);
            break;
        case 'vacation':
            addItemButton6(buttonId);
            break;
        case 'sickLeave':
            addItemButton7(buttonId);
            break;    
        default:
            return false;
    }
}

function addToArray (button) {
    let buttonId = button.id;
    switch (buttonId) {
        case 'strategic': 
            addToArray1(buttonId);
            break;
        default:
            return false;
    }
}

const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        addItemButton(this);
        addToArray(this);
    }
}
/*
function submitButton (button) {
    let buttonId = button.id;
    switch (buttonId) {
        case 'strategicSubmit': 
            submitButton1(buttonId);
            break;
        default:
            return false;
    }
}

const submitButtons = document.getElementById('strategicSubmit');
for (let i = 0; i < submitButtons.length; i++) {
    submitButtons[i].onclick = function() {
        submitButton(this);
    }
}
*/