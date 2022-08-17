//Filtro por deporte
export const filterSport =(athletes, str) => {
  const resultBySport=athletes.filter(x=>x.sport===str)
    return resultBySport;
 }
 //Filtro por pais
 export const filterPais =(athletes, str2) => {
  const resultByTeam=athletes.filter(x=>x.team===str2)
    return resultByTeam; 
 }
 //Filtro por Medallas
export const filterMedals =(athletes, str3) => {
  const resultByMedals=athletes.filter(x=>x.medal===str3)
    return resultByMedals;
 }
 //Filtro por Género
 export const filterG =(athletes, str5) => {
  const resultByGender=athletes.filter(x=>x.gender===str5)
    return resultByGender;
 }
 //Ordenar ascendente o descentende
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
//Estadística porcentaje de participación por genero

export const computeStats =(arrayFemale,arrayMale,arrayTotal)=>{
const countFemale=arrayFemale.length;
const countMale=arrayMale.length;
const countTotal=arrayTotal.length;
const percentFemale=Math.round((countFemale/countTotal)*100);
const percentMale=Math.round((countMale/countTotal)*100);
let array =[percentFemale, percentMale];
return array;
}