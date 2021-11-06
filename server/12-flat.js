const matriz = [
	[1,2,3],
	[4,5,6, [1,2]],
	[7,8,9],
]

//solucionando con recursividad
const flattingArray = (array) => {
	let newList = []

	for (element of array) {
		if (Array.isArray(element)) {
			newList = newList.concat(flattingArray(element))
		} else {
			newList.push(element)
		}
	}
	
	return newList
}

const arrayAplanado = flattingArray(matriz)
console.log("recursividad", arrayAplanado)



//solucionando con un array simple
const newArray = []

for (let i = 0; i < matriz.length; i++) {
	for (let j = 0; j < matriz[i].length; j++) {
		const element = matriz[i][j];
		newArray.push(element)
	}
}
console.log('for', newArray)


//utilizando FLAT
const rta = matriz.flat(2)
console.log('rta',rta)