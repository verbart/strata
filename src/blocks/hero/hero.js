// Parallax factor (lower = more intense, higher = less intense).
const parallaxFactor = 20;
const heroElement = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  heroElement.style.backgroundPosition = `left ${(-1 * (window.scrollY / parallaxFactor))}px`;
});
