window.addEventListener("scroll", function() {
	var header = this.document.querySelector("header");
	header.classList.toggle("abajo",window.scrollY>0);
})

import data from "./data/athletes/athletes.js";
//import{ sortData} from './data.js';

export const dataForAthletes = data.athletes;
//Llamamos al botón que nos mostrará la sección de deportes con sus dibujos:
document.getElementById('sports-btn').addEventListener('click',()=>{
    document.getElementById('intro').style.display='none';
    document.getElementById('sectionSports').style.display='block'; 
})

///Verificamos qué deportes tiene la data:
let arraySports = [];
for(let element of dataForAthletes){
    arraySports.push(element.sport);
}

//Eliminamos los deportes que se repiten:
arraySports = arraySports.filter((item,index)=>{
      return arraySports.indexOf(item) === index;
})

//Traemos el ID donde está la etiqueta "<table>" de HTML:
let playersTable=document.getElementById('playersTable');

//Creamos un bucle para que se muestre la data del deporte seleccionado de las tarjetas:
let dataForSport = [];
for(let i = 0; i<arraySports.length; i++){
    let card= document.getElementsByClassName('card')[i];
    card.addEventListener('click', ()=>{
    document.getElementById('sectionSports').style.display='none';
   // document.getElementById('medalTable').style.display='block';
   // dataForSport  =  dataForSport.concat(filterData(dataForAthletes,card.getAttribute('value')));
    playersTable.innerHTML = '';
    createTable(dataForSport);
    }
)}

//Creamos una función que se encargue de crear la tabla:
const createTable = (array) => {
    playersTable.innerHTML+=`<tr><th>NOMBRE</th>
    <th>GÉNERO</th><th>PAÍS</th><th>EDAD</th>
    <th>EVENTO</th><th>MEDALLA</th></tr>`;
     
    for(let i = 0; i<array.length; i++){
        playersTable.innerHTML+=`<tr><td>${array[i].name}</td>
        <td>${array[i].gender}</td>
        <td>${array[i].team}</td>
        <td>${array[i].age}</td>
        <td>${array[i].event}</td>
        <td>${array[i].medal}</td></tr>`;
    }
    return array;
}
