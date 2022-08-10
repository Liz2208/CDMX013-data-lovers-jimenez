<<<<<<< HEAD
=======

>>>>>>> 1e4ad0beac611ced1948d0b25988451642447958
window.addEventListener("scroll", function(){
	var header = this.document.querySelector("header");
	header.classList.toggle("abajo",window.scrollY>0);
})

<<<<<<< HEAD
import  { example } from './data.js';
=======
import { example } from './data.js';
>>>>>>> 1e4ad0beac611ced1948d0b25988451642447958
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);