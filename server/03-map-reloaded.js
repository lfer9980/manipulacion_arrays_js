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
console.log('Original', orders)


const answer = orders.map(item => item.total)
console.log('rta', answer)


//esta opción modifica al objeto original y al objeto copia
/* const answer2 = orders.map(item => {
	item.tax = .19
	return item
}) */


// esta opción no modifica al objeto original y crea uno nuevo
const answer3 = orders.map(item => {
	return {
		...item,
		tax: .19,
	}
})
console.log('answer3', answer3)
console.log('Original', orders)