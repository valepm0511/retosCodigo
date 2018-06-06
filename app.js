/*Escriba una función 'computeAverageLengthOfWords' 
que recibe dos strings y devuelve el promedio de
la longitud de ambos strings.*/

const computeAverageLengthOfWords = (word1, word2) => {
	let sum = word1.length+word2.length;
	let average = sum / 2;
	return average;
}

/*Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.*/

const areValidCredentials = (name, password) => {
	if(name.length >= 3 && password.length >= 8){
		return true;
	}else{
		return false;
	}
}

/**/
let num = [1, 2, 3, 4, 5, 6, 100, 7, 9];
const getNthElement = (array, n) => {
	
	return array [n];
}

