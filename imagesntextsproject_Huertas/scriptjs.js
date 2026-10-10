// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (10 images)
const slides = [
	{ src: 'images/Happiness_1.png', alt: 'snuggling', caption: 'One form of happiness is the act of snuggling'},
	{ src: 'images/Happiness_2.png', alt: 'snacking', caption: 'Even though temporary, eating snacks can be quite filling'},
	{ src: 'images/Happiness_3.png', alt: 'chilling', caption: 'Happiness can take no effort, chilling is always good for the soul' },
	{ src: 'images/Happiness_4.png', alt: 'sleeping', caption: 'Getting a great amount of sleep, can be so peaceful'},
	{src: 'images/Happiness_5.png', alt: 'writing', caption: 'Sometimes people enjoy journaling, and keeping tabs on what makes them happy'},
	{src: 'images/Happiness_6.png', alt: 'hanging', caption: 'Hanging out with friends and family can make people happy'},
	{src: 'images/Happiness_7.png', alt: 'watching', caption: 'Tons of people are filled with joy when watching something or someone they love'},
	{src: 'images/Happiness_8.png', alt: 'training', caption: 'Another form of happiness is when people train in order to achieve their goals'},
	{src: 'images/Happiness_9.png', alt: 'driving', caption: 'Sometimes, happiness can come in the form of doing an everyday activity'},
	{src: 'images/Happiness_10.png', alt: 'teaching', caption: 'Some passions can take form of teaching others, seeing growth can bring happiness'},
];

let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
	const slide = slides[index];
	mainImage.src = slide.src;
	mainImage.alt = slide.alt;
	caption.textContent = slide.caption;
}
// Advance on click
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);
// JavaScript Document