let filter_state_mobile = false;
let filter_state_desktop = false;

function showHideFilterMobile() {
	if (filter_state_mobile === false) {
		document.getElementById("filter__dropdown").style.display = "block";
		filter_state_mobile = true;
	} else {
		document.getElementById("filter__dropdown").style.display = "none";
		filter_state_mobile = false;
	}
}

document.getElementById("filter__button").onclick = showHideFilterMobile;
document.getElementById("filter__button--mobile").onclick = showHideFilterMobile;
