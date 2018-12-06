function newInputField() {
    let comment = ("This is a test");
    document.getElementById("test").innerHTML = comment;
}
document.getElementById('inputButton').addEventListener("click", newInputField);


