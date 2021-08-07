columnDefs = [
	{ field: 'Art N°', width: 120 },
	{ field: 'Serie', width: 100 },
	{ field: 'Encastre', width: 130 },
	{ field: 'Rango de Torque(Nm)' },
	// { field: 'Velocidad', width: 100 },
	{ field: 'Peso(Kg)', width: 160 },
];

// specify the data
rowData = [
	{
		'Art N°': '71 051 000',
		Serie: 'BL-51',
		Encastre: '1 ó 1.1/2"',
		// Velocidad: '20 RPM',
		'Rango de Torque(Nm)': '320-4900',
		'Peso(Kg)': '4.9',
	},
	{
		'Art N°': '71 052 000',
		Serie: 'BL-52',
		Encastre: '1.1/2"',
		// Velocidad: '10 RPM',
		'Rango de Torque(Nm)': '320-5200',
		'Peso(Kg)': '5.4',
	},
	{
		'Art N°': '71 082 000',
		Serie: 'BL-82',
		Encastre: '1.1/2"',
		// Velocidad: '10 RPM',
		'Rango de Torque(Nm)': '1000-4100',
		'Peso(Kg)': '7.8',
	},
	{
		'Art N°': '71 102 000',
		Serie: 'BL-102',
		Encastre: '1.1/2"',
		// Velocidad: '10 RPM',
		'Rango de Torque(Nm)': '440-1000',
		'Peso(Kg)': '7.8',
	},
	{
		'Art N°': '71 152 000',
		Serie: 'BL-152',
		Encastre: '1.1/2 ó 2.1/2"',
		// Velocidad: '10 RPM',
		'Rango de Torque(Nm)': '950-15200',
		'Peso(Kg)': '12',
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
