const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');

console.log(avisoCookies);
console.log(botonAceptarCookies)

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	
} 

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	localStorage.setItem('cookies-aceptadas', true);


});