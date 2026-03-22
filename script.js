// Password matching
const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector(
	'input[name="confirm-password"]',
);

function checkPasswordMatch() {
	if (password.value !== confirmPassword.value) {
		confirmPassword.setCustomValidity("Passwords do not match");
	} else {
		confirmPassword.setCustomValidity(""); // Clear error if they match
	}
}

// Check every time user types in confirm field
password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);
