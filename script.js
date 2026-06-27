const passwordField = document.getElementById("password");

function generatePassword() {
    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#";

    let password = "";

    for(let i = 0; i < 8; i++){
        const random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    passwordField.value = password;
}

function copyPassword(){
    if(passwordField.value === "") return;

    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied!");
}

generatePassword();