// const nav=document.querySelector('#nav-bar');
window.addEventListener('scroll', function(e){
	const nav = document.querySelector('.nav-bar');

	// grab top of nav bar
	const topOfNavBar= nav.offsetTop+1;

	// window.scrollY is how far we scrolled
	console.log(topOfNavBar, window.scrollY);
	if (window.scrollY >= topOfNavBar){
		document.body.classList.add('fixed-nav');
		document.body.style.paddingTop= nav.offsetHeight + 'px';
		console.log(nav.offsetHeight);
	}else{
		document.body.style.paddingTop= 0;
		document.body.classList.remove('fixed-nav');
		

	}
});


window.addEventListener('mouseover', function(e){
	var proj = event.path[0].classList[1];
	// console.log(event.path[0]);
	// console.log("------")
	// console.log(event.path[0].classList[0]);
	// console.log(event.path[0].classList[1]);
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
