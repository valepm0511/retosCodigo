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

/*Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.*/

let num = [1, 2, 3, 4, 5, 6, 100, 7, 9];
const getNthElement = (array, n) => {
	return array [n];
}


/*Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples.*/

const convertDoubleSpaceToSingle = (str) => {
	let arrayStr = str.split("  ").join(" ");
	return arrayStr;
}
