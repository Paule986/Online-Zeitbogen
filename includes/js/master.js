
function toggle() {
	var ele = document.getElementById("liste");
	var show = document.getElementById("showbutton");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		show.innerHTML = "Liste anzeigen";
  	}
	else {
		ele.style.display = "block";
		ele.className = '';
		show.innerHTML = "Liste ausblenden";
	}
} 
