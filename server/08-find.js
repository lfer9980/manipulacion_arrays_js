const numbers = [1, 30, 49, 29 ,10, 13]

let rta = undefined

for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];

	if (element === 30) {
		rta = element
		break
	}
}

console.log('for', rta)

//usando FIND
const rta2 = numbers.find( item => item === 30)
console.log('find', rta2)


//ejemplo avanzado con FIND
/* find es excelente en propiedades que no se REPITEN */
const products = [
	{
		name: "Pizza",
		price: 12,
		id: '🍕'
	},
	{
		name: "Burger",
		price: 23,
		id: '🍔'
	},
	{
		name: "Hot dog",
		price: 34,
		id: '🌭'
	},
	{
		name: "Hot cakes",
		price: 355,
		id: '🥞'
	},
];

const rta3 = products.find( item => item.id === '🍔')
console.log('find', rta3)

//variante de find: findindex
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4)

