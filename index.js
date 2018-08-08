const color_primary = "#134427";
const color_light = "#ffffff";

document.addEventListener("scroll", function() {
	const scrollOffset = window.pageYOffset;
	const interval = setInterval(frame, 1);
	function frame() {
		if(scrollOffset > 50) {
			document.querySelector("#navbar").className = "navbar fixed-top navbar-expand bg-light navbar-light";
			document.querySelector("#navbar").style.borderBottom = `3px solid ${color_primary}`;
			document.querySelector("#navbar .navbar-brand").style.color = color_primary;
			document.querySelector("#navbar .nav-link.share").style.color = color_primary;
			document.querySelector("#navbar .nav-link.share path").style.fill = color_primary;
			document.querySelector("#navbar .navbar-nav .btn").className = "btn btn-primary text-light";
			clearInterval(interval);
		}else{
			document.querySelector("#navbar").className = "navbar fixed-top navbar-expand mt-4";
			document.querySelector("#navbar").style.border = "none";
			document.querySelector("#navbar .navbar-brand").style.color = color_light;
			document.querySelector("#navbar .nav-link.share").style.color = color_light;
			document.querySelector("#navbar .nav-link.share path").style.fill = color_light;
			document.querySelector("#navbar .navbar-nav .btn").className = "btn btn-light text-primary";
			clearInterval(interval);
		}
	}
	
});