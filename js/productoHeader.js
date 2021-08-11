// let containerHeader = document.getElementById('main_navbar');
// let y = window.pageYOffset || document.documentElement.scrollTop;
// let x =
// 	window.innerWidth ||
// 	document.documentElement.clientWidth ||
// 	document.body.clientWidth;

let product = document.querySelector('.list-productsFix');
let productMovil = document.querySelector('.ocultar');

let productContainer = document.querySelector('.product-containerFix');

let productOcultar = document.querySelector('.ocultarproduct');
let ulProduct = document.querySelector('.ul-ocultar');
let btnProduct = document.querySelector('#btn-producto-movil');
let btnProduct2 = document.querySelector('.btn-product-mobil');
let btnllave = document.querySelector('#btn-llave-movil');
let btnllave2 = document.querySelector('.ocultarllave');
let btnHamburger = document.querySelector('.hamburger');

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
	let y = window.pageYOffset || document.documentElement.scrollTop;
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

	// if (x >= 1200) {
	// 	document.querySelector('.product-container').style.top = '150px';
	// 	document.querySelector('.product-container').style.animationName =
	// 		'example';
	// }
	// if (x < 1200 && x >= 992) {
	// 	document.querySelector('.product-container').style.top = '150px';
	// 	document.querySelector('.product-container').style.animationName =
	// 		'medida1200';
	// }
	// if (x < 992) {
	// 	document.querySelector('.product-container').style.top = '150px';
	// 	document.querySelector('.product-container').style.animationName =
	// 		'medida92';
	// }
}, 500);

// addEventListener('scroll', () => {
// 	let containerHeader = document.getElementById('main_navbar');
// 	let y = window.pageYOffset || document.documentElement.scrollTop;
// 	let x = containerHeader.scrollLeft;
// 	console.log(y, 'alto');
// 	console.log(x, 'ancho');
// });
