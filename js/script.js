/*
let button = document.querySelector("button");
let inputField = document.getElementById("test");
button.addEventListener("click", addInputField => {
    if (addInputField.button == 0) {
        console.log("Button Pressed Once");
        inputField.innerHTML = "This actually worked!";
    } else if (addInputField.button == 1) {
        console.log("Button Pressed Twice");
        inputField.innerHTML = "This actually worked again!";
    }
}
);
*/

let button = document.querySelector("button");
let inputField = document.getElementById("test");
button.addEventListener("click", addInputField => {
    console.log("Push One");
    inputField.innerHTML = "Push One";  
});





