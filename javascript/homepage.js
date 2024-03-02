let menu_state_mobile = false;
let menu_state_desktop = false;

function showHideMenuMobile() {
	if (menu_state_mobile === false) {
		document.getElementById("header__menu--mobile").style.display = "block";
		menu_state_mobile = true;
	} else {
		document.getElementById("header__menu--mobile").style.display = "none";
		menu_state_mobile = false;
	}
}

// Event handler functions
function showDesktop() {
	document.getElementById("header__menu--desktop").style.display = "block";
}

function hideDesktop() {
	document.getElementById("header__menu--desktop").style.display = "none";
}

function showHidePopup(e, state) {
	e.preventDefault();

	if (popupState[state] == false) {
		popupState[state] = true;
		if (
			popupState["login__form"] == true &&
			popupState["register__form"] == true
		) {
			popupState["login__form"] = false;
			document.getElementById("login__form").style.display = "none";
		}

		document.getElementById(state).style.display = "block";
		document.getElementById("popup__bg").style.display = "block";
	} else {
		popupState[state] = false;
		document.getElementById(state).style.display = "none";
		document.getElementById("popup__bg").style.display = "none";
	}
}

function isValidEmail(email) {
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

let registerElement = document.getElementById("register__form");

let popupState = {
	register__form: false,
	login__form: false,
};

document.getElementById("menu-icon").onclick = showHideMenuMobile;
document.getElementById("close-icon").onclick = showHideMenuMobile;

let navItems = document.getElementsByClassName("nav__item");

// Attach event listeners to each element
for (var i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("mouseover", showDesktop);
	navItems[i].addEventListener("mouseout", hideDesktop);
}

document
	.getElementById("register__close")
	.addEventListener("click", function (event) {
		showHidePopup(event, "register__form");
	});

document
	.getElementById("register_popup")
	.addEventListener("click", function (event) {
		showHidePopup(event, "register__form");
	});

document
	.getElementById("user__btn")
	.addEventListener("click", function (event) {
		showHidePopup(event, "login__form");
	});

document
	.getElementById("login__close")
	.addEventListener("click", function (event) {
		showHidePopup(event, "login__form");
	});

document
	.getElementById("login__form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		let valid = false;
		let emailInput = document.getElementById("login__email");
		let email = emailInput.value.trim();

		let emailErrorMsg = document.getElementById("login__email_error_msg");
		emailErrorMsg.innerHTML = ""; // Clear previous error message

		// Basic email validation
		if (!email) {
			emailErrorMsg.display = "block";
			emailErrorMsg.innerHTML = "Email is required";
		} else if (!isValidEmail(email)) {
			emailErrorMsg.display = "block";
			emailErrorMsg.innerHTML = "Please enter a valid email address";
		} else {
			emailErrorMsg.display = "none";
			valid = true;
		}

		let passwordInput = document.getElementById("login__password");
		let password = passwordInput.value.trim();

		let passwordErrorMsg = document.getElementById("login__password_error_msg");
		passwordErrorMsg.innerHTML = ""; // Clear previous error message

		// Basic password validation
		if (!password && password == "") {
			passwordErrorMsg.display = "block";
			passwordErrorMsg.innerHTML = "Password is required";
			valid = false;
		}

		if (valid) {
			//clear input
			emailInput.value = "";
			passwordInput.value = "";
			showHidePopup(event, "login__form");
		}
	});

document
	.getElementById("register__form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		let valid = false;
		let emailInput = document.getElementById("login__email");
		let email = emailInput.value.trim();

		let emailErrorMsg = document.getElementById("login__email_error_msg");
		emailErrorMsg.innerHTML = ""; // Clear previous error message

		// Basic email validation
		if (!email) {
			emailErrorMsg.display = "block";
			emailErrorMsg.innerHTML = "Email is required";
		} else if (!isValidEmail(email)) {
			emailErrorMsg.display = "block";
			emailErrorMsg.innerHTML = "Please enter a valid email address";
		} else {
			emailErrorMsg.display = "none";
			valid = true;
		}

		let passwordInput = document.getElementById("login__password");
		let password = passwordInput.value.trim();

		let passwordErrorMsg = document.getElementById("login__password_error_msg");
		passwordErrorMsg.innerHTML = ""; // Clear previous error message

		// Basic password validation
		if (!password && password == "") {
			passwordErrorMsg.display = "block";
			passwordErrorMsg.innerHTML = "Password is required";
			valid = false;
		}

		if (valid) {
			//clear input
			emailInput.value = "";
			passwordInput.value = "";
			showHidePopup(event, "login__form");
		}
	});

// Get all elements with the class "show__hide__password"
var elements = document.getElementsByClassName("show__hide__password");

// Loop through each element and attach an event listener
for (var i = 0; i < elements.length; i++) {
	let element = elements[i];
	let element_parent = element.parentElement;

	elements[i].addEventListener("click", function (event) {
		let input = element.parentElement.querySelector('input[name="password"]');

		if (input.type == "text") {
			input.type = "password";
		} else {
			input.type = "text";
		}
	});
}
