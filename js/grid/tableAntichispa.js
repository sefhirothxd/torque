columnDefs = [
	{ field: 'Modelo', width: 110 },
	{ field: 'Encastre', width: 110 },
	{ field: 'Rango de Torque', width: 280 },
	{ field: 'Peso Al-Cu', width: 120 },
	{ field: 'Peso Be-Cu', width: 160 },
];

// specify the data
rowData = [
	{
		Encastre: '1"',
		Modelo: '309A-1012',
		'Peso Al-Cu': '8.50 Kg',
		'Rango de Torque': '150-665 Lbs.pie / 200-900 N.m',
		'Peso Be-Cu': '10 kg',
	},
	{
		Encastre: '3/4"',
		Modelo: '309A-1010',
		'Peso Al-Cu': '4.93 Kg',
		'Rango de Torque': '110-495 Lbs.pie / 150-670 N.m',
		'Peso Be-Cu': '5.7 Kg',
	},
	{
		Encastre: '1/2"',
		Modelo: '309A-1008',
		'Peso Al-Cu': '1.33 Kg',
		'Rango de Torque': '45-195 Lbs.pie / 60-260 N.m',
		'Peso Be-Cu': '1.5 Kg',
	},
	{
		Encastre: '1/2"',
		Modelo: '309A-1006',
		'Peso Al-Cu': '1.20 Kg',
		'Rango de Torque': '29-150 Lbs.pie / 40-200 N.m',
		'Peso Be-Cu': '1.4 Kg',
	},
	{
		Encastre: '1/2"',
		Modelo: '309A-1004',
		'Peso Al-Cu': '1.02 Kg',
		'Rango de Torque': '14-75 Lbs.pie / 20-100 N.m',
		'Peso Be-Cu': '1.1 Kg',
	},
	{
		Encastre: '3/8"',
		Modelo: '309A-1002',
		'Peso Al-Cu': '0.92 Kg ',
		'Rango de Torque': '7-37 Lbs.pie / 10-50 N.m',
		'Peso Be-Cu': '0.98 Kg',
	},
	{
		Encastre: '1/4"',
		Modelo: '309A-1000',
		'Peso Al-Cu': '0.80 Kg',
		'Rango de Torque': '3-18 Lbs.pie / 5-25 N.m',
		'Peso Be-Cu': '0.85 kg',
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
