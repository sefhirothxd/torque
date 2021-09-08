var URLactual = window.location.pathname;

// specify the columns
let columnDefs = [
	{ field: 'Modelo', width: 90 },
	{ field: 'Encastre', width: 90 },
	// { field: 'Tipo', width: 120 },
	{ field: 'Capacidad', width: 250 },
	{ field: 'Longitud', width: 95 },
	{ field: 'Peso', width: 120 },
];

// specify the data
let rowData = [
	{
		Encastre: '1"',
		// Tipo: 'RATCHET',
		Modelo: '8470',
		Capacidad: '0-1000 Lbs.pie / 0-1400 N.m',
		Longitud: '74"',
		Peso: '8.4 Kg',
	},
	{
		Encastre: '3/4"',
		// Tipo: 'RATCHET',
		Modelo: '6470',
		Capacidad: '0-600 Lbs.pie / 0-800 N.m',
		Longitud: '46.5"',
		Peso: '4.1 Kg',
	},
	{
		Encastre: '3/4"',
		// Tipo: 'RATCHET',
		Modelo: '6471',
		Capacidad: '0-350 Lbs.pie / 0-480 N.m',
		Longitud: '27.9"',
		Peso: '2.6 Kg',
	},
	{
		Encastre: '1/2"',
		// Tipo: 'RATCHET',
		Modelo: '4471',
		Capacidad: '0-250 Lbs.pie / 0-350 N.m',
		Longitud: '21.5"',
		Peso: '1.3 Kg',
	},
	{
		Encastre: '1/2"',
		// Tipo: 'RATCHET',
		Modelo: '4470',
		Capacidad: '0-175 Lbs.pie / 0-240 N.m',
		Longitud: '21.5"',
		Peso: '2.3 Kg',
	},
	{
		Encastre: '3/8"',
		// Tipo: 'RATCHET',
		Modelo: '3473',
		Capacidad: '0-50 Lbs.pie / 0-70 N.m',
		Longitud: '14.9"',
		Peso: '0.7 Kg',
	},
	{
		Encastre: '3/8"',
		// Tipo: 'RATCHET',
		Modelo: '3471',
		Capacidad: '0-250 Lbs.pulg / 0-30 N.m',
		Longitud: '10"',
		Peso: '0.5 Kg',
	},
	{
		Encastre: '3/8"',
		// Tipo: 'RATCHET',
		Modelo: '3470',
		Capacidad: '0-150 Lbs.pulg / 0-18 N.m',
		Longitud: '10"',
		Peso: '0.5 Kg',
	},
	{
		Encastre: '1/4"',
		// Tipo: 'RATCHET',
		Modelo: '2471',
		Capacidad: '0-75 Lbs.pulg / 0-9 N.m',
		Longitud: '10"',
		Peso: '0.5 Kg',
	},
	
	{
		Encastre: '1"',
		// Tipo: 'RATCHET',
		Modelo: '8472',
		Capacidad: '0-2000 Lbs.pie / 0-2800 N.m',
		Longitud: '122"',
		Peso: '20.1 Kg',
	},
	{
		Encastre: '1"',
		// Tipo: 'RATCHET',
		Modelo: '8471',
		Capacidad: '0-1000 Lbs.pie / 0-1400 N.m',
		Longitud: '74"',
		Peso: '8.4 Kg',
	},
	{
		Encastre: '3/4"',
		// Tipo: 'RATCHET',
		Modelo: '6472',
		Capacidad: '0-600 Lbs.pie / 0-800 N.m',
		Longitud: '46.5"',
		Peso: '4.2 Kg',
	},

	
	// {
	// 	Encastre: '1/4"',
	// 	// Tipo: 'RATCHET',
	// 	Modelo: '2470',
	// 	Capacidad: '0-30 Lbs-pulg/0-3.5 N.m',
	// 	Longitud: '10"',
	// 	Peso: '1 Lbs',
	// },
	// {
	// 	Encastre: '1/2"',
	// 	// Tipo: 'RATCHET',
	// 	Modelo: '4471',
	// 	Capacidad: '0-250 LBS-pulg/0-350 Nm',
	// 	Longitud: '21-1/2"',
	// 	Peso: '2-3/4 LBS',
	// },
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
