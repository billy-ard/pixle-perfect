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

document.getElementById("menu-icon").onclick = showHideMenuMobile;
document.getElementById("close-icon").onclick = showHideMenuMobile;

let navItems = document.getElementsByClassName("nav__item");

// Attach event listeners to each element
for (var i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("mouseover", showDesktop);
	navItems[i].addEventListener("mouseout", hideDesktop);
}

// Event handler functions
function showDesktop() {
	document.getElementById("header__menu--desktop").style.display = "block";
}

function hideDesktop() {
	document.getElementById("header__menu--desktop").style.display = "none";
}

let currentSlideNum = 2;
let numImage = 3;

const nextSlideImage = (event) => {
	event.preventDefault();

	if (currentSlideNum <= numImage && currentSlideNum <= 2) {
		document.getElementById(`image-${currentSlideNum}`).style.display = "none";
		currentSlideNum++;
		document.getElementById(`image-${currentSlideNum}`).style.display = "block";
	}
};

const prevSlideImage = (event) => {
	event.preventDefault();

	if (currentSlideNum <= numImage && currentSlideNum >= 2) {
		document.getElementById(`image-${currentSlideNum}`).style.display = "none";
		currentSlideNum--;
		document.getElementById(`image-${currentSlideNum}`).style.display = "block";
	}
};

document
	.getElementById("back__button")
	.addEventListener("click", prevSlideImage);

document
	.getElementById("next__button")
	.addEventListener("click", nextSlideImage);

let popup = document.getElementById("popup");

const showHide = (event) => {
	event.preventDefault();
	if (popup.style.display == "block") popup.style.display = "none";
	else popup.style.display = "block";
};

let cartCounterDisplay = document.getElementById("cart__item__counter");
let cartCounter = document.getElementById("cart__counter");

let numOfItem = 0;

const addToCart = (event) => {
	event.preventDefault();
	numOfItem++;
	cartCounterDisplay.style.display = "flex";
	cartCounter.innerHTML = numOfItem;

	if (popup.style.display == "block") popup.style.display = "none";
	else popup.style.display = "block";
};

document.getElementById("add__to__cart").addEventListener("click", addToCart);
document.getElementById("close_popup").addEventListener("click", showHide);

const showHideDropdown = (e, category) => {
	e.preventDefault();
	let item = document.getElementById(`${category}__body`);
	let btn = document.getElementById(`${category}__btn`);

	if (item.style.display == "block") {
		btn.src = "../assets/img/icon/chevron__up.svg";
		item.style.display = "none";
	} else {
		btn.src = "../assets/img/icon/chevron__down.svg";
		item.style.display = "block";
	}
};

document
	.getElementById("desc__btn")
	.addEventListener("click", function (event) {
		// Call handleClick and pass the event object
		showHideDropdown(event, "desc");
	});

document
	.getElementById("material__btn")
	.addEventListener("click", function (event) {
		// Call handleClick and pass the event object
		showHideDropdown(event, "material");
	});

document
	.getElementById("ship__btn")
	.addEventListener("click", function (event) {
		// Call handleClick and pass the event object
		showHideDropdown(event, "ship");
	});
