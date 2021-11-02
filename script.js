const active = document.querySelector('.active')
const links = document.querySelectorAll('.link')
const slider = document.querySelector('.slider'); 

// highlights each nav link when clicked and removes highlight from previous nav link
function activeNavLink() {
	links.forEach((link) => {
		link.classList.remove("active")
		link.addEventListener('click', () => {
			links.forEach((link) => {
				link.classList.remove("active")
			})
			link.classList.add("active")
		})
	})
}

activeNavLink()

// highlights each nav link when scrolling and removes highlight from previous nav link
document.addEventListener('scroll',() => {
	links.forEach((link) => {
		link.classList.remove("active")
	})
	if(pageYOffset >= 0 && pageYOffset <= 631) {
		links[0].classList.add("active")
	} else if(pageYOffset >= 631 && pageYOffset <= 1900) {
		links[1].classList.add("active")
	} else if(pageYOffset >= 1900 && pageYOffset <= 3000) {
		links[2].classList.add("active")
	} else if(pageYOffset >= 3000) {
		links[3].classList.add("active")
	}
})

// Slider function for the 3rd header
width = 0;

const moveRight = () => {
	if (width < -200) {
		width = 0;
	} else if (width >= -200) {
		slider.style.right = `${width}vw`
		width -=100; 
	}
}

setInterval(moveRight,10000)