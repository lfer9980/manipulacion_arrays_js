const elements = ['fire', 'air', 'water']

const separator = '--'
let rtaFinal = ''

for (let index = 0; index < elements.length; index++) {
	const element = elements[index];

	index === (elements.length)-1 ? 
	rtaFinal = rtaFinal + element:	
	rtaFinal = rtaFinal + element + separator
}

console.log('for', rtaFinal)

//utilizando JOIN
const rta2 = elements.join('--')
console.log('join', rta2)


//utilizando SPLIT
const title = 'Curso de manipulación de arrays'
console.log(title.split(' '))

//utilizando split y JOIN
const titleFinal = title.split(' ').join('-').toLowerCase()
console.log(titleFinal)

