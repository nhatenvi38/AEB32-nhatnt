function handleLogin()
{
  let userName = document.getElementById('inputUsername').value
  let password = document.getElementById('inputPassword').value
  console.log(userName, password);
  if (userName.toLowerCase() === "aptech" && password.toLowerCase() === "aptech") {
    console.log(userName, password);
    alert('success')
    window.location.href = './home.html'
  }
  else {
    alert('fail')
  }
}