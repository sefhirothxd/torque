var URLactual = window.location.pathname;

// specify the columns
let columnDefs = [
	{ field: 'Modelo', width: 90 },
	{ field: 'Encastre', width: 90 },
	// { field: 'Tipo', width: 120 },
	{ field: 'Capacidad', width: 120 },
	{ field: 'Longitud', width: 120 },
	{ field: 'Peso', width: 90 },
];

// specify the data
let rowData = [
	{
		Encastre: '1/4"',
		// Tipo: 'RATCHET',
		Modelo: '2463',
		Capacidad: '3-15 Lb-pulg',
		Longitud: '8"',
		Peso: '1 LBS',
	},
	{
		Encastre: '1/4"',
		// Tipo: 'RATCHET',
		Modelo: '2464',
		Capacidad: '5-40 Lb-pulg',
		Longitud: '8"',
		Peso: '1 LBS',
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
