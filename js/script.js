// GLOBAL VARIABLES
    const containerDiv = document.getElementById('containerDiv');   
    const sectionDiv = document.querySelectorAll('.sectionDiv');
    let sectionList = Array.from(sectionDiv);
  
    const section = document.getElementsByTagName('section');
    const h2 = document.getElementsByTagName('h2');
    const input = document.getElementsByTagName('input');
    const ul = document.getElementsByTagName('ul');
    const button = document.getElementsByClassName('addItem');
    const compute = document.getElementsByClassName('compute');

// Dynamically append the seven 'sectionDiv' elements with all sibling/child elements
// Appended to the 'containerDiv'    
    for (let i = 0; i < 7; i++) {
        let sectionDiv = document.createElement('div');
            sectionDiv.className = 'sectionDiv';
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        let ul = document.createElement('ul');
            ul.style.listStyleType = 'none';
        
        containerDiv.appendChild(sectionDiv)[i];    
        sectionDiv.appendChild(section)[i];
        section.appendChild(h2)[i];
 
        sectionList.push(sectionDiv);
    }



/*********************************************************************************/



// Function to assign 'id' to each 'sectionDiv' element (used with SWITCH)   
    function addSectionDivId(idInput, index) { 
        for (let i = 0; i < sectionList.length; i++) {
            i = parseInt(index);
            sectionList[index].id = idInput;
            return idInput;
        }
    }

// Function to assign the 'textContent' of each 'h3' element (used with SWITCH)
    function addH2Input(h2Input, index) {
        for (let i = 0; i < sectionList.length; i++) {
            i = parseInt(index);
            sectionList[index].firstElementChild.children[0].textContent = h2Input;
            return h2Input;
        }
    }
// Function to create initial 'input' element (used with SWITCH)
    function createInput(index) {
        let input = document.createElement('input');
        for (let i = 0; i < sectionList.length; i++) {
            i = parseInt(index);
            sectionList[index].firstElementChild.appendChild(input);
            sectionList[index].firstElementChild.lastElementChild.setAttribute('type', 'text'); 
            sectionList[index].firstElementChild.lastElementChild.setAttribute('name', 'minutes');
            sectionList[index].firstElementChild.lastElementChild.setAttribute('placeholder', 'Input Minutes...');
            return index;    
        }
    }

// Function to create 'Add Item' button for each 'containerDiv' (used with SWITCH)
    function createInitalAddItemButton(textLabel, index) {
        let button = document.createElement('button');
        for (let i = 0; i < sectionList.length; i++) {
            i = parseInt(index);
            sectionList[index].firstElementChild.appendChild(button);
            sectionList[index].firstElementChild.lastElementChild.className = 'addItem';
            sectionList[index].firstElementChild.lastElementChild.id = index;
            sectionList[index].firstElementChild.lastElementChild.textContent = textLabel;
            return textLabel;
        }
    }

// Function to create 'Compute' button for each 'containerDiv' (used with SWITCH)
    function createComputeButton(computeLabel, index) {
        let button = document.createElement('button');
        for (let i = 0; i < sectionList.length; i++ ) {
            i = parseInt(index);
            sectionList[index].appendChild(button);
            sectionList[index].lastElementChild.className = 'compute';
            sectionList[index].lastElementChild.id = index;
            sectionList[index].lastElementChild.textContent = computeLabel;
            return computeLabel;
        }
    }











// Switch list for above functions    
    for (let i = 0; i < sectionList.length; i++) {
        switch (sectionList[i]) {
            case sectionList[0]: 
                addSectionDivId('strategicManagement', 0);
                addH2Input('Strategic Management', 0);
                createInput(0);
                createInitalAddItemButton('Add Item', 0);
                createComputeButton('Compute', 0);
                break;
            case sectionList[1]:
                addSectionDivId('teamManagement', 1);
                addH2Input('Team Management', 1);
                createInput(1);
                createInitalAddItemButton('Add Item', 1);
                createComputeButton('Compute', 1);
                break;
            case sectionList[2]:
                addSectionDivId('leadershipMeeting', 2);
                addH2Input('Leadership Meeting', 2);
                createInput(2);
                createInitalAddItemButton('Add Item', 2);
                createComputeButton('Compute', 2);
                break;
            case sectionList[3]:
                addSectionDivId('staffMeeting', 3);
                addH2Input('Staff Meetings', 3);
                createInput(3);
                createInitalAddItemButton('Add Item', 3);
                createComputeButton('Compute', 3);
                break;
            case sectionList[4]:
                addSectionDivId('tasks', 4);
                addH2Input('Tasks', 4);
                createInput(4);
                createInitalAddItemButton('Add Item', 4);
                createComputeButton('Compute', 4);
                break;
            case sectionList[5]:
                addSectionDivId('vacation', 5);
                addH2Input('Vacation', 5);
                createInput(5);
                createInitalAddItemButton('Add Item', 5);
                createComputeButton('Compute', 5);
                break;
            case sectionList[6]:
                addSectionDivId('sickLeave', 6);
                addH2Input('Sick Leave', 6);
                createInput(6);
                createInitalAddItemButton('Add Item', 6);
                createComputeButton('Compute', 6);
                break;    
        }
    }


// Click event for 'Add Item' button


// Click event for 'Compute' button
    

