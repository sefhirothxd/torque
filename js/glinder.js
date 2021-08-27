window.addEventListener('load', function () {
	new Glider(document.querySelector('.glider'), {
		slidesToShow: 1,
		dots: '#dots',
		draggable: true,
		slidesToScroll: 1,
		itemWidth: 150,
		duration: 0.25,
		arrows: {
			prev: '.glider-prev',
			next: '.glider-next',
		},
	});
});
