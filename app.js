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
