window.addEventListener('mouseover', function(e){
	var proj = event.path[0].classList[1];
	if (proj==='coarse-coding'){
		document.getElementById('learn-coarse').style.color="#eaa835";
	}
	else if (proj==='intra'){
		document.getElementById('learn-intra').style.color="#eaa835";
	}
	else if (proj==='wanderer'){
		document.getElementById('learn-wanderer').style.color="#eaa835";
	}
	else if (proj==='lifept'){
		document.getElementById('learn-lifept').style.color="#eaa835";
	}
});
window.addEventListener('mouseout', function(e){
	var proj = event.path[0].classList[1];
	if (proj==='coarse-coding'){
		document.getElementById('learn-coarse').style.color="black";
	}
	else if (proj==='intra'){
		document.getElementById('learn-intra').style.color="black";
	}
	else if (proj==='wanderer'){
		document.getElementById('learn-wanderer').style.color="black";
	}
	else if (proj==='lifept'){
		document.getElementById('learn-lifept').style.color="black";
	}
});