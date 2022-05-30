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