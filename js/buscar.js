let arrayHerramientas = [
	{
		id: 1,
		nombre: 'Torquimetros  de reloj Encabres 1/4',
		marca: 'WRIGHT',
		modelo: 'Modelo 2470',
		capacidad: '0-30 Lbs-pulg/0-3.5Nm',
		longitud: '10"',
		peso: '1 Lbs',
		tipo: 'Ratchet',
		img: 'https://limatools.com.pe/wp-content/uploads/2021/04/TORQUIMETRO-AGUJA.jpg',
		tag: 'top',
	},
	{
		id: 2,
		nombre: 'Torquimetros  de reloj Encabres 3/8',
		marca: 'WRIGHT',
		modelo: 'Modelo 3447',
		capacidad: '5-75 Lbs-pie/10.2-98.3Nm',
		longitud: '15.15"',
		peso: '2.5 Lbs',
		tipo: 'Ratchet',
		img: 'https://http2.mlstatic.com/D_NQ_NP_712295-MLA42515459166_072020-O.webp',
		tag: 'top',
	},
	{
		id: 3,
		nombre: 'Torquimetros  de reloj Encabres 3/8',
		marca: 'WRIGHT',
		modelo: 'Modelo 3477',
		capacidad: '10-100 Lbs-pie/16.9-132.2Nm',
		longitud: '15.15"',
		peso: '2.5 Lbs',
		tipo: 'Ratchet',
		img: 'https://4g-globalinversiones.com/wp-content/uploads/2020/05/13-100-Torqu%C3%ADmetro.jpg',
		tag: 'top',
	},
	{
		id: 4,
		nombre: 'Torquimetros  de reloj Encabres 3/8',
		marca: 'WRIGHT',
		modelo: 'Modelo 3478',
		capacidad: '30-200 Lbs-pulg/3.9-22Nm',
		longitud: '10.15"',
		peso: '0.85 Lbs',
		tipo: 'Ratchet',
		img: 'https://4g-globalinversiones.com/wp-content/uploads/2020/05/13-100-Torqu%C3%ADmetro.jpg',
		tag: 'top',
	},
	{
		id: 5,
		nombre: 'Torquimetros  de reloj Encabres 1/2',
		marca: 'WRIGHT',
		modelo: 'Modelo 4476',
		capacidad: '700-1600 Lbs-pulg/84.4-175.2Nm',
		longitud: '18"',
		peso: '3 Lbs',
		tipo: 'Ratchet',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDqx_PUz6G0yjalZqVMfH9hFjP_nFchfWvYAHMJsARU7krjOB_pLmZVtCFv5rVDYCiBI&usqp=CAU',
		tag: 'top',
	},
	{
		id: 6,
		nombre: 'Torquimetros  de reloj Encabres 1/2',
		marca: 'WRIGHT',
		modelo: 'Modelo 4477',
		capacidad: '20-150 Lbs-pie/34-197Nm',
		longitud: '19"',
		peso: '3.15 Lbs',
		tipo: 'Ratchet',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDqx_PUz6G0yjalZqVMfH9hFjP_nFchfWvYAHMJsARU7krjOB_pLmZVtCFv5rVDYCiBI&usqp=CAU',
		tag: 'top',
	},
	{
		id: 7,
		nombre: 'Torquimetros  de reloj Encabres 1/2',
		marca: 'WRIGHT',
		modelo: 'Modelo 4478',
		capacidad: '50-250 Lbs-pie/47-332.2Nm',
		longitud: '24.4"',
		peso: '3.15 Lbs',
		tipo: 'Ratchet',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDqx_PUz6G0yjalZqVMfH9hFjP_nFchfWvYAHMJsARU7krjOB_pLmZVtCFv5rVDYCiBI&usqp=CAU',
		tag: 'top',
	},
	{
		id: 8,
		nombre: 'Torquimetros  de reloj Encabres 3/4',
		marca: 'WRIGHT',
		modelo: 'Modelo 6448',
		capacidad: '100-600 Lbs-pie/169-779Nm',
		longitud: '42"',
		peso: '8.95 Lbs',
		tipo: 'Ratchet',
		img: 'https://http2.mlstatic.com/D_NQ_NP_617510-MPE32284543475_092019-O.webp',
		tag: 'top',
	},
	{
		id: 9,
		nombre: 'Torquimetros  de reloj Encabres 1',
		marca: 'WRIGHT',
		modelo: 'Modelo 8448',
		capacidad: '200-1000 Lbs-pie/305-1320Nm',
		longitud: '69"',
		peso: '24.5 Lbs',
		tipo: 'Ratchet',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZzf48jF8dotVUqArnBr2HlpYbsMdw8Byq3Nf-4duM8Jdns4BuumI3808luDtZNJKdOk&usqp=CAU',
		tag: 'normal',
	},
	{
		id: 10,
		nombre: 'Torquimetros  de reloj Encabres 1',
		marca: 'WRIGHT',
		modelo: 'Modelo 4476',
		capacidad: '300-2000 Lbs-pie/480-2700Nm',
		longitud: '108-1/2"',
		peso: '48.75 Lbs',
		tipo: 'Ratchet',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZzf48jF8dotVUqArnBr2HlpYbsMdw8Byq3Nf-4duM8Jdns4BuumI3808luDtZNJKdOk&usqp=CAU',
		tag: 'normal',
	},
];
let btnBuscar = document.getElementById('btn-buscar');
let btnTodo = document.getElementById('btn-todos');
let btnTop = document.getElementById('btn-top');
let inputBuscar = document.getElementById('autoComplete');
let containerList = document.getElementById('list-items');
let containerMain = document.getElementById('list-container-items');


