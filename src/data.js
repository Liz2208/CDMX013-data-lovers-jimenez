export const filterGender=(data, genderIcon) => data.athletes.filter(athlete=>genderIcon===athlete.gender)

export const filterSport=(data, sportID) => data.athletes.filter(athlete=>sportID===athlete.sport);

export const filterteam=(data, teamID) => data.athletes.filter(athlete=>teamID===athlete.team);

export const filterMedal=(data, medalId) => data.athletes.filter(athlete=>medalId===athlete.medal);

export const SortAZ= (athletes)=>{

return  athletes.sort (function (a,b){
        if(a.name.toUpperCase() > b.name.toUpperCase()){
            return -1;
        }
        else {
            return 1;
        }  
    }) 
}

export const SortZA= (athletes)=>{

    return  athletes.sort (function (a,b){
        if(a.name.toUpperCase() > b.name.toUpperCase()){
            return 1;
        }
        else {
            return -1;
        }  
    }) 
}
export const averageData = (data) => { 
    let sum = data.reduce((previous, current) => previous + current.age, 0);
    let promData = sum / data.length;
    return promData;
}
console.log(averageData)