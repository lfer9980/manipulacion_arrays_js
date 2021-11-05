const words = ["spray", "limit", "elite", "exuberant"]

const newArray = []

for (let i = 0; i < words.length; i++) {
	const element = words[i];	

	if (element.length >= 6) {
		newArray.push(element)
	}
}
console.log('newArray', newArray)
console.log('original', words)

//utilizando filter
const rta = words.filter( item => item.length >= 6 )

console.log('rta', rta)
console.log('original', words)


//condicionales más complejos con filter
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

const filtro = orders.filter( item => item.delivered && item.total > 100)
console.log(filtro)


//buscador de ordenes a partir del nombre con filter
const search = (query) => {
	return orders.filter(item => {
		return item.customerName.includes(query)
	})
}

console.log(search("Nico"))