columnDefs = [
	{ field: 'Modelo', width: 110 },
	{ field: 'Encastre', width: 110 },
	{ field: 'Rango de Torque', width: 280 },
	{ field: 'Velocidad', width: 120 },
	{ field: 'Peso', width: 160 },
];

// specify the data
rowData = [
	{
		Encastre: '1" ó 1-1/2"',
		Modelo: 'CP8681',
		Velocidad: '1.2 RPM',
		'Rango de Torque': ' 1917-5975 Lbs.pie / 2600-8100 N.m',
		'Peso': '16.5 Kg',
	},
	{
		Encastre: '1"',
		Modelo: 'CP8641',
		Velocidad: '3 RPM',
		'Rango de Torque': '737-3024 Lbs.pie / 1000-4100 N.m',
		'Peso': '11.4 Kg ',
	},
	{
		Encastre: '1"',
		Modelo: 'CP8626',
		Velocidad: '5 RPM',
		'Rango de Torque': '516-1920 Lbs.pie / 700-2600 N.m',
		'Peso': '7.2 Kg',
	},
	{
		Encastre: '3/4"',
		Modelo: 'CP8613',
		Velocidad: '10 RPM',
		'Rango de Torque': '221-960 Lbs.pie / 300-1300 N.m',
		'Peso': '5.3 Kg',
	},

	{
		Encastre: '1-1/2"',
		Modelo: 'TQWS-400',
		Velocidad: '1.5 RPM',
		'Rango de Torque': '110-2950 Lbs.pie / 150-4000 N.m',
		'Peso': '12 Kg',
	},
	{
		Encastre: '1"',
		Modelo: 'TQWS-S300',
		Velocidad: '1.6 RPM',
		'Rango de Torque': '73-2215 Lbs.pie / 100-3000 N.m',
		'Peso': '10.1 Kg',
	},
	{
		Encastre: '1"',
		Modelo: 'TQWS-220',
		Velocidad: '2.5 RPM',
		'Rango de Torque': '73-1625 Lbs.pie / 100-2200 N.m',
		'Peso': '10.1 Kg',
	},
	{
		Encastre: '1"',
		Modelo: 'TQWS-130',
		Velocidad: '4.25 RPM',
		'Rango de Torque': '73-960 Lbs.pie / 100-1300 N.m',
		'Peso': '9.3 Kg',
	},
	{
		Encastre: '3/4" ó 1"',
		Modelo: 'TQWS-095',
		Velocidad: '7.7 RPM',
		'Rango de Torque': '73-700 Lbs.pie / 100-950 N.m',
		'Peso': '8.8 Kg',
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
