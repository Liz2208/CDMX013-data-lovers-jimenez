export const filterGender=(data, genderIcon) => data.athletes.filter(athlete=>genderIcon===athlete.gender)

export const filterSport=(data, sportID) => data.athletes.filter(athlete=>sportID===athlete.sport);

export const filterteam=(data, teamID) => data.athletes.filter(athlete=>teamID===athlete.team);

export const filterMedal=(data, medalId) => data.athletes.filter(athlete=>medalId===athlete.medal);

