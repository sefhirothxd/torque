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
	},
	{
		id: 3,
		nombre: 'Torquimetros  de reloj Encabres 3/8',
		marca: 'WRIGHT',
		modelo: 'Modelo 3447',
		capacidad: '10-100 Lbs-pie/16.9-132.2Nm',
		longitud: '15.15"',
		peso: '2.5 Lbs',
		tipo: 'Ratchet',
		img: 'https://4g-globalinversiones.com/wp-content/uploads/2020/05/13-100-Torqu%C3%ADmetro.jpg',
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
	},
];
let btnBuscar = document.getElementById('btn-buscar');
let inputBuscar = document.getElementById('autoComplete');
let containerList = document.getElementById('list-items');

// let array2 = [];

// const herramientas = async ()=>{
//     const res = await fetch('./js/data/herramientas.json');
// 	const states = await res.json();
//     console.log(states);
//     array2.push(...states)
// }

// window.addEventListener("load", herramientas());

// console.log(array2,'aqui toy');

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
//busqueda por input
inputBuscar.addEventListener('input', (e) => {
	e.preventDefault();
	if (inputBuscar.value.trim() == '') {
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
	} else {
		let newArray = arrayHerramientas.filter((item) => {
			if (
				item.nombre.toLowerCase() == inputBuscar.value.toLowerCase() ||
				item.modelo.toLowerCase() == inputBuscar.value
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
