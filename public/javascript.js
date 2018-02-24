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
var test=document.querySelectorAll('.learn-more');
console.log(test);
test.forEach(er => er.addEventListener('mouseover', function(e){
	this.style.color="#eaa835";
}));
test.forEach(er => er.addEventListener('mouseout', function(e){
	this.style.color="black";
}));
// SENDS POST REQUEST
// get button id and .addeventlisten click name of function to run
// that function would run the fetch/post request with /send in it
// fetch('/send', {
// 	method: "POST"
// });

