var URLactual = window.location.pathname;

// specify the columns
let columnDefs = [
	{ field: 'Nombre', width: 120 },
	{ field: 'Modelo', width: 90 },
	{ field: 'Tipo', width: 120 },
	{ field: 'Capacidad', width: 250 },
	{ field: 'Longitud', width: 95 },
	{ field: 'Peso', width: 120 },
];

// specify the data
let rowData = [
	{
		Nombre: 'Encastre  3/8"',
		Tipo: 'Ratchet digital',
		Modelo: '2465',
		Capacidad: '10-100 LB-pie/13.5-135.5 Nm',
		Longitud: '23.3"',
		Peso: '5.5 LBS',
	},
	{
		Nombre: 'Encastre  1/2"',
		Tipo: 'Ratchet digital',
		Modelo: '2466',
		Capacidad: '12.5-150 LB-pie/17-203 Nm',
		Longitud: '23.5"',
		Peso: '5.7 LBS',
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
