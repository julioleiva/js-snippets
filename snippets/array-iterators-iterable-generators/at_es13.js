
/* Cuando queremos obtener el enésimo elemento de un array, normalmente usamos [] para llegar a él */

const writers = [ 'Carver', 'Banville', 'Cheever', 'Cortázar', 'Bolaño' ]

console.log(writers[ 1 ], writers[ 0 ]) // 'Banville' 'Carver

/* Si queremos obtener el último N-ésimo elemento del array... */

const len = writers.length

console.log(writers[ len - 1 ]) // 'Bolaño'
console.log(writers[ len - 2 ]) // 'Cortázar'
console.log(writers[ len - 3 ]) // 'Cheever'

/*Eso se ve feo y deberíamos buscar una forma más elegante de hacer esto. Sí, por favor, ¡utiliza el método at de arrays a partir de ahora!*/

console.log(writers.at(-1)) // 'Bolaño'
console.log(writers.at(-2)) // 'Cortázar'
console.log(writers.at(-3)) // 'Cheever'
