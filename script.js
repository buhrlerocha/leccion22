// ejercicio numero 2 - numero par o impar -

function numero_par_o_impar (a){
	if (a%2==0){
		return a + " " + "es numero par"
	} else {
		return a + " " + "es numero impar"
	}
}
document.write (numero_par_o_impar (5) + "<br>");


// ejercicio numero 3 - ordenando numeros -
function numeros_ordenados (a,b,c){
	var numeros = [a,b,c].sort (a-b);
	return numeros;
}
document.write (numeros_ordenados (3,8,2)  + "<br>");

// ejercicio numero 8 - numero primo -
function numero_primo (a){
	if (a%a == 0 && a%1 ==0){
		return a + " " + "es numero primo"
	} else{
		return a + " " + "no es numero primo"
	}
}
document.write (numero_primo (5) + "<br>");

// ejercicio numero 7 - cuadrado de la suma de dos numeros -
function cuadrado_numeros (a,b){
	var calculo = (a*a)+(b*b);
		return calculo;
	}
document.write (cuadrado_numeros (5,4) + "<br>");

// ejercicio numero 1- el menor de los numeros -
function menor_numero (a,b,c){
	var dato = Math.min (a,b,c);
		return dato;
}
document.write (menor_numero (5,4,10) + "<br>");