// GLOBAL VARIABLES
    const containerDiv = document.getElementById('containerDiv');   
    const sectionDiv = document.querySelectorAll('.sectionDiv');
    let sectionList = Array.from(sectionDiv);
  
    const section = document.getElementsByTagName('section');
    const h2 = document.getElementsByTagName('h2');
    const input = document.getElementsByTagName('input');



// Dynamically append the seven 'sectionDiv' elements with all sibling/child elements
// Appended to the 'containerDiv'    
    for (let i = 0; i < 7; i++) {
        let sectionDiv = document.createElement('div');
            sectionDiv.className = 'sectionDiv';
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        let input = document.createElement('input');
        let button = document.createElement('button');
        let compute = document.createElement('button');
        let ul = document.createElement('ul');
            ul.style.listStyleType = 'none';
        
        
        containerDiv.appendChild(sectionDiv)[i];    
        sectionDiv.appendChild(section)[i];
        section.appendChild(h2)[i];
        section.appendChild(input)[i];
        section.appendChild(button)[i];
            button.className = 'addItem';
        button.appendChild(ul)[i];
        section.appendChild(compute)[i];
            compute.className = 'compute'; 
        
        sectionList.push(sectionDiv);
    }

// Function to assign the 'textContent' of each '.addItem button'     
    function addItemButtonText() {
        for (let i = 0; i < sectionList.length; i++) {
            sectionList[i].firstElementChild.children[2].textContent = 'Add Item'; 
            }
        }
    addItemButtonText();

// Function to assign the 'textContent' of each '.compute button'
    function computeButtonText() {
        for (let i = 0; i < sectionList.length; i++) {
            sectionList[i].firstElementChild.children[3].textContent = 'Compute'; 
            }
        }
 computeButtonText();

// Function to assign the attributes of the 'input' elements
function inputAttributes() {
    for (let i = 0; i < sectionList.length; i++) {
        sectionList[i].firstElementChild.children[1].setAttribute('type', 'text'); 
        sectionList[i].firstElementChild.children[1].setAttribute('name', 'minutes');
        sectionList[i].firstElementChild.children[1].setAttribute('placeholder', 'Input Minutes...');
        }
    }
inputAttributes();









// Function to assign 'id' to each 'sectionDiv' element    
    function addSectionDivId(idInput, index) { 
        for (let i = 0; i < sectionList.length; i++) {
            i = parseInt(index);
            sectionList[index].id = idInput;
            return idInput;
        }
    }
// Function to assign the 'textContent' of each 'h3' element
    function addH3Input(h2Input, index) {
        for (let i = 0; i < sectionList.length; i++) {
            i = parseInt(index);
            sectionList[index].firstElementChild.children[0].textContent = h2Input;
            return h2Input;
        }
    }








// Click event for 'Add Item' button




// Click event for 'Compute' button



// Switch list for above functions    
    for (let i = 0; i < sectionList.length; i++) {
        switch (sectionList[i]) {
            case sectionList[0]: 
                addSectionDivId('strategicManagement', 0);
                addH3Input('Strategic Management', 0);
                break;
            case sectionList[1]:
                addSectionDivId('teamManagement', 1);
                addH3Input('Team Management', 1);
                break;
            case sectionList[2]:
                addSectionDivId('leadershipMeeting', 2);
                addH3Input('Leadership Meeting', 2);
                break;
            case sectionList[3]:
                addSectionDivId('staffMeeting', 3);
                addH3Input('Staff Meetings', 3);
                break;
            case sectionList[4]:
                addSectionDivId('tasks', 4);
                addH3Input('Tasks', 4);
                break;
            case sectionList[5]:
                addSectionDivId('vacation', 5);
                addH3Input('Vacation', 5);
                break;
            case sectionList[6]:
                addSectionDivId('sickLeave', 6);
                addH3Input('Sick Leave', 6);
                break;    
        }
    }
    

