function autocomplete(inp, arr) {
	/*the autocomplete function takes two arguments,
	the text field element and an array of possible autocompleted values:*/
	var currentFocus;
	/*execute a function when someone writes in the text field:*/
	inp.addEventListener("input", function (e) {
		var a, b, i, val = this.value;
		/*close any already open lists of autocompleted values*/
		closeAllLists();
		if (!val) { return false; }
		currentFocus = -1;
		/*create a DIV element that will contain the items (values):*/
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		/*append the DIV element as a child of the autocomplete container:*/
		this.parentNode.appendChild(a);
		/*for each item in the array...*/
		for (i = 0; i < arr.length; i++) {
			/*check if the item starts with the same letters as the text field value:*/
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				/*create a DIV element for each matching element:*/
				b = document.createElement("DIV");
				/*make the matching letters bold:*/
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				/*insert a input field that will hold the current array item's value:*/
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				/*execute a function when someone clicks on the item value (DIV element):*/
				b.addEventListener("click", function (e) {
					/*insert the value for the autocomplete text field:*/
					inp.value = this.getElementsByTagName("input")[0].value;
					/*close the list of autocompleted values,
					(or any other open lists of autocompleted values:*/
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});
	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function (e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
			/*If the arrow DOWN key is pressed,
			increase the currentFocus variable:*/
			currentFocus++;
			/*and and make the current item more visible:*/
			addActive(x);
		} else if (e.keyCode == 38) { //up
			/*If the arrow UP key is pressed,
			decrease the currentFocus variable:*/
			currentFocus--;
			/*and and make the current item more visible:*/
			addActive(x);
		} else if (e.keyCode == 13) {
			/*If the ENTER key is pressed, prevent the form from being submitted,*/
			e.preventDefault();
			if (currentFocus > -1) {
				/*and simulate a click on the "active" item:*/
				if (x) x[currentFocus].click();
			}
		}
	});
	function addActive(x) {
		/*a function to classify an item as "active":*/
		if (!x) return false;
		/*start by removing the "active" class on all items:*/
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		/*add class "autocomplete-active":*/
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		/*a function to remove the "active" class from all autocomplete items:*/
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	function closeAllLists(elmnt) {
		/*close all autocomplete lists in the document,
		except the one passed as an argument:*/
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
	/*execute a function when someone clicks in the document:*/
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}
var countries =
	["Afghanistan",
		"Afrique du Sud",
		"Albanie",
		"Algérie",
		"Allemagne",
		"Andorre",
		"Angola",
		"Anguilla",
		"Antarctique",
		"Antigua-et-Barbuda",
		"Antilles néerlandaises",
		"Arabie saoudite",
		"Argentine",
		"Arménie",
		"Aruba",
		"Australie",
		"Autriche",
		"Azerbaïdjan",
		"Bahamas",
		"Bahreïn",
		"Bangladesh",
		"Barbade",
		"Bélarus",
		"Belgique",
		"Belize",
		"Bénin",
		"Bermudes",
		"Bhoutan",
		"Bolivie",
		"Bosnie-Herzégovine",
		"Botswana",
		"Brésil",
		"Brunéi Darussalam",
		"Bulgarie",
		"Burkina Faso",
		"Burundi",
		"Cambodge",
		"Cameroun",
		"Canada",
		"Cap-Vert",
		"Ceuta et Melilla",
		"Chili",
		"Chine",
		"Chypre",
		"Colombie",
		"Comores",
		"Congo-Brazzaville",
		"Corée du Nord",
		"Corée du Sud",
		"Costa Rica",
		"Côte d’Ivoire",
		"Croatie",
		"Cuba",
		"Danemark",
		"Diego Garcia",
		"Djibouti",
		"Dominique",
		"Égypte",
		"El Salvador",
		"Émirats arabes unis",
		"Équateur",
		"Érythrée",
		"Espagne",
		"Estonie",
		"État de la Cité du Vatican",
		"États fédérés de Micronésie",
		"États-Unis",
		"Éthiopie",
		"Fidji",
		"Finlande",
		"France",
		"Gabon",
		"Gambie",
		"Géorgie",
		"Géorgie du Sud et les îles Sandwich du Sud",
		"Ghana",
		"Gibraltar",
		"Grèce",
		"Grenade",
		"Groenland",
		"Guadeloupe",
		"Guam",
		"Guatemala",
		"Guernesey",
		"Guinée",
		"Guinée équatoriale",
		"Guinée-Bissau",
		"Guyana",
		"Guyane française",
		"Haïti",
		"Honduras",
		"Hongrie",
		"Île Bouvet",
		"Île Christmas",
		"Île Clipperton",
		"Île de l'Ascension",
		"Île de Man",
		"Île Norfolk",
		"Îles Åland",
		"Îles Caïmans",
		"Îles Canaries",
		"Îles Cocos - Keeling",
		"Îles Cook",
		"Îles Féroé",
		"Îles Heard et MacDonald",
		"Îles Malouines",
		"Îles Mariannes du Nord",
		"Îles Marshall",
		"Îles Mineures Éloignées des États-Unis",
		"Îles Salomon",
		"Îles Turks et Caïques",
		"Îles Vierges britanniques",
		"Îles Vierges des États-Unis",
		"Inde",
		"Indonésie",
		"Irak",
		"Iran",
		"Irlande",
		"Islande",
		"Israël",
		"Italie",
		"Jamaïque",
		"Japon",
		"Jersey",
		"Jordanie",
		"Kazakhstan",
		"Kenya",
		"Kirghizistan",
		"Kiribati",
		"Koweït",
		"Laos",
		"Lesotho",
		"Lettonie",
		"Liban",
		"Libéria",
		"Libye",
		"Liechtenstein",
		"Lituanie",
		"Luxembourg",
		"Macédoine",
		"Madagascar",
		"Malaisie",
		"Malawi",
		"Maldives",
		"Mali",
		"Malte",
		"Maroc",
		"Martinique",
		"Maurice",
		"Mauritanie",
		"Mayotte",
		"Mexique",
		"Moldavie",
		"Monaco",
		"Mongolie",
		"Monténégro",
		"Montserrat",
		"Mozambique",
		"Myanmar",
		"Namibie",
		"Nauru",
		"Népal",
		"Nicaragua",
		"Niger",
		"Nigéria",
		"Niue",
		"Norvège",
		"Nouvelle-Calédonie",
		"Nouvelle-Zélande",
		"Oman",
		"Ouganda",
		"Ouzbékistan",
		"Pakistan",
		"Palaos",
		"Panama",
		"Papouasie-Nouvelle-Guinée",
		"Paraguay",
		"Pays-Bas",
		"Pérou",
		"Philippines",
		"Pitcairn",
		"Pologne",
		"Polynésie française",
		"Porto Rico",
		"Portugal",
		"Qatar",
		"R.A.S. chinoise de Hong Kong",
		"R.A.S. chinoise de Macao",
		"régions éloignées de l’Océanie",
		"République centrafricaine",
		"République démocratique du Congo",
		"République dominicaine",
		"République tchèque",
		"Réunion",
		"Roumanie",
		"Royaume-Uni",
		"Russie",
		"Rwanda",
		"Sahara occidental",
		"Saint-Barthélémy",
		"Saint-Kitts-et-Nevis",
		"Saint-Marin",
		"Saint-Martin",
		"Saint-Pierre-et-Miquelon",
		"Saint-Vincent-et-les Grenadines",
		"Sainte-Hélène",
		"Sainte-Lucie",
		"Samoa",
		"Samoa américaines",
		"Sao Tomé-et-Principe",
		"Sénégal",
		"Serbie",
		"Serbie-et-Monténégro",
		"Seychelles",
		"Sierra Leone",
		"Singapour",
		"Slovaquie",
		"Slovénie",
		"Somalie",
		"Soudan",
		"Sri Lanka",
		"Suède",
		"Suisse",
		"Suriname",
		"Svalbard et Île Jan Mayen",
		"Swaziland",
		"Syrie",
		"Tadjikistan",
		"Taïwan",
		"Tanzanie",
		"Tchad",
		"Terres australes françaises",
		"Territoire britannique de l'océan Indien",
		"Territoire palestinien",
		"Thaïlande",
		"Timor oriental",
		"Togo",
		"Tokelau",
		"Tonga",
		"Trinité-et-Tobago",
		"Tristan da Cunha",
		"Tunisie",
		"Turkménistan",
		"Turquie",
		"Tuvalu",
		"Ukraine",
		"Union européenne",
		"Uruguay",
		"Vanuatu",
		"Venezuela",
		"Viêt Nam",
		"Wallis-et-Futuna",
		"Yémen",
		"Zambie",
		"Zimbabwe"];
autocomplete(document.getElementById("pays"), countries);
