function handleLogin() {
    console.log('login');
    let inputEmail = document.getElementById('input__email').value
    let inputPwd = document.getElementById('input__password').value
    console.log(inputEmail, inputPwd);
    if (inputEmail === 'aptech@gmail.com' && inputPwd === 'aptech') {
        window.location.href = './index.html' 
    }else{
        alert('login that bai')
    }
}