var URLactual = window.location.pathname;

// specify the columns
let columnDefs = [
	{ field: 'Modelo', width: 90 },
	{ field: 'Encastre', width: 90 },
	// { field: 'Tipo', width: 120 },
	{ field: 'Capacidad', width: 250 },
	{ field: 'Longitud', width: 95 },
	{ field: 'Peso', width: 90 },
];

// specify the data
let rowData = [
	{
		Encastre: '1/8"',
		// Tipo: 'RATCHET',
		Modelo: '3478',
		Capacidad: '30-200 LBS.pulg/3.9-22 N.m',
		Longitud: '10.15',
		Peso: '0.85 LBS',
	},
	{
		Encastre: '3/8"',
		// Tipo: 'RATCHET',
		Modelo: '3447',
		Capacidad: '5-75 LBS.pie/10.2-98.3 Nm',
		Longitud: '15.15',
		Peso: '2.5 LBS',
	},
	{
		Encastre: '3/8"',
		// Tipo: 'RATCHET',
		Modelo: '3477',
		Capacidad: '10-100 LBS.pie/16.9-132.2 Nm',
		Longitud: '15.15',
		Peso: '2.5 LBS',
	},
	{
		Encastre: '1/4"',
		// Tipo: 'RATCHET',
		Modelo: '2477',
		Capacidad: '20-150 LBS.pulg/2.8-16.4 Nm',
		Longitud: '10.15',
		Peso: '0.9 Lbs',
	},
	{
		Encastre: '1"',
		// Tipo: 'Cabeza Fija',
		Modelo: '8448',
		Capacidad: '200-1000 LBS.pie/305-1320 Nm',
		Longitud: '69',
		Peso: '24.5 LBS',
	},
];
if (URLactual === '/multiplicador-de-torque.html') {
	// specify the columns
	columnDefs = [
		{ field: 'Modelo', width: 85 },
		{ field: 'Encastre de entrada', width: 160 },
		// { field: 'Encastre de salida', width: 150 },
		{ field: 'Torque de entrada', width: 150 },
		{ field: 'Torque de salida', width: 140 },
		{ field: 'Proporción', width: 110 },
		{ field: 'Peso', width: 120 },
	];

	// specify the data
	rowData = [
		{
			Modelo: '9S290P',
			'Encastre de entrada': '1/2"',
			'Encastre de salida': '3/4"',
			'Torque de entrada': '227 Lbs-pie',
			'Torque de salida': '750 Lbs-pie',
			Proporción: '3.0:1',
			Peso: '4-7/8 Lbs',
		},
		{
			Modelo: '9S291',
			'Encastre de entrada': '1/2"',
			'Encastre de salida': '3/4"',
			'Torque de entrada': '303 Lbs-pie',
			'Torque de salida': '1000 Lbs-pie',
			Proporción: '3.3:1',
			Peso: '5-7/8 Lbs',
		},
		{
			Modelo: '9S292',
			'Encastre de entrada': '3/4"',
			'Encastre de salida': '1"',
			'Torque de entrada': '571 Lbs-pie',
			'Torque de salida': '2000 Lbs-pie',
			Proporción: '3.75:1',
			Peso: '13-7/8 Lbs',
		},
		{
			Modelo: '9S391',
			'Encastre de entrada': '1/2"',
			'Encastre de salida': '3/4"',
			'Torque de entrada': '200 Lbs-pie',
			'Torque de salida': '1200 Lbs-pie',
			Proporción: '6:1',
			Peso: '13 Lbs',
		},
		{
			Modelo: '9S392B',
			'Encastre de entrada': '1/2"',
			'Encastre de salida': '1"',
			'Torque de entrada': '162 Lbs-pie',
			'Torque de salida': '2200 Lbs-pie',
			Proporción: '13.6:1',
			Peso: '20-5/8 Lbs',
		},
		{
			Modelo: '9S393A',
			'Encastre de entrada': '1/2"',
			'Encastre de salida': '1"',
			'Torque de entrada': '173 Lbs-pie',
			'Torque de salida': '3200 Lbs-pie',
			Proporción: '18.5:1',
			Peso: '22-3/8 Lbs',
		},
		{
			Modelo: '9S394',
			'Encastre de entrada': '1/2"',
			'Encastre de salida': '1-1/2"',
			'Torque de entrada': '189 Lbs-pie',
			'Torque de salida': '5000 Lbs-pie',
			Proporción: '26.5:1',
			Peso: '34.0 Lbs',
		},
		{
			Modelo: '9S395',
			'Encastre de entrada': '1/2"',
			'Encastre de salida': '1-1/2"',
			'Torque de entrada': '154 Lbs-pie',
			'Torque de salida': '8000 Lbs-pie',
			Proporción: '52.0:1',
			Peso: '50.3 Lbs',
		},
		{
			Modelo: '9S2492',
			'Encastre de entrada': '1/2"',
			'Encastre de salida': '1"',
			'Torque de entrada': '162 Lbs-pie',
			'Torque de salida': '2200 Lbs-pie',
			Proporción: '13.6:1',
			Peso: '17.2 Lbs',
		},
	];
}

if (URLactual === '/llave-de-control-de-torque-electrica.html') {
	// alert('aqui estoy');
	// specify the columns
	columnDefs = [
		{ field: 'Art N°', width: 120 },
		{ field: 'Modelo', width: 100 },
		{ field: 'Encastre', width: 90 },
		{ field: 'Rango de Torque(Nm)' },
		{ field: 'Peso(Kg)', width: 100 },
	];

	// specify the data
	rowData = [
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '1"',
			Modelo: 'TESM-105',
			'Art N°': '50 105 113',
			'Rango de Torque(Nm)': '280-1200',
			'Peso(Kg)': '10',
		},
		{
			Encastre: '1.1/2"',
			Modelo: 'TESM-355',
			'Art N°': '50 355 133',
			'Rango de Torque(Nm)': '360-3500',
			'Peso(Kg)': '14.5',
		},
		{
			Encastre: '1.1/2"',
			Modelo: 'TESM-505',
			'Art N°': '50 505 143',
			'Rango de Torque(Nm)': '700-5000',
			'Peso(Kg)': '16.7',
		},
		{
			Encastre: '3/4" ',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4" ',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4" ',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4" ',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
		{
			Encastre: '3/4 ó 1"',
			Modelo: 'TESM-84',
			'Art N°': '50 084 103',
			'Rango de Torque(Nm)': '150-850',
			'Peso(Kg)': '9.8/10',
		},
	];
}

// let the grid know which columns and what data to use
const gridOptions = {
	columnDefs: columnDefs,
	rowData: rowData,
};

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);
