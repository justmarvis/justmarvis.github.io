// Typing effect for "Rating: 4.6"
const introText = "Rating: 4.6";
const introElement = document.getElementById('rating');
let charIndex = 0;

function type() {
  if (charIndex < introText.length) {
    introElement.innerHTML += introText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  }
}

type();

// IntersectionObserver callback for animated elements
function handleAnimatedIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target); // Stop observing once animated
      }
  });
}

// IntersectionObserver callback for web animation elements
function handleWebIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('web')) {
          entry.target.classList.add('web');
          observer.unobserve(entry.target); // Stop observing once animated
      }
  });
}

// Create IntersectionObserver instances
const animatedObserver = new IntersectionObserver(handleAnimatedIntersection, { threshold: 0.1 });
const webObserver = new IntersectionObserver(handleWebIntersection, { threshold: 0.1 });

// Observe the animated elements
animatedObserver.observe(document.getElementById('loadElement'));
animatedObserver.observe(document.getElementById('loadElement1'));
animatedObserver.observe(document.getElementById('loadElement2'));
animatedObserver.observe(document.getElementById('loadElement3'));
animatedObserver.observe(document.getElementById('loadElement4'));
animatedObserver.observe(document.getElementById('loadElement5'));
animatedObserver.observe(document.getElementById('loadElement6'));
animatedObserver.observe(document.getElementById('loadElement7'));
animatedObserver.observe(document.getElementById('loadElement8'));

// Observe the web animation element
webObserver.observe(document.getElementById('web'));