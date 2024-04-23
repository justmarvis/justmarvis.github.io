const introText = "rating: 4.6";

const introElement = document.getElementById('rating');
let charIndex = 0;

function type() {
  if (charIndex < introText.length) {
    introElement.innerHTML += introText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  }
}

type();

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation class when element is in view
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target); // Stop observing once animated
      }
  });
}

// Create Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });

// Observe the target element
observer.observe(document.getElementById('loadElement'));
observer.observe(document.getElementById('loadElement1'));
observer.observe(document.getElementById('loadElement2'));
observer.observe(document.getElementById('loadElement3'));
observer.observe(document.getElementById('loadElement4'));
observer.observe(document.getElementById('loadElement5'));
observer.observe(document.getElementById('loadElement6'));
observer.observe(document.getElementById('loadElement7'));
observer.observe(document.getElementById('loadElement8'));