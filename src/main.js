
import data from './data/athletes/athletes.js';
import { filterGender, filterSport, filterteam, filterMedal, SortAZ, SortZA } from "./data.js";
//import athletes from './data/athletes/athletes.js';

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
	ocultar();
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


	//filtro por genero
const filterBtnGender = document.querySelector('.filterBtnGender')
let athletesfiltersbyGender= []
filterBtnGender.addEventListener('change', (event) => {
	const genderId = event.target.value
	const genderIcon =  genderId === 'F' ? '🙋🏻‍♀️' : '🙋🏻‍♂️'
	
filterGender(data, genderIcon).forEach(athlete => {
		const html = renderAthlete(athlete)
		section.insertAdjacentHTML('afterbegin', html);
	athletesfiltersbyGender.push(athlete)
	})	
	
})

// filtrado de deporte
const filterBtnSport = document.querySelector('.filterBtnSport')

filterBtnSport.addEventListener('change', (event) => {
	section.innerHTML = ""
    const sportID = event.target.value
	const sport =sportID === '' ? sport:

	filterSport(data, sportID).forEach(sport => {
		const html = renderAthlete(sport)
		section.insertAdjacentHTML('afterbegin', html);	
	})
})
// filtrado countries
const filterBtnteam = document.querySelector('.filterBtnteam')

filterBtnteam.addEventListener('change', (event) => {
	section.innerHTML = ""
    const teamID = event.target.value
	const team =teamID === '' ? team:

	filterteam(data, teamID).forEach(team => {
		const html = renderAthlete(team)
		section.insertAdjacentHTML('afterbegin', html);
	})
})

// filtrado medallas
const filterBtnMedal = document.querySelector(".filterBtnMedal");

filterBtnMedal.addEventListener("change", (event) => {
section.innerHTML = "";
const medalId = event.target.value;
const medal= medalId === "" ? medal : filterMedal(data, medalId).forEach((medal) => {
    const html = renderAthlete(medal);
    section.insertAdjacentHTML("afterbegin", html);
});
});

function ocultar(){
	document.getElementById('videointro').style.display = 'none';
	document.getElementById('curiosities').style.display = 'none';
}

const filterBtnSort = document.getElementById('sort');
filterBtnSort.addEventListener('change', (event)=> {
	if (event.target.value === "AZ"){  
		SortAZ (data.athletes).forEach(name => {
		const html = renderAthlete(name)
	section.insertAdjacentHTML('afterbegin', html);	
})
}

if (event.target.value === "ZA"){
	SortZA (data.athletes).forEach(name => {
		const html = renderAthlete(name)
		section.insertAdjacentHTML('afterbegin', html);	
	})
	}
});

athletesfiltersbyGender.length
console.log(athletesfiltersbyGender.length)

