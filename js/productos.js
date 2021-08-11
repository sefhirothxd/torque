let y =
	window.scrollY +
	document.querySelector('#min_navbar').getBoundingClientRect().top;
let x =
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth;

let product = document.querySelector('.list-products');
let productMovil = document.querySelector('.ocultar');
let productOcultar = document.querySelector('.ocultarproduct');
let ulProduct = document.querySelector('.ul-ocultar');
let btnProduct = document.querySelector('#btn-producto-movil');
let btnProduct2 = document.querySelector('.btn-product-mobil');
let btnllave = document.querySelector('#btn-llave-movil');
let btnllave2 = document.querySelector('.ocultarllave');
let btnHamburger = document.querySelector('.hamburger');

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
	let y =
		window.scrollY +
		document.querySelector('#min_navbar').getBoundingClientRect().top;
	let x =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

	if (x < 768) {
		product.style.display = 'none';
		productMovil.classList.remove('hidden');
		productMovil.style.display = 'block';
	} else {
		product.style.display = 'flex';
		productMovil.classList.add('hidden');
		productMovil.style.display = 'none';
	}

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
		if (y == 50) {
			document.querySelector('.product-container').style.top = '150px';
			document.querySelector('.product-container').style.animationName =
				'medida1200';
		} else {
			document.querySelector('.product-container').style.top = '100px';
			document.querySelector('.product-container').style.animationName =
				'probando';
		}
	}
	if (x < 992) {
		// console.log(y, 'valor de y');
		if (y == 51) {
			document.querySelector('.product-container').style.top = '150px';
			document.querySelector('.product-container').style.animationName =
				'medida92';
		} else {
			document.querySelector('.product-container').style.top = '100px';
			document.querySelector('.product-container').style.animationName =
				'probando';
		}
	}
}, 500);

btnProduct.addEventListener('click', () => {
	console.log('funciono');
	productOcultar.classList.toggle('hidden');
});
btnProduct2.addEventListener('click', () => {
	ulProduct.classList.toggle('hidden');
	// ulProduct.style.display = 'block';
});

btnllave.addEventListener('click', () => {
	console.log('funciono');
	btnllave2.classList.toggle('hidden');
});
btnHamburger.addEventListener('click', () => {
	ulProduct.classList.add('hidden');
	productOcultar.classList.add('hidden');
	btnllave2.classList.add('hidden');
});

// console.log(y);
// console.log(x, 'ancho');

// window.addEventListener('scroll', () => {
// 	let y =
// 		window.scrollY +
// 		document.querySelector('#min_navbar').getBoundingClientRect().top;
// 	let x =
// 		window.innerWidth ||
// 		document.documentElement.clientWidth ||
// 		document.body.clientWidth;

// 	console.log(y);
// 	console.log(x, 'ancho');

// 	if (x >= 1200) {
// 		if (y > 50) {
// 			document.querySelector('.product-container').style.top = '100px';
// 			document.querySelector('.product-container').style.animationName =
// 				'probando';
// 		} else {
// 			document.querySelector('.product-container').style.top = '150px';
// 			document.querySelector('.product-container').style.animationName =
// 				'example';
// 		}
// 	}
// 	if (x < 1200 && x >= 992) {
// 		if (y == 86) {
// 			document.querySelector('.product-container').style.top = '186px';
// 			document.querySelector('.product-container').style.animationName =
// 				'medida1200';
// 		} else {
// 			document.querySelector('.product-container').style.top = '100px';
// 			document.querySelector('.product-container').style.animationName =
// 				'probando';
// 		}
// 	}
// 	if (x < 992) {
// 		if (y == 137) {
// 			document.querySelector('.product-container').style.top = '236px';
// 			document.querySelector('.product-container').style.animationName =
// 				'medida92';
// 		} else {
// 			document.querySelector('.product-container').style.top = '100px';
// 			document.querySelector('.product-container').style.animationName =
// 				'probando';
// 		}
// 	}

// if (y > 50) {
// 	document.querySelector('.product-container').style.top = '100px';
// 	document.querySelector('.product-container').style.animationName =
// 		'probando';
// } else {
// 	document.querySelector('.product-container').style.top = '150px';
// 	document.querySelector('.product-container').style.animationName =
// 		'example';
// }
// });
