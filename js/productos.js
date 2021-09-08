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
/*seccion desplegable*/
let contenedorDesplegable = document.querySelector('.port_item');
let btn_todoCard = document.querySelector('.todos-card');
let btn_torquimetroCard = document.querySelector('.torquimetro-card');
let btn_multiplicadorCard = document.querySelector('.multiplicador-card');
let btn_llaveCard = document.querySelector('.llave-card');
/*lis para cambiar los estados*/
let li_todos = document.querySelector('.li-todo');
let li_torqui = document.querySelector('.li-torquimetro');
let li_multi = document.querySelector('.li-multiplicador');
let li_llave = document.querySelector('.li-llave');

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

btn_todoCard.addEventListener('click', () => {
	li_todos.classList.add('active');
	li_torqui.classList.remove('active');
	li_multi.classList.remove('active');
	li_llave.classList.remove('active');

	contenedorDesplegable.innerHTML = `
		<div class="portfolio_item__card">
		<h3>Torquimetros</h3>
		<div class="portfolio_item__card--content">
			<img
				class=""
				src="images/torquimetros.jpg"
				alt="Torquimetros"
			/>
			<section class="portfolio_item__card--content__text">
				<p>Tenemos:</p>
				<ul>
					<li>
						<a href="torquimetros-de-golpe.html"
							>Torqu&iacute;metros de Golpe</a
						>
					</li>
					<li>
						<a href="torquimetros-de-reloj.html"
							>Torquímetros de Golpe Antichispa</a
						>
					</li>
					<li>
						<a href="torquimetros-de-reloj.html"
							>Torqu&iacute;metros de Reloj</a
						>
					</li>
					<li>
						<a href="torquimetros-de-reloj.html"
							>Torquimetro digital Inalámbrico</a
						>
					</li>
					<li>
						<a href="torquimetros-de-reloj.html"
							>Torquimetro Destornillador</a
						>
					</li>
				</ul>
				<p>Encastre de diferentes medidas...</p>
				<a href="torquimetros-de-golpe.html" class="button_all"
					>Ver Más</a
				>
			</section>
		</div>
	</div>
	<div class="portfolio_item__card">
		<h3>MULPLICADOR DE TORQUE</h3>
		<div class="portfolio_item__card--content">
			<img
				class=""
				src="images/multiplicador torque.jpg"
				alt="Torquimetros"
			/>
			<section class="portfolio_item__card--content__text">
				<p>Encastre en variedad de medidas...</p>
				<ul>
					<li>Torque de salida 750 Lbs-pie</li>
					<li>Torque de salida 1000 Lbs-pie</li>
					<li>Torque de salida 1200 Lbs-pie</li>
					<li>Torque de salida 2000 Lbs-pie</li>
					<li>Torque de salida 2200 Lbs-pie</li>
					<li>Torque de salida 3200 Lbs-pie</li>
					<li>Torque de salida 5000 Lbs-pie</li>
					<li>Torque de salida 8000 Lbs-pie</li>
				</ul>
				<a href="multiplicador-de-torque.html" class="button_all"
					>Ver Más</a
				>
			</section>
		</div>
	</div>
	<div class="portfolio_item__card">
		<h3>LLAVES DE CONTROL DE TORQUE</h3>
		<div class="portfolio_item__card--content">
			<img class="" src="images/llaves.jpg" alt="Torquimetros" />
			<section class="portfolio_item__card--content__text">
				<p>
					<a href="llave-de-control-de-torque-electrica.html"
						>Llave de controld de torque <b>el&eacute;ctrica</b></a
					><br />
					<a href="llave-de-control-de-torque-a-bateria.html"
						>Llave de controld de torque a <b>bater&iacute;a</b></a
					><br />
					<a href="llave-de-control-de-torque-neumatica.html"
						>Llave de controld de torque <b>neum&aacute;tica</b></a
					><br />
					<a href="llave-de-control-de-torque-hidraulica.html"
						>Llave de controld de torque <b>hidr&aacute;ulica</b></a
					><br />
				</p>
				<a href="llave-de-control.html" class="button_all">Ver Más</a>
			</section>
		</div>
	</div>	
		
		`;
});
btn_torquimetroCard.addEventListener('click', () => {
	li_todos.classList.remove('active');
	li_torqui.classList.add('active');
	li_multi.classList.remove('active');
	li_llave.classList.remove('active');
	console.log('funciono');
	contenedorDesplegable.innerHTML = `
	<div class="portfolio_item__card">
	<h3>Torquimetros</h3>
	<div class="portfolio_item__card--content">
		<img
			class=""
			src="images/torquimetros.jpg"
			alt="Torquimetros"
		/>
		<section class="portfolio_item__card--content__text">
			<p>Tenemos:</p>
			<ul>
					<li>
						<a href="torquimetros-de-golpe.html"
							>Torqu&iacute;metros de Golpe</a
						>
					</li>
					<li>
						<a href="torquimetros-de-reloj.html"
							>Torquímetros de Golpe Antichispa</a
						>
					</li>
					<li>
						<a href="torquimetros-de-reloj.html"
							>Torqu&iacute;metros de Reloj</a
						>
					</li>
					<li>
						<a href="torquimetros-de-reloj.html"
							>Torquimetro digital Inalámbrico</a
						>
					</li>
					<li>
						<a href="torquimetros-de-reloj.html"
							>Torquimetro Destornillador</a
						>
					</li>
				</ul>
			<p>Encastre de diferentes medidas...</p>
			<a href="torquimetros-de-golpe.html" class="button_all"
				>Ver Más</a
			>
		</section>
	</div>
</div>

	
	`;
});
btn_multiplicadorCard.addEventListener('click', () => {
	li_todos.classList.remove('active');
	li_torqui.classList.remove('active');
	li_multi.classList.add('active');
	li_llave.classList.remove('active');

	contenedorDesplegable.innerHTML = `
	<div class="portfolio_item__card">
		<h3>MULPLICADOR DE TORQUE</h3>
		<div class="portfolio_item__card--content">
			<img
				class=""
				src="images/multiplicador torque.jpg"
				alt="Torquimetros"
			/>
			<section class="portfolio_item__card--content__text">
				<p>Encastre en variedad de medidas...</p>
				<ul>
					<li>Torque de salida 750 Lbs-pie</li>
					<li>Torque de salida 1000 Lbs-pie</li>
					<li>Torque de salida 1200 Lbs-pie</li>
					<li>Torque de salida 2000 Lbs-pie</li>
					<li>Torque de salida 2200 Lbs-pie</li>
					<li>Torque de salida 3200 Lbs-pie</li>
					<li>Torque de salida 5000 Lbs-pie</li>
					<li>Torque de salida 8000 Lbs-pie</li>
				</ul>
				<a href="multiplicador-de-torque.html" class="button_all"
					>Ver Más</a
				>
			</section>
		</div>
	</div>
		`;
});
btn_llaveCard.addEventListener('click', () => {
	li_todos.classList.remove('active');
	li_torqui.classList.remove('active');
	li_multi.classList.remove('active');
	li_llave.classList.add('active');

	contenedorDesplegable.innerHTML = `
	<div class="portfolio_item__card">
		<h3>LLAVES DE CONTROL DE TORQUE</h3>
		<div class="portfolio_item__card--content">
			<img class="" src="images/llaves.jpg" alt="Torquimetros" />
			<section class="portfolio_item__card--content__text">
				<p>
					<a href="llave-de-control-de-torque-electrica.html"
						>Llave de controld de torque <b>el&eacute;ctrica</b></a
					><br />
					<a href="llave-de-control-de-torque-a-bateria.html"
						>Llave de controld de torque a <b>bater&iacute;a</b></a
					><br />
					<a href="llave-de-control-de-torque-neumatica.html"
						>Llave de controld de torque <b>neum&aacute;tica</b></a
					><br />
					<a href="llave-de-control-de-torque-hidraulica.html"
						>Llave de controld de torque <b>hidr&aacute;ulica</b></a
					><br />
				</p>
				<a href="llave-de-control.html" class="button_all">Ver Más</a>
			</section>
		</div>
	</div>	
		
		`;
});
