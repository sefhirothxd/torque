columnDefs = [
	{ field: 'Art N°', width: 120 },
	{ field: 'Modelo', width: 100 },
	{ field: 'Encastre', width: 100 },
	{ field: 'Rango de Torque(Nm)' },
	{ field: 'Velocidad', width: 100 },
	{ field: 'Peso(Kg)', width: 160 },
];

// specify the data
rowData = [
	{
		'Art N°': '615 180 0120',
		Modelo: 'CP6613',
		Encastre: '3/4"',
		Velocidad: '20 RPM',
		'Rango de Torque(Nm)': '320-1300',
		'Peso(Kg)': '4.4 Kg / 9.7 Lbs',
	},
	{
		'Art N°': '615 180 0130',
		Modelo: 'CP6626',
		Encastre: '1"',
		Velocidad: '10 RPM',
		'Rango de Torque(Nm)': '700-2600',
		'Peso(Kg)': '5.7 Kg / 12.5 Lbs',
	},
	{
		'Art N°': '615 180 0140',
		Modelo: 'CP6641',
		Encastre: '1"',
		Velocidad: '10 RPM',
		'Rango de Torque(Nm)': '1000-4100',
		'Peso(Kg)': '11.4 Kg / 25.13 Lbs',
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
