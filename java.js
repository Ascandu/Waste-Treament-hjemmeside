// JavaScript Document
// vi laver en const som vi kalder navbarToggle. Her går vores querySelector ind og vælger vores parent node som er vores css kode for navbar og vores selector er #navbar-toggle. (Altså vi vil udføre en handling med HTML elementet) Dvs navbar-toggle.
const navbarToggle = navbar.querySelector('#navbar-toggle');
//Der laves en variabel som kaldes isNavbarExpanded og denne checker i navbarToggle fra CSS om aria-expanded er true (false ville være når hamburger menuen er lukket) //
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';


const toggleNavbarVisibility = () => {
	isNavbarExpanded = !isNavbarExpanded;
	navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};
// Når navToggle trykkes på (igen hamburger menuen) så bliver navigationsmenuen synlig. //
navbarToggle.addEventListener('click', toggleNavbarVisibility);

function displayPerson() {
  document.getElementById("java-text").innerHTML = 'Processen starter allerede i hjemmet hos dig. Det er ting som at få sorteret affaldet, således så meget som muligt kan blive genbrugt og blive til nye ressourcer. Madaffald, pap og papir og konservesdåser skal sorteres for sig selv, for at det kan blive genbrugt og ikke går til spilde.';

	document.getElementById("skiftpeople").src="img/Hexagon design simple shape grøn people.svg";
	document.getElementById("skiftgenbrug").src="img/Hexagon design simple shape blå recycle.svg";
	document.getElementById("skiftdeponi").src="img/Landfill blå.svg";
	document.getElementById("skiftlastbil").src="img/Hexagon design simple shape blå lastbil.svg";
	document.getElementById("skiftskib").src="img/Hexagon design simple shape blå skib.svg";
	document.getElementById("skiftforbrænding").src="img/Hexagon design simple shape blå forbrænding.svg";
	document.getElementById("skiftmetaller").src="img/Hexagon design simple shape blå metal.svg";
}

function displayGenbrug() {
  document.getElementById("java-text").innerHTML = 'Når vi genbruger, så kan de genbrugte ressourcer spare os for en masse CO2 udledning. Et eksempel på dette ville være at sorterere alufoliebakker fra fx leverpostejsbakker. Vidste du at otte af disse ville spare miljøet for en CO2-udledning der ville være tilsvarende til en tøjvask? Så stop ressourcespildet og hjælp os med at genbruge.'
	
	document.getElementById("skiftpeople").src="img/Hexagon design simple shape blå people.svg";
	document.getElementById("skiftgenbrug").src="img/Hexagon design simple shape grøn recycle.svg";
	document.getElementById("skiftdeponi").src="img/Landfill blå.svg";
	document.getElementById("skiftlastbil").src="img/Hexagon design simple shape blå lastbil.svg";
	document.getElementById("skiftskib").src="img/Hexagon design simple shape blå skib.svg";
	document.getElementById("skiftforbrænding").src="img/Hexagon design simple shape blå forbrænding.svg";
	document.getElementById("skiftmetaller").src="img/Hexagon design simple shape blå metal.svg";
}

function displayDeponi() {
  document.getElementById("java-text").innerHTML = 'I Danmark har vi et antal deponier.  Her er der affald, der er gravet ned under kontrollerede forhold, som over mange år, bare ligger og forurener i jorden, indtil der engang findes en løsning på problemet. Her ønsker vi hos Waste Treatment og Danish Bio Recycling at sætte gang i udviklingen, sådan at det nedgravede, kan blive gravet op og nyttegjort. Hvilket samtidig er til gavn for os alle sammen i form af genanvendte metaller, og der undgås en forurening, som gør skade i mange år i fremtiden.'
	
	document.getElementById("skiftpeople").src="img/Hexagon design simple shape blå people.svg";
	document.getElementById("skiftgenbrug").src="img/Hexagon design simple shape blå recycle.svg";
	document.getElementById("skiftdeponi").src="img/Landfill grøn.svg";
	document.getElementById("skiftlastbil").src="img/Hexagon design simple shape blå lastbil.svg";
	document.getElementById("skiftskib").src="img/Hexagon design simple shape blå skib.svg";
	document.getElementById("skiftforbrænding").src="img/Hexagon design simple shape blå forbrænding.svg";
	document.getElementById("skiftmetaller").src="img/Hexagon design simple shape blå metal.svg";
}

