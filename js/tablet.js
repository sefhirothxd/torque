// specify the columns
const columnDefs = [
	{ field: 'Nombre' },
	{ field: 'Modelo', width: 90 },
	{ field: 'Tipo', width: 120 },
	{ field: 'Capacidad', width: 250 },
	{ field: 'Longitud', width: 95 },
	{ field: 'Peso', width: 90 },
];

// specify the data
const rowData = [
	{
		Nombre: 'Toquimetro de golpe 1/8',
		Tipo: 'RATCHET',
		Modelo: '3478',
		Capacidad: '30-200 LBS.pulg/3.9-22 N.m',
		Longitud: '10.15',
		Peso: '0.85 LBS',
	},
	{
		Nombre: 'Toquimetro de golpe 3/8',
		Tipo: 'RATCHET',
		Modelo: '3447',
		Capacidad: '5-75 LBS.pie/10.2-98.3 Nm',
		Longitud: '15.15',
		Peso: '2.5 LBS',
	},
	{
		Nombre: 'Toquimetro de golpe 3/8',
		Tipo: 'RATCHET',
		Modelo: '3477',
		Capacidad: '10-100 LBS.pie/16.9-132.2 Nm',
		Longitud: '15.15',
		Peso: '2.5 LBS',
	},
	{
		Nombre: 'Toquimetro de golpe 1/4',
		Tipo: 'RATCHET',
		Modelo: '2477',
		Capacidad: '20-150 LBS.pulg/2.8-16.4 Nm',
		Longitud: '10.15',
		Peso: '0.9 Lbs',
	},
	{
		Nombre: 'Toquimetro de golpe 1',
		Tipo: 'Cabeza Fija',
		Modelo: '8448',
		Capacidad: '200-1000 LBS.pie/305-1320 Nm',
		Longitud: '69',
		Peso: '24.5 LBS',
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
