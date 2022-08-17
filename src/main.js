window.addEventListener("scroll", function() {
var header = this.document.querySelector("header");
header.classList.toggle("abajo",window.scrollY>0);
})
import data from './data/athletes/athletes.js';
const section = document.getElementById('sectionAthletes');
const button = document.getElementById("button1");
button.addEventListener("click",()=>{
	section.classList.toggle("displaysection")
	let information = data.athletes;
let information2= information.map(item => {
    return [item.name,item]
})

let athletesNoDuplicates = new map(information2);
let atheletesNew= [...athletesNoDuplicates.values()];
console.log(atheletesNew);
});
data.athletes.forEach(element => {
	element["genderIcon"]=element.gender === 'F' ? element.gender='🙋🏻‍♀️': element.gender = '🙋🏻‍♂️'
	if(element.medal==='Bronze'){
		element["medalIcon"] = '🥉';
		}
		else if (element.medal ==='Silver'){
			element["medalIcon"]  = '🥈';
		}
		else{
			element["medalIcon"]  = '🥇';
		}

	let html= `
	<section id="athletes" class="card">
	<div class="card-image"></div>
	<div class="card-opacidad"></div>
	<div class="name"> <p><strong> ${element.name}<strong> <p> </div>
	<div class="gender"> <p>Gender: ${element.genderIcon} <p> </div>
	<div class="sport"><p>Sport: ${element.sport} <p> </div>
	<div class="medal"><p>Medal: ${element.medalIcon} <p> </div>
	<div class="gender"><p>Team: ${element.team} <p> </div>
	`;
	section.insertAdjacentHTML('afterbegin', html);
})

