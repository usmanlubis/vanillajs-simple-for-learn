const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

function confirmPasswordHandler(){
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;
  const isMatch = isConfirmPasswordMatch(passwordValue, confirmPasswordValue);

  if (isMatch){
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
    if (passwordValue.length > 0){
      errorMessage.style.display = 'none';
    }
    return;
  }
    password.classList.add('error');
    confirmPassword.classList.add('error');
    errorMessage.style.display = 'block';
    return;
}

function isConfirmPasswordMatch(password, confirmPassword){
  if (password === confirmPassword){
    return true;
  }
  return false;
}

window.addEventListener('load', confirmPasswordHandler);
password.addEventListener('input', confirmPasswordHandler);
confirmPassword.addEventListener('input', confirmPasswordHandler);