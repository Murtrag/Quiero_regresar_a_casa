const validateLogin = login => {
	if (login.length > 150) {
		return false;
	}
	const regex = /^[\w.@+-]+$/;
	if (!regex.test(login)) {
		return false;
	}
	return true;
};

const validatePassword = password => {
  const minLength = 6;
  const maxLength = 30;
  const regexUpperCase = /[A-Z]/;
  const regexLowerCase = /[a-z]/;
  const regexNumber = /[0-9]/;
  const regexSpecialChar = /[!@#$%^&*]/;

  if (login.length < minLength || login.length > maxLength) {
    return false;
  }

  if (!regexUpperCase.test(login)) {
    return false;
  }

  if (!regexLowerCase.test(login)) {
    return false;
  }

  if (!regexNumber.test(login)) {
    return false;
  }

  if (!regexSpecialChar.test(login)) {
    return false;
  }

  return true;
};

const validateEmail = (password=>{

})

export {
	validateLogin,
	validatePassword,
	validateEmail,
}
