function currentDiv(n) {
	showDivs((slideIndex = n));
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('demo');
	if (n > x.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' w3-opacity-off', '');
	}
	x[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' w3-opacity-off';
}
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs(n) {
	showDivs2((slideIndex2 += n));
}

function showDivs2(n) {
	var i;
	var x = document.getElementsByClassName('mySlides2');
	if (n > x.length) {
		slideIndex2 = 1;
	}
	if (n < 1) {
		slideIndex2 = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	x[slideIndex2 - 1].style.display = 'block';
}
