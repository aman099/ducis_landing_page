const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
	search.classList.toggle("active");
	input.focus();
});

// navbar DD popup
const aboutContent = document.querySelector(
	".navbar-2-cont nav .about-dd-cont"
);
const about = document.querySelector(".navbar-2-cont nav ul li.about");
const aboutWidth = document.querySelector(
	".navbar-2-cont nav .dd ul li.about::after"
);

about.addEventListener("mouseover", () => {
	if (offering.classList.contains("active")) {
		offering.classList.remove("active");
		offeringContent.style.display = "none";
	}
	aboutContent.style.display = "block";
	about.classList.add("active");
});
about.addEventListener("click", () => {
	aboutContent.style.display = "none";
	about.classList.remove("active");
});

const offeringContent = document.querySelector(
	".navbar-2-cont nav .offering-dd-cont"
);
const offering = document.querySelector(".navbar-2-cont nav ul li.offering");
const offeringWidth = document.querySelector(
	".navbar-2-cont nav .dd ul li.offering::after"
);

offering.addEventListener("mouseover", () => {
	if (about.classList.contains("active")) {
		about.classList.remove("active");
		aboutContent.style.display = "none";
	}
	offeringContent.style.display = "block";
	offering.classList.add("active");
});
offering.addEventListener("click", () => {
	offeringContent.style.display = "none";
	offering.classList.remove("active");
});

// Hamburger menu
const hammyDD = document.querySelector(".hammy-dd");
const faX = document.querySelector(".fa-x");
const hamburgerIcon = document.querySelector(".fa-bars");

hamburgerIcon.addEventListener("click", () => {
	hammyDD.style.display = "block";
	hamburgerIcon.classList.add("active");
	faX.classList.add("active");
});
faX.addEventListener("click", () => {
	hammyDD.style.display = "none";
	hamburgerIcon.classList.remove("active");
	faX.classList.remove("active");
});

// Individual Menu DD
const aboutMenu = document.querySelector(
	".hammy-dd ul.father-ul li.father-about"
);
const hamAboutDD = document.querySelector(".ham-about-dd");

aboutMenu.addEventListener("click", () => {
	aboutMenu.classList.toggle("active");
	hamAboutDD.classList.toggle("activate");
});

const offeringMenu = document.querySelector(
	".hammy-dd ul.father-ul li.father-offering"
);
const hamOfferingDD = document.querySelector(".ham-offering-dd");

offeringMenu.addEventListener("click", () => {
	offeringMenu.classList.toggle("active");
	hamOfferingDD.classList.toggle("activate");
});
