<<<<<<< HEAD
import data from './data/athletes/athletes.js';
import {filterGender, filterSport, filterteam} from './data.js'
=======
//import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
import {filterGender, filterSport} from './data.js'
>>>>>>> 2e208f69cbd85b06ff6b8daa006dd038ae9d24a3

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
<<<<<<< HEAD
	`;
	
}
 
=======
		
	`;
	
}
>>>>>>> 2e208f69cbd85b06ff6b8daa006dd038ae9d24a3
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
<<<<<<< HEAD

	const html = renderAthlete(element)
	
	section.insertAdjacentHTML('afterbegin', html);
})
	//filtro por genero
const filterBtnGender = document.querySelector('.filterBtnGender')

filterBtnGender.addEventListener('change', (event) => {
	const genderId = event.target.value
	const genderIcon =  genderId === 'F' ? '🙋🏻‍♀️': '🙋🏻‍♂️'
	

	filterGender(data, genderIcon).forEach(athlete => {
		const html = renderAthlete(athlete)
		section.insertAdjacentHTML('afterbegin', html);
		console.log(filterGender)
	})
})

// filtrado de deporte
const filterBtnSport = document.querySelector('.filterBtnSport')

filterBtnSport.addEventListener('change', (event) => {
    const sportID = event.target.value
	const sport =sportID === '' ? sport:

	filterSport(data, sportID).forEach(sport => {
		const html = renderAthlete(sport)
		section.insertAdjacentHTML('afterbegin', html);
		console.log(filterSport)
			
	})
})
// filtrado countries
const filterBtnteam = document.querySelector('.filterBtnteam')

filterBtnteam.addEventListener('change', (event) => {
    const teamID = event.target.value
	const team =teamID === '' ? team:

	filterteam(data, teamID).forEach(team => {
		const html = renderAthlete(team)
		section.insertAdjacentHTML('afterbegin', html);
		console.log(filterteam)
			
	})
})

//ordenacion por alfabeto
/*const filterBtnSort = document.querySelector('.filterBtnSort')
filterBtnSort.addEventListener('change', (event)=>{
	const sortData=event.target.value
	filterData(data, sortData).forEach(name => {
		const html = renderAthlete(name)
		section.insertAdjacentHTML('afterbegin', html);
		console.log(filterBtnSort)
	})
})*/
=======
	const html = renderAthlete(element)
	section.insertAdjacentHTML('afterbegin', html);
})
	//filtro por genero
const filterBtnGender = document.querySelector('.filterBtnGender')

filterBtnGender.addEventListener('change', (event) => {
	const genderId = event.target.value
	const genderIcon =  genderId === 'F' ? '🙋🏻‍♀️': '🙋🏻‍♂️'
	

	filterGender(data, genderIcon).forEach(athlete => {
		const html = renderAthlete(athlete)
		section.insertAdjacentHTML('afterbegin', html);
		console.log(filterGender)
	})
})

const sortBtn = document.querySelector('.filterBtn2')

sortBtn.addEventListener('change', (event) => {
	console.log(event.target.value)
	document.getElementById('sectionAthletes').innerHTML=''
	section.insertAdjacentHTML('afterbegin',html);
})

// filtrado de deporte
const filterBtnSport = document.querySelector('.filterBtnSport')

filterBtnSport.addEventListener('change', (event) => {
    const sportID = event.target.value
	const sport =sportID ===""

	filterSport(data, sportID).forEach(sport => {
		const html = renderAthlete(sport)
		section.insertAdjacentHTML('afterbegin', html);
		console.log(filterSport)
			
	})
})

>>>>>>> 2e208f69cbd85b06ff6b8daa006dd038ae9d24a3
