window.addEventListener('mouseover', function(e){
	var proj = event.path[0].classList[1];
	if (proj==='coarse-coding'){
		document.getElementById('learn').style.color="#eaa835";
	}
	else if (proj==='intra'){
		document.getElementById('learn2').style.color="#eaa835";
	}
	else if (proj==='wanderer'){
		document.getElementById('learn3').style.color="#eaa835";
	}
	else if (proj==='lifept'){
		document.getElementById('learn4').style.color="#eaa835";
	}
});
window.addEventListener('mouseout', function(e){
	var proj = event.path[0].classList[1];
	if (proj==='coarse-coding'){
		document.getElementById('learn').style.color="black";
	}
	else if (proj==='intra'){
		document.getElementById('learn2').style.color="black";
	}
	else if (proj==='wanderer'){
		document.getElementById('learn3').style.color="black";
	}
	else if (proj==='lifept'){
		document.getElementById('learn4').style.color="black";
	}
});