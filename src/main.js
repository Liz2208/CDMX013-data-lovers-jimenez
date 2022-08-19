import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

window.addEventListener("scroll", function() {
	var header = this.document.querySelector("header");
	header.classList.toggle("abajo",window.scrollY>0);
})

const renderAthlete = (athlete) => {
	return `
		<section id="athletes" class="card">
		<div class="card-image"></div>
		<div class="card-opacidad"></div>
		<div class="name"> <p><strong> ${athlete.name}<strong> <p> </div>
		<div class="gender"> <p>Gender: ${athlete.genderIcon} <p> </div>
		<div class="sport"><p>Sport: ${athlete.sport} <p> </div>
		<div class="medal"><p>Medal: ${athlete.medalIcon} <p> </div>
		<div class="gender"><p>Team: ${athlete.team} <p> </div>
	`;
}

const section = document.getElementById('sectionAthletes');
const button = document.getElementById("button1");
button.addEventListener("click",()=>{
	section.classList.toggle("displaysection")
});
data.athletes.forEach(element => {
	element["genderIcon"]=element.gender === 'F' ? element.gender='🙋🏻‍♀️': element.gender = '🙋🏻‍♂️'
	if(element.medal==='Bronze'){
		element["medalIcon"] = '🥉';
	} else if (element.medal ==='Silver'){
		element["medalIcon"]  = '🥈';
	} else {
		element["medalIcon"]  = '🥇';
	}

	const html = renderAthlete(element)
	
	section.insertAdjacentHTML('afterbegin', html);
})
	///Verificamos qué deportes tiene la data:

const filterBtnGender = document.querySelector('.filterBtnGender')

filterBtnGender.addEventListener('change', (event) => {
	const genderId = event.target.value
	const genderIcon =  genderId === 'F' ? '🙋🏻‍♀️': '🙋🏻‍♂️'
	const filterGender= data.athletes.filter(athlete=>genderIcon===athlete.gender)


	filterGender.forEach(athlete => {
		const html = renderAthlete(athlete)
		section.insertAdjacentHTML('afterbegin', html);
	})
})
	