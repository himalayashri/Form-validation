const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// document.getElementById('username_error').classList.add('display-none');

const validate = () => {
    checkUsername(username);
    checkEmail(email);
    checkPassword(password);
    checkConfirmPassword(password, cpassword);
}

const checkUsername = (username) => {
    if(username.value.length > 7){
        document.getElementById('username').classList.add('success');
        document.getElementById('username').classList.replace('error', 'success');
        document.getElementById('username_error').classList.add('display-none');
    }else{
        document.getElementById('username').classList.add('error');
        document.getElementById('username_error').classList.replace('display-none', 'display-block');
    }
}

const checkEmail = (email) => {
    if(email.value.length > 8 && email.value.includes('@gmail.com')){
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.replace('error', 'success');
        document.getElementById('email_error').classList.add('display-none');
    }else{
        document.getElementById('email').classList.add('error');
        document.getElementById('email_error').classList.replace('display-none', 'display-block');
    }
}
const checkPassword = (password) => {
    if(password.value.length > 7 && password.value.includes('@')){
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error', 'success');
        document.getElementById('password_error').classList.add('display-none');
    }else{
        document.getElementById('password').classList.add('error');
        document.getElementById('password_error').classList.replace('display-none', 'display-block');
    }
}
const checkConfirmPassword = (password, cpassword) => {
    if(password.value.length > 7 && password.value == cpassword.value){
        document.getElementById('cpassword').classList.add('success');
        document.getElementById('cpassword').classList.replace('error', 'success');
        document.getElementById('cpassword_error').classList.add('display-none');
    }else{
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword_error').classList.replace('display-none', 'display-block');
    }
}

const showPassword = () => {
    password.setAttribute('type', 'text');
   
}
const hidePassword = () => {
    password.setAttribute('type', 'password');
   
}
const showcPassword = () => {
    cpassword.setAttribute('type', 'text');
   
}
const hidecPassword = () => {
    cpassword.setAttribute('type', 'password');
   
}

const reset = () => {

    username.value = "";
    email.value = "";
    password.value = "";
    cpassword.value = "";

    document.getElementById('username').classList.remove('success');
    document.getElementById('username').classList.remove('error');

    document.getElementById('email').classList.remove('success');
    document.getElementById('email').classList.remove('error');

    document.getElementById('password').classList.remove('success');
    document.getElementById('password').classList.remove('error');

    document.getElementById('cpassword').classList.remove('success');
    document.getElementById('cpassword').classList.remove('error');

    document.getElementById('username_error').classList.add('display-none');
    document.getElementById('email_error').classList.add('display-none');
    document.getElementById('password_error').classList.add('display-none');
    document.getElementById('cpassword_error').classList.add('display-none');

}