const elements = [1,1,2,2]
const otherElements = [3,3,4,4.4,3,2]

//hacemos spread reference para no clonar referencias al otro array
const newArray = [...elements]

for (let index = 0; index < otherElements.length; index++) {
	const element = otherElements[index];
	newArray.push(element)
}

console.log('for', newArray)

//utilizando concat
const rta = elements.concat(otherElements)
console.log('concat', rta)

//otras formas de concatenar
const rta2 = [...elements, ...otherElements]
console.log('concat', rta2)

//cuando desetructures objetos, asegurate de recibir un array
const rta3 = [...elements, ...'random']
console.log('rta3', rta3)


//cuando queremos MUTAR el array original
elements.push(...otherElements)
console.log(elements)

