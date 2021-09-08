columnDefs = [
	{ field: 'Art N°', width: 120 },
	{ field: 'Serie', width: 100 },
	{ field: 'Encastre', width: 130 },
	{ field: 'Rango de Torque', width: 280 },
	// { field: 'Velocidad', width: 100 },
	{ field: 'Peso', width: 120 },
];

// specify the data
rowData = [

	{
		'Art N°': '71 272 000',
		Serie: 'BL-272',
		Encastre: '1-1/2 ó 2-1/2"',
		// Velocidad: '10 RPM',
		'Rango de Torque': '1106-19920 Lbs.pie / 1500-27000 N.m',
		'Peso': '21 Kg',
	},
	{
		'Art N°': '71 152 000',
		Serie: 'BL-152',
		Encastre: '1-1/2 ó 2-1/2"',
		// Velocidad: '10 RPM',
		'Rango de Torque': '700-11215 Lbs.pie / 950-15200 N.m',
		'Peso': '12 Kg',
	},
	{
		'Art N°': '71 102 000',
		Serie: 'BL-102',
		Encastre: '1-1/2"',
		// Velocidad: '10 RPM',
		'Rango de Torque': '324-7380 Lbs.pie / 440-10000 N.m',
		'Peso': '7.8 Kg',
	},
	{
		'Art N°': '71 082 000',
		Serie: 'BL-82',
		Encastre: '1-1/2"',
		// Velocidad: '10 RPM',
		'Rango de Torque': '258-5900 Lbs.pie / 350-8000 N.m',
		'Peso': '7.8 Kg',
	},
	{
		'Art N°': '71 052 000',
		Serie: 'BL-52',
		Encastre: '1-1/2"',
		// Velocidad: '10 RPM',
		'Rango de Torque': '236-3840 Lbs.pie / 320-5200 N.m',
		'Peso': '5.4 Kg',
	},
	{
		'Art N°': '71 051 000',
		Serie: 'BL-51',
		Encastre: '1 ó 1-1/2"',
		// Velocidad: '20 RPM',
		'Rango de Torque': '236-3620 Lbs.pie / 320-4900 N.m',
		'Peso': '5 Kg',
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
