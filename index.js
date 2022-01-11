// ARREGLOS
// TIPO DE DATO NO PRIMITIVO

const nombres1 = [
	"mike", 
	"sam",
	15,
	null,
	true
]

console.log(nombres1)

//					0       1       2        3
const teachers = ["Mike", "Sam", "Víctor", "Ponz"]

console.log(teachers[0])
console.log(teachers[1])
console.log(teachers[99])

// MANIPULACIÓN
// A1. AGREGAR ELEMENTOS AL FINAL

teachers.push("Dylan")

console.log("teachers después del push:", teachers)


// A2. AGREGAR ELEMENTOS AL INICIO
teachers.unshift("Primer teacher")

console.log("teachers después del unshift", teachers)

// B. ELIMINAR ELEMENTOS
// splice
// 2 argumentos (0, cuántos a borrar hacia adelante)

teachers.splice(0,1)

console.log(teachers)

// ELIMINAR EL PRIMER ELEMENTO

teachers.shift()

console.log("teachers después del shift:", teachers)

// ELIMINAR EL ÚLTIMO ELEMENTO
teachers.pop()

console.log("teachers después del shift:", teachers)

// CICLOS
// FOR

const paises = ["México", "Colombia", "Perú"]
console.log(paises.length) // 3


for(i = 0; i < paises.length; i++) {

	console.log(`País: ${i}`)
	console.log(`Nombre de país: ${paises[i]}`)

}

//FOREACH
paises.forEach(function(element){
    console.log(element)

})

//SPLIT

const frase = "Este es una frase larga"
const palabras = frase.split("f")
console.log(palabras)
    