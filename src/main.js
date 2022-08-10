window.addEventListener("scroll", function(){
	var header = this.document.querySelector("header");
	header.classList.toggle("abajo",window.scrollY>0);
})

import  { example } from './data.js';

import data from './data/pokemon/pokemon.js';


console.log(example, data);