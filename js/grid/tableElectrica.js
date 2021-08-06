columnDefs = [
	{ field: 'Art N°', width: 120 },
	{ field: 'Modelo', width: 100 },
	{ field: 'Encastre', width: 90 },
	{ field: 'Rango de Torque(Nm)' },
	// { field: 'Velocidad', width: 120 },
	{ field: 'Peso(Kg)', width: 160 },
];

// specify the data
rowData = [
	{
		'Art N°': '50 084 103',
		Encastre: '3/4 ó 1"',
		Modelo: 'TESM-84',
		// Velocidad: '10 RPM',
		'Rango de Torque(Nm)': '150-850',
		'Peso(Kg)': '9.8/10 ',
	},
	{
		'Art N°': '50 105 113',
		Encastre: '1"',
		Modelo: 'TESM-105',
		// Velocidad: '5 RPM',
		'Rango de Torque(Nm)': '280-1200',
		'Peso(Kg)': '10',
	},
	{
		'Art N°': '50 335 133',
		Encastre: '1.1/2"',
		Modelo: 'TESM-355',
		// Velocidad: '3 RPM',
		'Rango de Torque(Nm)': '360-3500',
		'Peso(Kg)': '14.5 Kg',
	},
	{
		'Art N°': '50 505 143',
		Encastre: '1.1/2"',
		Modelo: 'TESM-505',
		// Velocidad: '1.2 RPM',
		'Rango de Torque(Nm)': '700-50	00',
		'Peso(Kg)': '16.7',
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
