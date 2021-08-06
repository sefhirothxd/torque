const inputSearch = document.getElementById('autoComplete');
const listSearch = document.getElementById('list-search');
// let btnBuscar = document.getElementById('btn-buscar');

window.addEventListener('click', () => {
	listSearch.innerHTML = '';
});

//creamos la funcion que se encargara de buscar.
const searchState = async (searchText) => {
	const res = await fetch('./js/data/herramientas.json');
	const states = await res.json();

	//get match to current text input
	let matches = states.filter((state) => {
		const regex = new RegExp(`${searchText}`, 'gi');
		return (
			state.nombre.match(regex) ||
			state.modelo.match(regex) ||
			state.max.match(regex)
		);
	});

	console.log(matches);
	if (searchText.length === 0) {
		matches = [];
		listSearch.innerHTML = '';
	}

	if (searchText.substr(0, 1) === 'm') {
		console.log(searchText.substr(0, 1), 'aqui toy');
		outputHtmlModelo(matches);
	} else if (searchText.substr(0, 1) === 't') {
		console.log(searchText.substr(0, 1), 'aqui toy');
		outputHtml(matches);
	} else if (
		searchText.substr(0, 1).includes('0') ||
		searchText.substr(0, 1).includes('1') ||
		searchText.substr(0, 1).includes('2') ||
		searchText.substr(0, 1).includes('3') ||
		searchText.substr(0, 1).includes('4') ||
		searchText.substr(0, 1).includes('5') ||
		searchText.substr(0, 1).includes('6') ||
		searchText.substr(0, 1).includes('7') ||
		searchText.substr(0, 1).includes('8') ||
		searchText.substr(0, 1).includes('9')
	) {
		console.log(searchText.substr(0, 1), 'numeros');
		outputHtmlCapacidad(matches);
	}
};

//mostrar resultado en el html
const outputHtml = (matches) => {
	if (matches.length > 0) {
		const html = matches
			.map(
				(match) => `
                <h4 class="container-list-item">${match.nombre}</h4><small >${match.modelo}</small>
        `
			)
			.join('');

		listSearch.innerHTML = html;
		listSearch.style.display = 'block';
	}
};
const outputHtmlCapacidad = (matches) => {
	if (matches.length > 0) {
		const html = matches
			.map(
				(match) => `
                <h4 class="container-list-item">${match.modelo}</h4><small style="padding-left:10px">${match.capacidad}</small>
        `
			)
			.join('');

		listSearch.innerHTML = html;
		listSearch.style.display = 'block';
	}
};
const outputHtmlModelo = (matches) => {
	if (matches.length > 0) {
		const html = matches
			.map(
				(match) => `
                <h4 class="container-list-item">${match.modelo}</h4>
        `
			)
			.join('');

		listSearch.innerHTML = html;
		listSearch.style.display = 'block';
	}
};

listSearch.addEventListener('click', (e) => {
	console.log(e.target.innerHTML, 'aqui');
	if (e.target && e.target.nodeName == 'H4') {
		inputSearch.value = e.target.innerHTML;
		btnBuscar.focus();
	}
	listSearch.innerHTML = '';
	// listSearch.innerHTML = `
	// <h4></h4>
	// `;
	listSearch.style.display = 'none';
});

inputSearch.addEventListener('input', () => searchState(inputSearch.value));
