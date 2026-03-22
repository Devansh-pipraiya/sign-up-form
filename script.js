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

//
// modal logic
const form = document.querySelector("form");
const modal = document.getElementById("summary-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("modal-close");

const fieldLabels = {
	"first-name": "First Name",
	"last-name": "Last Name",
	email: "Email",
	phone: "Phone Number",
	password: "Password",
	"confirm-password": "Confirm Password",
};

form.addEventListener("submit", function (e) {
	e.preventDefault();

	const data = new FormData(form);
	let html = "<ul>";

	for (const [name, value] of data.entries()) {
		const label = fieldLabels[name] || name;
		// hide password value for safety
		const display =
			name === "password" || name === "confirm-password"
				? "SomethingSomething"
				: value || "<em>not provided</em>";
		html += `<li><span class="field-name">${label}:</span> ${display}</li>`;
	}

	html += "</ul>";
	modalBody.innerHTML = html;
	modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	modal.classList.remove("active");
});

// close modal when clicking outside the box
modal.addEventListener("click", (e) => {
	if (e.target === modal) modal.classList.remove("active");
});
