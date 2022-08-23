export const filterGender=(data, genderIcon) => data.athletes.filter(athlete=>genderIcon===athlete.gender)
<<<<<<< HEAD
export const sortData = (data, sortOrder) => {
   const ordenado=
      data.sort ((a,b)=> {
        if (a.name > b.name){
          return 1;
        }
       else if (a.name<b.name){
         return -1;
       }
       return 0;
     });
   if(sortOrder==="A-Z"){
     return ordenado;
   }
   else if(sortOrder==="Z-A"){
     return ordenado.reverse();
   }
}
export const filterSport=(data, sportID) => data.athletes.filter(athlete=>sportID===athlete.sport);
export const filterteam=(data, teamID) => data.athletes.filter(athlete=>teamID===athlete.team);
=======

export const sortData = (data, sortOrder) => {
const ordenado=
    data.sort ((a,b)=> {
        if (a.name > b.name){
        return 1;
        }
    else if (a.name<b.name){
        return -1;
    }
    return 0;
    });
if(sortOrder==="A-Z"){
    return ordenado;
    }
    else if(sortOrder==="Z-A"){
    return ordenado.reverse();
}
}
export const filterSport=(data, sportID) => data.athletes.filter(athlete=>sportID===athlete.sport);

>>>>>>> 2e208f69cbd85b06ff6b8daa006dd038ae9d24a3
