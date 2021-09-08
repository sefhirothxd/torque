var URLactual = window.location.pathname;

// specify the columns
let columnDefs = [
	{ field: 'Encastre', width: 100 },
	{ field: 'Modelo', width: 90 },
	{ field: 'Tipo', width: 140 },
	{ field: 'Capacidad', width: 250 },
	{ field: 'Longitud', width: 95 },
	{ field: 'Peso', width: 120 },
];

// specify the data
let rowData = [
	{
		Encastre: '3/8"',
		Tipo: 'Ratchet digital',
		Modelo: '2465',
		Capacidad: '10-100 Lbs.pie / 13.5-135.5 N.m',
		Longitud: '23.3"',
		Peso: '2.5 Kg',
	},
	{
		Encastre: '1/2"',
		Tipo: 'Ratchet digital',
		Modelo: '2466',
		Capacidad: '12.5-150 Lbs.pie / 17-203 N.m',
		Longitud: '23.5"',
		Peso: '2.6 Kg',
	},
];

// let the grid know which columns and what data to use
const gridOptions = {
	columnDefs: columnDefs,
	rowData: rowData,
};

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);
