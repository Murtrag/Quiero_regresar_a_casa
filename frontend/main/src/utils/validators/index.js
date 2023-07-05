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

	if (password.length < minLength || password.length > maxLength) {
		return false;
	}

	if (!regexUpperCase.test(password)) {
		return false;
	}

	if (!regexLowerCase.test(password)) {
		return false;
	}

	if (!regexNumber.test(password)) {
		return false;
	}

	if (!regexSpecialChar.test(password)) {
		return false;
	}

	return true;
};

const validateEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
	// if (emailRegex.test(email)) {
	// 	return true; 
	// } else {
	// 	return false; 
	// }
};

const validateName = (name) => {
	const specialCharsRegex = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?0-9]/;
	const minLength = 3;
	const maxLength = 50;

	if (!name) {
		return false;
	} else if (specialCharsRegex.test(name)) {
		return false;
	} else if (name.length < minLength || name.length > maxLength) {
		return false;
	}
	return true;
};

const validatePhoneNumber = (phoneNumber) => {
	const numberRegex = /^\+?\d+$/;
	const minLength = 9;
	const maxLength = 15;
	const sanitizedPhoneNumber = phoneNumber.replace(/[^\d+]/g, '');
	if (!sanitizedPhoneNumber) {
		return false;
	} else if (!numberRegex.test(sanitizedPhoneNumber)) {
		return false;
	} else if (sanitizedPhoneNumber.length < minLength || sanitizedPhoneNumber.length > maxLength) {
		return false;
	}

	return true;
};


// Check if two fields have the same value
const validateEquality = (firstValue, secondValue) => firstValue === secondValue;

// Combine more than two validators
const combineValidators=(...validators)=> validators.every(v=>v===true)

export {
	validateLogin,
	validatePassword,
	validateEmail,
	validateEquality,
	validateName,
	validatePhoneNumber,
	combineValidators
}
