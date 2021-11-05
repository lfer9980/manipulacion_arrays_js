const numbers = [1, 2, 3, 4]

let rta = false

for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	if(element % 2 === 0 ) {
		rta = true
		//como ya lo encontro, no es necesario seguir reccorriendo
		//rompemos entonces el ciclo
		break;
	}
}

console.log(rta)

//utilizando SOME
const rta2 = numbers.some( item => item % 2 === 0)
console.log(rta2)


//utilizando SOME con objects
const orders = [
	{
		customerName: "Nicolas",
		total: 60,
		delivered: true,
	},
	{
		customerName: "Zulema",
		total: 120,
		delivered: false,
	},
	{
		customerName: "Santiago",
		total: 180,
		delivered: true,
	},
	{
		customerName: "Valentina",
		total: 240,
		delivered: true,
	},
];

const rta3 = orders.some( item => item.delivered) 
console.log(rta3)


//some usando librerias

const dates = [
	{
		startDate: new Date(2021, 1, 1, 10),
		endDate: new Date(2021, 1, 1, 11),
		title: "Cita de trabajo",
	},
	{
		startDate: new Date(2021, 1, 1, 15),
		endDate: new Date(2021, 1, 1, 15, 30),
		title: "Cita con mi jefe",
	},
	{
		startDate: new Date(2021, 1, 1, 20),
		endDate: new Date(2021, 1, 1, 21),
		title: "Cena",
	},
];

const newAppointment = {
	startDate: new Date(2021, 1, 1, 8),
	endDate: new Date(2021, 1, 1, 9, 30),
}

const areIntervalOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = ( newDate ) => {
	return dates.some(date => {
		return areIntervalOverlapping(
			//comparamos la fecha agregada a dates, con la fecha que se quiere agendar
			{start: date.startDate, end: date.endDate},
			{start: newDate.startDate, end: newDate.endDate},
		)
	})
}

console.log('isOverlap', isOverlap(newAppointment))