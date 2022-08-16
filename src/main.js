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
	<section id="athletes">
	<div class="name">  ${element.name} </div>
	<div class="gender">Gender: ${element.genderIcon} </div>
	<div class="sport">Sport: ${element.SportIcon} </div>
	<div class="medal">Medal: ${element.medalIcon} </div>
	<div class="gender">Team: ${element.team} </div>

	</section>
	<div class="card">
	<div class="card-image"></div>
	<div class="card-opacidad"></div>
                <p><strong>${element.name}</strong><p>
                <p>Gender: ${element.genderIcon}</p>
				<p>Sport: ${element.sport}</p>
                <p>Medal: ${element.medalIcon}</p>
				<p>Team: ${element.team}</p>
        </div>
	`;
	section.insertAdjacentHTML('beforebegin', html);
})


