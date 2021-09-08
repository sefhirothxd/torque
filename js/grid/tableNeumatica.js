columnDefs = [
	{ field: 'Art N°', width: 120 },
	{ field: 'Modelo', width: 90 },
	{ field: 'Encastre', width: 90 },
	{ field: 'Rango de Torque', width: 250 },
	{ field: 'Velocidad', width: 100 },
	{ field: 'Peso', width: 140 },
];

// specify the data
rowData = [

	{
		'Art N°': '615 180 0140',
		Modelo: 'CP6641',
		Encastre: '1"',
		Velocidad: '10 RPM',
		'Rango de Torque': '737-3024 Lbs.pie / 1000-4100 N.m',
		'Peso': '11.4 Kg',
	},
	{
		'Art N°': '615 180 0130',
		Modelo: 'CP6626',
		Encastre: '1"',
		Velocidad: '10 RPM',
		'Rango de Torque': '561-1920 Lbs.pie / 700-2600 N.m',
		'Peso': '5.7 Kg',
	},
	{
		'Art N°': '615 180 0120',
		Modelo: 'CP6613',
		Encastre: '3/4"',
		Velocidad: '20 RPM',
		'Rango de Torque': '236-960 Lbs.pie / 320-1300 N.m',
		'Peso': '4.4 Kg',
	}
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
