const closeNav = document.querySelector(".close-nav")

closeNav.addEventListener("click", () => {
	document.getElementById("nav").style.width = "0%"
})

const openNav = document.querySelector(".open-nav")

openNav.addEventListener("click", () => {
	document.getElementById("nav").style.width = "50%"
})