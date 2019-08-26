// ILE MASZ LAT?
    // var age = Number(prompt("Ile masz lat?"));
    // alert("Masz " + age + " lat");

// ZADANIA Z WHILE IF

// console.log("zadanie 1. - liczby pomiędzy -10 a 19");
// var count = -10;

// while(count <=19) {
// 	console.log(count);
// count++;
// }

// console.log("zadanie 2. - liczby parzyste między 10 a 40");
// var count = 10;

// while(count <= 40) {
// 	if(count % 2 == 0) {
// 		console.log(count);
// 	}
// 	count++;
// }

// console.log("zadanie 3. - liczby nieparzyste miedzy 300 a 333");

// var count = 300;

// while(count <= 333){
// 	if(count % 2 !== 0) {
// 		console.log(count);
// 	}
// 	count++;
// }

// console.log("zadanie 4. - liczby podzielne przez 5 i 3 pomiędzy 5 a 50");

// var count = 5;

// while(count <= 50) {
// 	if(count % 5 == 0 && count % 3 == 0) {
// 		console.log(count);
// 	}
// 	count++;
// }
 
// ZADANIA Z FOR

// console.log("zadanie 1. - liczby pomiędzy -10 a 19");

// for(var i = -19; i <= 19; i++) {
// 	console.log(i);
// }


// console.log("zadanie 2. - liczby parzyste między 10 a 40");

// // for(var i = 10; i <=40; i+=2) {
// // 	console.log(i);
// // }

// for(var i = 10; i <=40; i++) {
// 	if(i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// console.log("zadanie 3. - liczby nieparzyste miedzy 300 a 333");

// // for(var i = 301; i <= 333; i+=2) {
// // 	console.log(i);
// // }

// for(var i = 300; i <= 333; i++) {
// 	if(i % 2 !== 0) {
// 		console.log(i);
// 	}
// }

// console.log("zadanie 4. - liczby podzielne przez 5 i 3 pomiędzy 5 a 50");

// for(var i = 5; i <= 50; i++) {
// 	if(i % 5 === 0 && i % 3 === 0) {
// 		console.log(i);
// 	}
// }

// 148. FUNKCJE

// function isEven(num) {
// 	if(num % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// function isEven(x) {
// 	return x % 2 === 0;
// }

// SILNIA!

// function silnia(x) {
// 	var wynik = 1;
// 	for(var i = 1; i <= x; i++) {
		
// 		wynik *= i;   // wynik = wynik * i;
// 	}
// 	return wynik;
// }

// ZAMIANA ZNAKÓW

// function zam(x) {
// 	return (x.replace('-', '_'));
// }

// TABLICE

// var dniTygodnia = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];	// deklaracja tablicy
// var colors = new Array();	// deklaracja nowej tablicy, bez elementów

// dniTygodnia[0] = "DrugiPoniedzialek" // przypisawnie elementów tablicy do danego indexu
// colors.push("czerwony");

// dniTygodnia.push("Sobota", "Niedziela");  // dodanie elementu na końcu tablicy
// dniTygodnia.pop();	// usunięcie ostatniego elementu z tablicy

// colors.unshift("niebieski", "purpurowy", "czarny");
// colors.shift();

// dniTygodnia.indexOf("Środa");	//zwraca index danego elementu w talicy

// var owoce = ["gruszka", "banan", "wisnia", "arbuz"];
// var owoce2 = owoce.slice(1, 3);
// var owoce3 = owoce.slice();

// console.log(dniTygodnia[2] + " dzień loda, a gdzie tam do " + dniTygodnia[4]);
// console.log("W tablicy colors jest: " + colors.length + " elementów")	// właściwość długość tablicy
// console.log(owoce);	// przed cięciem
// console.log(owoce2);	// po cięciu
// console.log(owoce3);	// skopiowane owoce1 do owoce3


// LISTA ZADAŃ

// var lista = [];
// window.setTimeout(function() {
// var input = prompt("Co chcesz zrobić? nowy/lista/wyjsc");

// while(input !== "wyjsc") {
// 	if(input === "lista") {
// 			console.log(lista);
// 		}	else if(input === "nowy") {	//
// 			var nowyElement = prompt("Podaj nowe zadanie");
// 			lista.push(nowyElement);
// 		}	

// 		input = prompt("Co chcesz zrobić? nowy/lista/wyjsc");	// zapytaj ponownie o nowy input
// }
// console.log("Ok, wychodzimy z apliakcji");
	


// }, 500);

// var litery = ["a", "s", "q", "x"];

// // for(i = 0; i < litery.length; i++) {
// // 	console.log(litery[i]);
// // }

// litery.forEach(function(litery) {
// 	console.log(litery);
// });

// TABLICE CWICZENIE

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var colors = ["red", "orange", "yellow", "green"];

// numbers.forEach(function(color) {
// 	if(color % 3 === 0) {
// 		console.log(color);
// 	}
// });


// LISTA ZADAŃ 2

// var lista = ["element zerowy"];

// var input = prompt("Co chcesz zrobić? nowy/lista/wyjsc/usun");

// while(input !== "wyjsc") {
// 	if(input === "lista") {
// 		flista();	
// 		}	else if(input === "nowy") {
// 			dodajElement();
// 		}	else if(input === "usun") {
// 			usunElement();
// 		}
// 		input = prompt("Co chcesz zrobić? nowy/lista/wyjsc/usun");	
// }
// console.log("Ok, wychodzimy z aplikacji");

// function flista() {
// 	lista.forEach(function(list, i) {
// 	console.log(i + ": " + list);
// 	});
// }
// function dodajElement() {
// 	var nowyElement = prompt("Podaj nowe zadanie");
// 	lista.push(nowyElement);
// 	console.log("dodano pozycje: " + nowyElement)
// }
// function usunElement() {
// 	var index = prompt("podaj nr zadania do usuniecia");
// 	lista.splice(index,1);
// 	console.log("usunieto pozycje: " + index)
// }

// CWICZENIE TABLICE 163.
// tablica = [1,2,3,4];

// function wsteczny(tablica) {
// 	for(var i = tablica.length - 1; i >= 0; i--) {
// 		console.log(tablica[i]);
// 	}
// }
// console.log(wsteczny(tablica));

// tablica1 = [1,2,3,4];
// tablica2 = [2,2,2,2];

// function takieSame(tablica) {
// 	var first = tablica[0];
// 	for(var i = 1; i < tablica.length ; i++) {
// 		if(tablica[i] !== first) {
// 			return false;
// 		}	
// 	}
// 	return true;
// }

// SUMA TABLICY

// tablica1 = [1,2,3,4];

// function suma(tablica) {
// var total = 0;
// tablica.forEach(function(element) {
// 	total += element;
// });
// return total;
// }

// ZWRACANIE MAXA Z TABLICY

// function max(tablica) {
// 	var max = tablica[0];
// 	for(var i = 1; i < tablica.length; i++) {
// 		if(tablica[i] > max) {
// 			max = tablica[i];
// 		}
// 	}
// 	return max;
// }

// var osoba = {
// 	imie: "maciej",
// 	wiek: 21,
// 	miasto: "kato"
// };

// console.log(osoba["wiek"]);
// console.log(osoba.miasto);

// osoba["wiek"] += 1; //dodaje 1 do wieku
// osoba.miasto = "tychy"; //zmienia miasto


// COLOR CHANGE BUTTON

