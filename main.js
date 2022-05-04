let confirmPassword = document.getElementById('confirm-password'),
	password = document.getElementById('password');

function formValidation() {}

function checkPasswords() {
	if (password.value != confirmPassword.value) {
		confirmPassword.setCustomValidity(`Passwords Don't Match`);
		confirmPassword.classList.add('invalid-form-input');
	} else {
		confirmPassword.setCustomValidity('');
	}
}

password.onchange = checkPasswords;
confirmPassword.onkeyup = checkPasswords;
