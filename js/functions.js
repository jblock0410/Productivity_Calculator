const ul = document.querySelector('ul');

function addItemButton1() {
    let li = document.createElement('li');
    let input = document.querySelector('.strategicInput');
    let ul = document.getElementById('strategicUl');
    li.textContent = parseFloat(input.value);
    ul.appendChild(li);
    input.value = '';
}

function addItemButton2() {
    let li = document.createElement('li');
    let input = document.querySelector('.teamInput');
    let ul = document.getElementById('teamUl');
    li.textContent = parseFloat(input.value);
    ul.appendChild(li);
    input.value = '';
}

function addItemButton3() {
    let li = document.createElement('li');
    let input = document.querySelector('.leaderMeetingsInput');
    let ul = document.getElementById('leaderMeetingsUl');
    li.textContent = parseFloat(input.value);
    ul.appendChild(li);
    input.value = '';
}

function addItemButton4() {
    let li = document.createElement('li');
    let input = document.querySelector('.staffMeetingsInput');
    let ul = document.getElementById('staffMeetingsUl');
    li.textContent = parseFloat(input.value);
    ul.appendChild(li);
    input.value = '';
}

function addItemButton5() {
    let li = document.createElement('li');
    let input = document.querySelector('.tasksInput');
    let ul = document.getElementById('tasksUl');
    li.textContent = parseFloat(input.value);
    ul.appendChild(li);
    input.value = '';
}

function addItemButton6() {
    let li = document.createElement('li');
    let input = document.querySelector('.vacationInput');
    let ul = document.getElementById('vacationUl');
    li.textContent = parseFloat(input.value);
    ul.appendChild(li);
    input.value = '';
}

function addItemButton7() {
    let li = document.createElement('li');
    let input = document.querySelector('.sickLeaveInput');
    let ul = document.getElementById('sickLeaveUl');
    li.textContent = parseFloat(input.value);
    ul.appendChild(li);
    input.value = '';
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

const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        addItemButton(this);
    }
}