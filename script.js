document.getElementById("btn").addEventListener("click", function() {
    const inputName = document.getElementById("inputName");
    const inputAge = document.getElementById("inputAge");
    const inputEmail = document.getElementById("inputEmail");

    if (inputName.value.length < 3) {
        alert("Name must be at least 3 characters long.");
        return;
    } else if (inputAge.value < 18) {
        alert("Age must be at least 18.");
        return;
    } else if (!inputEmail.value.includes("@")) {
        alert("Email must be valid.");
        return;
    } else {
        alert(" your " + inputName.value + " is " + inputAge.value + " and email is " + inputEmail.value);
        inputName.value = "";
        inputAge.value = "";
        inputEmail.value = "";
    }
});
    