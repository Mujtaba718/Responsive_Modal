// Get modal element
let modal = document.querySelector('.modal');
// Get open modal button
let modalBtn = document.querySelector('.modal-btn');
// Close button
let closeBtn = document.querySelector('.close-btn');


// Listen for open click
modalBtn.addEventListener('click', () => {
	modal.classList.add("modal-open");
	modal.animate([
		{opacity: 0},
		{opacity: 1}
	], {
		duration: 300,
		easing: "ease-out"
	});
});

// Listen for close click
closeBtn.addEventListener('click', () => {
	modal.classList.remove("modal-open");

});

// Listen for outside click
window.addEventListener('click', event => {
	if(event.target === modal) {
		modal.classList.remove("modal-open");

	}
});

