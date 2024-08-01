
function checkmail(email) {
    let first = false;
    let second = false;
    let third = false;

    if (email.endsWith('.com') || email.endsWith('.in')) {
        first = true;
    }
    if (email.includes('@')) {
        if (email.split('@').length === 2) {
            second = true;
        }
    }
    if (email.indexOf('.com') > -1 && email.indexOf('@') > 1) {
        third = true;
    }
    return first && second && third;
}

function Myfun(password) {
    if (password.length < 8) {
        return false;
    }
    let uppercase = false;
    let lowercase = false;
    let digit = false;
    let sp = '@#*!';
    let special = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char.toUpperCase() == char) {
            uppercase = true;
        }

        if (char.toLowerCase() == char) {
            lowercase = true;
        }
        if (!isNaN(char)) {
            digit = true;
        }
        if (sp.includes(char)) {
            special = true;
        }
        if (uppercase && lowercase && digit && special) {
            return true;
        }
    }
    return false;
}

function validateForm() {
    let username = document.getElementById('usernameInput').value;
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('password').value;

    if (username === "" || email === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    } else if (!checkmail(email)) {
        alert('Invalid format email !!');
    } else if (!Myfun(password)) {
        alert('Invalid password format! Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character from @#*!');
    } else {
        alert('Login successful!');
    }
}
