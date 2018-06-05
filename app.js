//Escriba una función 'computeAverageLengthOfWords' 
//que recibe dos strings y devuelve el promedio de
//la longitud de ambos strings.

const computeAverageLengthOfWords = (word1, word2) => {
	let sum = word1.length+word2.length;
	let average = sum / 2;
	return average;
}