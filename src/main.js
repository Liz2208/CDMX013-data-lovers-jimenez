import data from './data/athletes/athletes.js';
const section = document.getElementById('sectionAthletes');

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
		
		section.insertAdjacentHTML('beforebegin', html);
		
	})
	let myheader = document.getElementById("header");
	window.onscroll = function() {scrollFunction()};
	
	myheader.addEventListener("click",topFunction)
	
		function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myheader.style.display = "flex";
		} else {
		myheader.style.display = "flex";
		}
		}
		function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}