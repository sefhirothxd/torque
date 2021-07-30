let y =
	window.scrollY +
	document.querySelector('#min_navbar').getBoundingClientRect().top;
let x =
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth;

let product = document.querySelector('.list-products');
let productMovil = document.querySelector('.ocultar');

// if (x >= 1200) {
// 	if (y > 50) {
// 		document.querySelector('.product-container').style.top = '184px';
// 		document.querySelector('.product-container').style.animationName =
// 			'probando';
// 	} else {
// 		document.querySelector('.product-container').style.top = '150px';
// 		document.querySelector('.product-container').style.animationName =
// 			'example';
// 	}
// } else if (x < 1200) {
// 	document.querySelector('.product-container').style.top = '150px';
// } else if (x == 137) {
// 	document.querySelector('.product-container').style.top = '150px';
// }

setInterval(() => {
	// console.log('verifico');
	let x =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

	if (x < 768) {
		product.style.display = 'none';
		productMovil.style.display = 'block';
	} else {
		product.style.display = 'flex';
		productMovil.style.display = 'none';
	}
}, 500);

console.log(y);
console.log(x, 'ancho');

window.addEventListener('scroll', () => {
	let y =
		window.scrollY +
		document.querySelector('#min_navbar').getBoundingClientRect().top;
	let x =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

	console.log(y);
	console.log(x, 'ancho');

	if (x >= 1200) {
		if (y > 50) {
			document.querySelector('.product-container').style.top = '100px';
			document.querySelector('.product-container').style.animationName =
				'probando';
		} else {
			document.querySelector('.product-container').style.top = '150px';
			document.querySelector('.product-container').style.animationName =
				'example';
		}
	}
	if (x < 1200 && x >= 992) {
		if (y == 86) {
			document.querySelector('.product-container').style.top = '186px';
			document.querySelector('.product-container').style.animationName =
				'medida1200';
		} else {
			document.querySelector('.product-container').style.top = '100px';
			document.querySelector('.product-container').style.animationName =
				'probando';
		}
	}
	if (x < 992) {
		if (y == 137) {
			document.querySelector('.product-container').style.top = '236px';
			document.querySelector('.product-container').style.animationName =
				'medida92';
		} else {
			document.querySelector('.product-container').style.top = '100px';
			document.querySelector('.product-container').style.animationName =
				'probando';
		}
	}

	// if (y > 50) {
	// 	document.querySelector('.product-container').style.top = '100px';
	// 	document.querySelector('.product-container').style.animationName =
	// 		'probando';
	// } else {
	// 	document.querySelector('.product-container').style.top = '150px';
	// 	document.querySelector('.product-container').style.animationName =
	// 		'example';
	// }
});