// let array2 = [];

// const herramientas = async ()=>{
//     const res = await fetch('./js/data/herramientas.json');
// 	const states = await res.json();
//     console.log(states);
//     array2.push(...states)
// }

// window.addEventListener("load", herramientas());

// console.log(array2,'aqui toy');

let arrayTop = arrayHerramientas.filter((item, index) => {
	if (item.tag == 'top') {
		console.log(item);
		return item;
	}
});

console.log(arrayTop);

arrayTop.forEach((item) => {
	containerList.innerHTML += `
    <div class="list-items__container-item" id="">
        <img class="img-herramientas" src="${item.img}" alt="" srcset="" />
		<h3>${item.nombre}</h3>
		<p>${item.modelo}</p>
		<div class="list-items__content" id="list-items__content">
			<p><b>Tipo:</b>  ${item.tipo}</p>
			<p><b>Capacidad:</b>  ${item.capacidad}</p>
			<p><b>Longitud:</b> ${item.longitud}</p>
			<p><b>Peso:</b> ${item.peso}</p>
		</div>
    </div>
    `;
});
//busqueda por input
inputBuscar.addEventListener('input', (e) => {
	e.preventDefault();
	if (inputBuscar.value.trim() == '') {
		containerList.innerHTML = '';
		arrayTop.forEach((item) => {
			containerList.innerHTML += `
			<div class="list-items__container-item" id="">
			<img class="img-herramientas" src="${item.img}" alt="" srcset="" />
			<h3>${item.nombre}</h3>
			<p>${item.modelo}</p>
			<div class="list-items__content" id="list-items__content">
				<p><b>Tipo:</b>  ${item.tipo}</p>
				<p><b>Capacidad:</b>  ${item.capacidad}</p>
				<p><b>Longitud:</b> ${item.longitud}</p>
				<p><b>Peso:</b> ${item.peso}</p>
			</div>
		</div>
            `;
		});
	} else {
		//     let newArray = arrayHerramientas.filter((item)=>{
		//         if (item.nombre == inputBuscar.value || item.modelo == inputBuscar.value) {
		//             return item;
		//         }
		//    })
		let newArray = arrayHerramientas.filter((state) => {
			const regex = new RegExp(`${inputBuscar.value}`, 'gi');
			return state.nombre.match(regex) || state.modelo.match(regex);
		});

		containerList.innerHTML = '';
		newArray.forEach((item) => {
			containerList.innerHTML += `
			<div class="list-items__container-item" id="">
			<img class="img-herramientas" src="${item.img}" alt="" srcset="" />
			<h3>${item.nombre}</h3>
			<p>${item.modelo}</p>
			<div class="list-items__content" id="list-items__content">
				<p><b>Tipo:</b>  ${item.tipo}</p>
				<p><b>Capacidad:</b>  ${item.capacidad}</p>
				<p><b>Longitud:</b> ${item.longitud}</p>
				<p><b>Peso:</b> ${item.peso}</p>
			</div>
		</div>
           `;
		});
	}

	console.log(inputBuscar.value);
});

