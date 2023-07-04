let navBtn = document.querySelector('.nav-icon-btn');
let navIcon = document.querySelector('.nav-icon');

let nav = document.querySelector('.header__top-row');

navBtn.onclick = function() {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__top-row--mobile')
	document.body.classList.toggle('no-scroll')
}