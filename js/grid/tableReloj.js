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
		Encastre: '1/4"',
		// Tipo: 'RATCHET',
		Modelo: '2470',
		Capacidad: '0-30 LBS-pulg/0-3.5 Nm',
		Longitud: '10"',
		Peso: '1 LBS',
	},
	{
		Encastre: '1/2"',
		// Tipo: 'RATCHET',
		Modelo: '4471',
		Capacidad: '0-250 LBS-pulg/0-350 Nm',
		Longitud: '21-1/2"',
		Peso: '2-3/4 LBS',
	},
	{
		Encastre: '3/8"',
		// Tipo: 'RATCHET',
		Modelo: '3470',
		Capacidad: '0-150 LBS-pulg/0-18 Nm',
		Longitud: '10"',
		Peso: '1 LBS',
	},
	{
		Encastre: '3/8"',
		// Tipo: 'RATCHET',
		Modelo: '3471',
		Capacidad: '0-250 LBS-pulg/0-30 Nm',
		Longitud: '10"',
		Peso: '1 LBS',
	},
	{
		Encastre: '3/8"',
		// Tipo: 'RATCHET',
		Modelo: '3473',
		Capacidad: '0-50 LBS-pie/0-70 Nm',
		Longitud: '14-7/8"',
		Peso: '1-3/4 LBS',
	},
	{
		Encastre: '1/2"',
		// Tipo: 'RATCHET',
		Modelo: '4470',
		Capacidad: '0-175 LBS-pie/0-240 Nm',
		Longitud: '21-1/2"',
		Peso: '2-3/4 LBS',
	},
	{
		Encastre: '1/2"',
		// Tipo: 'RATCHET',
		Modelo: '4471',
		Capacidad: '0-250 LBS-pulg/0-350 Nm',
		Longitud: '21-1/2"',
		Peso: '2-3/4 LBS',
	},
	{
		Encastre: '3/4"',
		// Tipo: 'RATCHET',
		Modelo: '6470',
		Capacidad: '0-600 LBS-pie/0-800 Nm',
		Longitud: '46-1/2"',
		Peso: '9-1/4 LBS',
	},
	{
		Encastre: '3/4"',
		// Tipo: 'RATCHET',
		Modelo: '6471',
		Capacidad: '0-350 LBS-pie/0-480 Nm',
		Longitud: '27-7/8"',
		Peso: '5-3/4 LBS',
	},
	{
		Encastre: '3/4"',
		// Tipo: 'RATCHET',
		Modelo: '6472',
		Capacidad: '0-600 LBS-pulg/0-800 Nm',
		Longitud: '46-1/2"',
		Peso: '9-1/4 LBS',
	},
	{
		Encastre: '1"',
		// Tipo: 'RATCHET',
		Modelo: '8470',
		Capacidad: '0-1000 LBS-pulg/0-1400 Nm',
		Longitud: '74"',
		Peso: '18-1/2 LBS',
	},
	{
		Encastre: '1"',
		// Tipo: 'RATCHET',
		Modelo: '8471',
		Capacidad: '0-1000 LBS-pulg/0-1400 Nm',
		Longitud: '74"',
		Peso: '18-1/2 LBS',
	},
	{
		Encastre: '1"',
		// Tipo: 'RATCHET',
		Modelo: '8472',
		Capacidad: '0-2000 LBS-pulg/0-1400 Nm',
		Longitud: '122"',
		Peso: '44-1/2 LBS',
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
