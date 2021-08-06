columnDefs = [
	{ field: 'Modelo', width: 100 },
	{ field: 'Encastre', width: 90 },
	{ field: 'Rango de Torque(Nm)' },
	{ field: 'Velocidad', width: 120 },
	{ field: 'Peso(Kg)', width: 100 },
];

// specify the data
rowData = [
	{
		Encastre: '3/4"',
		Modelo: 'CP8613',
		Velocidad: '10 RPM',
		'Rango de Torque(Nm)': '300-1300',
		'Peso(Kg)': '5.3 Kg / 11.7 Lbs',
	},
	{
		Encastre: '1"',
		Modelo: 'CP8626',
		Velocidad: '5 RPM',
		'Rango de Torque(Nm)': '700-2600',
		'Peso(Kg)': '7.2 Kg / 15.9 Lbs',
	},
	{
		Encastre: '1"',
		Modelo: 'CP8641',
		Velocidad: '3 RPM',
		'Rango de Torque(Nm)': '1000-4100',
		'Peso(Kg)': '11.4 Kg / 25.13 Lbs',
	},
	{
		Encastre: '1" ó 1.1/2"',
		Modelo: 'CP8681',
		Velocidad: '1.2 RPM',
		'Rango de Torque(Nm)': '2600-8100',
		'Peso(Kg)': '16.5 Kg / 36.4 Lbs',
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
