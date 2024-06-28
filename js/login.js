var emailLoginInput = document.getElementById('emailLoginInput');
var passwordLoginInput = document.getElementById('passwordLoginInput');
var loginBtn = document.getElementById('loginBtn');
var alertMassage=document.getElementById('alertMassage');
var userContainer = [];
if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}
function logIn() {
    if(checkInputsEmpty() == true)
    {
        //alert message
        getAlertMessage('All Inputs Required','red')
    }
    else
    {
        if(checkEmailPassword() == true)
        {
            //navigate home page
            window.location.href='home.html';
        }
        else
        {
            //alert message 
            getAlertMessage('Email or Password notCorrect','red');
        }
    }
   
}
function checkEmailPassword() {
    for (var index = 0; index < userContainer.length; index++) {
        if (userContainer[index].email == emailLoginInput.value && userContainer[index].passwrod == passwordLoginInput.value) {
            localStorage.setItem('userName',userContainer[index].userName)
            return true;
        }
    }
}
function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function checkInputsEmpty() {
    if ( emailLoginInput.value == '' || passwordLoginInput.value == '')
        return true;
    else
        return false;
}
loginBtn.addEventListener('click', logIn);