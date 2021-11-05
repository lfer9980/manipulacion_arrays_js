const numbers = [1, 30, 29, 29, 10, 13]

let rta = true;

for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];

	if ( element >= 40 ) {
		rta = false;
	}	
}
console.log('rta', rta)

//utilizando EVERY
const rta2 = numbers.every( item => item <= 40 )
console.log("rta2", rta2)


//reto de la clase
/* evaluar que TODOS los miembros de este equipo sean menores de 15 años */
const team = [
	{
		name: "Nicolas",
		age: 12,
	},
	{
		name: "Andrea",
		age: 8,
	},
	{
		name: "Zulema",
		age: 2,
	},
	{
		name: "Santiago",
		age: 32,
	},
];

const majorityAge = (team) => {
	return team.every((person) => person.age < 15)
}

console.log(majorityAge(team))