// specify the columns
const columnDefs = [
	{ field: 'Nombre' },
	{ field: 'Modelo' },
	{ field: 'Tipo' },
	{ field: 'Capacidad' },
	{ field: 'Longitud' },
	{ field: 'Peso' },
];

// specify the data
const rowData = [
	{
		Nombre: 'Toquimetro de golpe',
		Tipo: 'RATCHET',
		Modelo: '70.8449',
		Capacidad: '20-150 LBS.PULG/2.8-16.4 N.m',
		Longitud: '10.15',
		Peso: '0.90 LBS',
	},
	{
		Nombre: 'Toquimetro de golpe',
		Tipo: 'RATCHET',
		Modelo: '70.8449',
		Capacidad: '20-150 LBS.PULG/2.8-16.4 N.m',
		Longitud: '10.15',
		Peso: '0.90 LBS',
	},
	{
		Nombre: 'Toquimetro de golpe',
		Tipo: 'RATCHET',
		Modelo: '70.8449',
		Capacidad: '20-150 LBS.PULG/2.8-16.4 N.m',
		Longitud: '10.15',
		Peso: '0.90 LBS',
	},
	{
		Nombre: 'Toquimetro de golpe',
		Tipo: 'RATCHET',
		Modelo: '70.8449',
		Capacidad: '20-150 LBS.PULG/2.8-16.4 N.m',
		Longitud: '10.15',
		Peso: '0.90 LBS',
	},
	{
		Nombre: 'Toquimetro de golpe',
		Tipo: 'RATCHET',
		Modelo: '70.8449',
		Capacidad: '20-150 LBS.PULG/2.8-16.4 N.m',
		Longitud: '10.15',
		Peso: '0.90 LBS',
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
