var URLactual = window.location.pathname;

// specify the columns
let columnDefs = [
	{ field: 'Modelo', width: 90 },
	{ field: 'Encastre', width: 90 },
	// { field: 'Tipo', width: 120 },
	{ field: 'Capacidad', width: 250 },
	{ field: 'Longitud', width: 120 },
	{ field: 'Peso', width: 90 },
];

// specify the data
let rowData = [
	{
		Encastre: '1/4"',
		// Tipo: 'RATCHET',
		Modelo: '2462',
		Capacidad: '1.25-6.25 Lb.pulg / 0-0.7 N.m',
		Longitud: '8"',
		Peso: '0.5 Kg',
	},
	{
		Encastre: '1/4"',
		// Tipo: 'RATCHET',
		Modelo: '2464',
		Capacidad: '5 - 40 Lb.pulg / 0.5-4.6 N.m',
		Longitud: '8"',
		Peso: '0.5 Kg',
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
