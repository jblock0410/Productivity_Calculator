const ul = document.querySelector('ul');




function addItemButton1() {
    let li = document.createElement('li');
    let input = document.querySelector('.strategicInput');
    let ul = document.getElementById('strategicUl');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
}

function addItemButton2() {
    let li = document.createElement('li');
    let input = document.querySelector('.teamInput');
    let ul = document.getElementById('teamUl');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
}

function addItemButton3() {
    let li = document.createElement('li');
    let input = document.querySelector('.meetingsInput');
    let ul = document.getElementById('meetingsUl');
    li.textContent = input.value;
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
        case 'meetings':
            addItemButton3(buttonId);
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