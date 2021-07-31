let arrayHerramientas = [
	{
		id: 1,
		nombre: 'martillo',
		descripcion: 'martillo para clavar en la pared',
		precio: 25.0,
		marca: 'Martillazo',
		modelo: 'ax-250',
        img: 'https://ripleycl.imgix.net/https%3A%2F%2Fherramientas.cl%2Fimagenes%2Fproductos%2F0206294607_88.png?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=7174e1b10f5a8626d098ab8512792d3c'
	},
	{
		id: 2,
		nombre: 'martillo de diamante',
		descripcion: 'martillo para clavar acero',
		precio: 250.0,
		marca: 'Martillazo',
		modelo: 'vx-250',
        img:'https://m.media-amazon.com/images/I/51fr+X46fYL._AC_SL1453_.jpg'
	},
    {
		id: 3,
		nombre: 'martillo',
		descripcion: 'martillo prueba',
		precio: 250.0,
		marca: 'Martillazo',
		modelo: 'vx-250',
        img:'https://m.media-amazon.com/images/I/51fr+X46fYL._AC_SL1453_.jpg'
	},
    {
		id: 4,
		nombre: 'pala',
		descripcion: 'pala para excavar',
		precio: 100.0,
		marca: 'herramientas aceros',
		modelo: 'pa-250',
        img:'https://arcosa.com.pe/wp-content/uploads/2020/07/PALA-RECTA-68-CM.jpg'
	},
];
let btnBuscar = document.getElementById('btn-buscar');
let inputBuscar = document.getElementById('input-buscar');
let containerList = document.getElementById('list-items');

arrayHerramientas.forEach((item) => {
	containerList.innerHTML += `
    <div class="list-items__container-item" id="">
        <img class="img-herramientas" src="${item.img}" alt="" srcset="" />
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
        <p>S/.${item.precio}</p>
    </div>
    `;
});

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputBuscar.value.trim() == '') {
       containerList.innerHTML = '';
        arrayHerramientas.forEach((item) => {
            containerList.innerHTML += `
            <div class="list-items__container-item" id="">
                <img class="img-herramientas" src="${item.img}" alt="" srcset="" />
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <p>S/.${item.precio}</p>
            </div>
            `;
        });
    }else {      
        let newArray = arrayHerramientas.filter((item)=>{
            if (item.nombre == inputBuscar.value || item.modelo == inputBuscar.value) {
                return item;
            }   
       })
    
       containerList.innerHTML = '';
       newArray.forEach((item) => {
           containerList.innerHTML += `
           <div class="list-items__container-item" id="">
               <img class="img-herramientas" src="${item.img}" alt="" srcset="" />
               <h3>${item.nombre}</h3>
               <p>${item.descripcion}</p>
               <p>S/.${item.precio}</p>
           </div>
           `;
       });
    }

	console.log(inputBuscar.value);
 
});