function displayLastbil() {
  document.getElementById("java-text").innerHTML = 'Efterfølgende, som deponiaffaldet er blevet frigjort fra jorden, vil det herefter gennemgå en sorteringsproces. Her læsses det på sorteringsmaskiner, der fjerner jord og sten. Når så det skadelige deponiaffald ikke længere er i jorden, så kan det ikke længere beskadige miljøet og vores drikkevand. Det brugbare affald vil herefter blive losset på lastbiler og blive transporteret til den nærmeste havn.'
	
	document.getElementById("skiftpeople").src="img/Hexagon design simple shape blå people.svg";
	document.getElementById("skiftgenbrug").src="img/Hexagon design simple shape blå recycle.svg";
	document.getElementById("skiftdeponi").src="img/Landfill blå.svg";
	document.getElementById("skiftlastbil").src="img/Hexagon design simple shape grøn lastbil.svg";
	document.getElementById("skiftskib").src="img/Hexagon design simple shape blå skib.svg";
	document.getElementById("skiftforbrænding").src="img/Hexagon design simple shape blå forbrænding.svg";
	document.getElementById("skiftmetaller").src="img/Hexagon design simple shape blå metal.svg";
}

function displaySkib() {
  document.getElementById("java-text").innerHTML = 'Når lastbilen ankommer til havnen, bliver affaldet losset ombord, og sejlet til Finland hvor det så bliver losset af og fragtet til et forbrændingsanlæg, hvor resourcerne bliver nyttegjort i form af energi til finnere, som i øjeblikket har et kraftig behov for energi da der er mangel på olie.'
	
	document.getElementById("skiftpeople").src="img/Hexagon design simple shape blå people.svg";
	document.getElementById("skiftgenbrug").src="img/Hexagon design simple shape blå recycle.svg";
	document.getElementById("skiftdeponi").src="img/Landfill blå.svg";
	document.getElementById("skiftlastbil").src="img/Hexagon design simple shape blå lastbil.svg";
	document.getElementById("skiftskib").src="img/Hexagon design simple shape grøn skib.svg";
	document.getElementById("skiftforbrænding").src="img/Hexagon design simple shape blå forbrænding.svg";
	document.getElementById("skiftmetaller").src="img/Hexagon design simple shape blå metal.svg";
}

function displayForbrænding() {
  document.getElementById("java-text").innerHTML = 'Affaldet anvendes som et supplement til fossilebrændstoffer, til at generere varme og energi til det finske samfund. Det brændbare materiale består af cirka 85%, som bliver til aske, og de sidste 15% vil så være metaller. Her sørger finnerne for at sortere de ting, som kan blive nyttegjort fra, og leverer disse tilbage til os.'
	
	document.getElementById("skiftpeople").src="img/Hexagon design simple shape blå people.svg";
	document.getElementById("skiftgenbrug").src="img/Hexagon design simple shape blå recycle.svg";
	document.getElementById("skiftdeponi").src="img/Landfill blå.svg";
	document.getElementById("skiftlastbil").src="img/Hexagon design simple shape blå lastbil.svg";
	document.getElementById("skiftskib").src="img/Hexagon design simple shape blå skib.svg";
	document.getElementById("skiftforbrænding").src="img/Hexagon design simple shape grøn forbrænding.svg";
	document.getElementById("skiftmetaller").src="img/Hexagon design simple shape blå metal.svg";
}

function displayMetaller() {
  document.getElementById("java-text").innerHTML = 'Metallerne og asken sorteret fra i forskellige fraktioner på alt fra 0.3-10 millimeter. Metallerne sejles tilbage til Danmark og gennemgår en forædlingsproces, som kan rengøre metallerne fra 70% rent til 99.9% rent. Asken bruges til bygnings projekter, eller når der skal bygges veje eller landbrugsprojekter. Metallerne er vigtige, da især ting som kobber er en mangelvare og bliver efterspurgt i forbindelse med alle de nye elbiler og deres lade stationer.'
	
	document.getElementById("skiftpeople").src="img/Hexagon design simple shape blå people.svg";
	document.getElementById("skiftgenbrug").src="img/Hexagon design simple shape blå recycle.svg";
	document.getElementById("skiftdeponi").src="img/Landfill blå.svg";
	document.getElementById("skiftlastbil").src="img/Hexagon design simple shape blå lastbil.svg";
	document.getElementById("skiftskib").src="img/Hexagon design simple shape blå skib.svg";
	document.getElementById("skiftforbrænding").src="img/Hexagon design simple shape blå forbrænding.svg";
	document.getElementById("skiftmetaller").src="img/Hexagon design simple shape grøn metal.svg";
}

 