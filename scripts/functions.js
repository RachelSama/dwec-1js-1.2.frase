'use strict'

function letras(cadena) {
	return cadena.length
}

function palabras(cadena) {
	let cadenaArray = cadena.split(' ')
	return cadenaArray.length
}

function maysc(cadena) {
	return cadena.toLocaleUpperCase()
}

function titulo(cadena) {
	let cadenaArray = cadena.split(' ')
	let nuevaCadena = []
	for(var palabra of cadenaArray) {
		let letra = palabra.charAt(0)
		nuevaCadena.push(palabra.replace(letra, letra.toLocaleUpperCase()))
	}
	return nuevaCadena.join(' ')
}

function letrasReves(cadena) {
	let nuevaCadena = ''
	for(let i = cadena.length; i >= 0; i--){
		nuevaCadena += cadena.charAt(i)
	}
	return nuevaCadena
}

function palabrasReves(cadena) {
	return cadena.split(' ').reverse().join(' ')
}

function palindromo(cadena) {
	let cadena1 = cadena.toLowerCase().split(' ').join('')
	let cadena2 = cadena.toLowerCase().split(' ').join('').split('').reverse().join('')
	return (cadena1 == cadena2)? true : false
		
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}