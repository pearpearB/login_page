
let elInputUsername = document.querySelector('#username')
let failIdMessage = document.querySelector('.failure-message')
let successIdMessage = document.querySelector('.success-message')

let elInputPassword = document.querySelector('#password')
let elInputPwRetype = document.querySelector('#password-retype')
let failPwMessage = document.querySelector('.mismatch-message')

let btnRegister = document.querySelector('.register')

btnRegister.addEventListener('mousedown', function(event) {
	btnRegister.classList.add('click')
})
btnRegister.addEventListener('mouseup', function(event) {
	btnRegister.classList.remove('click')
})

btnRegister.onclick = getInputValue;

elInputUsername.addEventListener('keyup', function(event) {
	if (isMoreThan4Length(elInputUsername.value)) {
		successIdMessage.classList.remove('hide')
		failIdMessage.classList.add('hide')
	} else {
		successIdMessage.classList.add('hide')
		failIdMessage.classList.remove('hide')
	}
})

elInputPwRetype.onkeyup = function () {
	if (!(isMatch (elInputPassword.value, elInputPwRetype.value)))
		failPwMessage.classList.remove('hide')
	else
	failPwMessage.classList.add('hide')
}

function isMoreThan4Length(value) {
	return value.length >= 4 
  }


function isMatch (password1, password2) {
  return password1 === password2
}

function getInputValue() {
	console.log(elInputUsername.value);
	console.log(elInputPassword.value);
}