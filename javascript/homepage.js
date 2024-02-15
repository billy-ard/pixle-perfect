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