// boton buscar
btnBuscar.addEventListener('click', (e) => {
	e.preventDefault();
	if (inputBuscar.value.trim() == '') {
		containerList.innerHTML = '';
		arrayTop.forEach((item) => {
			containerList.innerHTML += `
            <div class="list-items__container-item" id="">
        <img class="img-herramientas" src="${item.img}" alt="" srcset="" />
		<h3>${item.nombre}</h3>
		<p>${item.modelo}</p>
		<div class="list-items__content" id="list-items__content">
			<p><b>Tipo:</b>  ${item.tipo}</p>
			<p><b>Capacidad:</b>  ${item.capacidad}</p>
			<p><b>Longitud:</b> ${item.longitud}</p>
			<p><b>Peso:</b> ${item.peso}</p>
		</div>
    </div>
            `;
		});
	} else {
		let newArray = arrayHerramientas.filter((item) => {
			if (
				item.nombre.toLowerCase() == inputBuscar.value.toLowerCase() ||
				item.modelo.toLowerCase() == inputBuscar.value.toLowerCase()
			) {
				return item;
			}
		});

		containerList.innerHTML = '';
		newArray.forEach((item) => {
			containerList.innerHTML += `
            <div class="list-items__container-item" id="">
        <img class="img-herramientas" src="${item.img}" alt="" srcset="" />
		<h3>${item.nombre}</h3>
		<p>${item.modelo}</p>
		<div class="list-items__content" id="list-items__content">
			<p><b>Tipo:</b>  ${item.tipo}</p>
			<p><b>Capacidad:</b>  ${item.capacidad}</p>
			<p><b>Longitud:</b> ${item.longitud}</p>
			<p><b>Peso:</b> ${item.peso}</p>
		</div>
    </div>
           `;
		});
	}

	console.log(inputBuscar.value);
});

/*filtro boton*/

btnTodo.addEventListener('click', () => {
	containerList.innerHTML = '';
	arrayHerramientas.forEach((item) => {
		containerList.innerHTML += `
		<div class="list-items__container-item" id="">
			<img class="img-herramientas" src="${item.img}" alt="" srcset="" />
			<h3>${item.nombre}</h3>
			<p>${item.modelo}</p>
			<div class="list-items__content" id="list-items__content">
				<p><b>Tipo:</b>  ${item.tipo}</p>
				<p><b>Capacidad:</b>  ${item.capacidad}</p>
				<p><b>Longitud:</b> ${item.longitud}</p>
				<p><b>Peso:</b> ${item.peso}</p>
			</div>
		</div>
		`;
	});
});

btnTop.addEventListener('click', () => {
	containerList.innerHTML = '';
	arrayTop.forEach((item) => {
		containerList.innerHTML += `
		<div class="list-items__container-item" id="">
			<img class="img-herramientas" src="${item.img}" alt="" srcset="" />
			<h3>${item.nombre}</h3>
			<p>${item.modelo}</p>
			<div class="list-items__content" id="list-items__content">
				<p><b>Tipo:</b>  ${item.tipo}</p>
				<p><b>Capacidad:</b>  ${item.capacidad}</p>
				<p><b>Longitud:</b> ${item.longitud}</p>
				<p><b>Peso:</b> ${item.peso}</p>
			</div>
		</div>
		`;
	});
});
