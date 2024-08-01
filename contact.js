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
function validnumber(number) {
   
   
    if(number.length==10&&!isNaN(number)){
        return true;
    }else{
        return false;
    }

}
function validatecontact() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone =document.getElementById('phone').value;
    let msg=document.getElementById('msg').value;

    if (name === "" || email === "" || phone === ""  || msg === "") {
        alert("All fields must be filled out");
        return false;
    }     else if (!checkmail(email)) {
        alert('Invalid email format  !!');
    }
    else if (!validnumber(phone)) {
        alert('Invalid phone number format !!');
    }
    else {
        alert('message delivered!!');
    }
}
