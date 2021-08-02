const inputSearch = document.getElementById('autoComplete');
const listSearch = document.getElementById('list-search');

//creamos la funcion que se encargara de buscar.
const searchState = async (searchText) => {
	const res = await fetch('./js/data/herramientas.json');
	const states = await res.json();

	//get match to current text input
	let matches = states.filter((state) => {
		const regex = new RegExp(`^${searchText}`, 'gi');
		return state.nombre.match(regex) || state.modelo.match(regex);
	});

	console.log(matches);
    if (searchText.length===0) {
        matches = [];
        listSearch.innerHTML = '';
        
    }
    
    outputHtml(matches);

};

//mostrar resultado en el html
const outputHtml = matches =>{
    if (matches.length >0){

        const html = matches.map(match => `
            <div class="container-list-item" id="item-tool">
                <h4>${match.nombre}</h4>
                <small>${match.modelo}</small>
            </div>
        `).join('');

        listSearch.innerHTML = html;
        listSearch.style.display = 'block';

    }
    

}

listSearch.addEventListener('click', (e)=>{
    console.log(e.target.innerHTML,'aqui');
    if (e.target && e.target.nodeName == 'H4'){
        inputSearch.value = e.target.innerHTML;
    }
    listSearch.innerHTML = '';
    listSearch.style.display = 'none';



});


inputSearch.addEventListener('input', () => searchState(inputSearch.value));
