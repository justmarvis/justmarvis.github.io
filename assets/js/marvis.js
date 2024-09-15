// Typing text effect
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

// Intersection Observer to add animation class when elements are in view
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });

// Observe multiple elements
const elementsToObserve = [
  'loadElement', 'loadElement1', 'loadElement2', 'loadElement3', 
  'loadElement4', 'loadElement5', 'loadElement6', 'loadElement7', 
  'loadElement8'
];

elementsToObserve.forEach(id => {
  observer.observe(document.getElementById(id));
});

// Tooltip display
document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  const span = document.querySelector('.name');
  span.addEventListener('mouseenter', (e) => {
    const tooltipText = span.getAttribute('data-tooltip');
    tooltip.textContent = tooltipText;
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
    const rect = span.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
  });

  span.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
  });
});

// Prevent context menu and specific key shortcuts
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
  if (event.ctrlKey && (event.key === 's' || event.key === 'p')) {
    event.preventDefault();
  }
});

// Carousel functionality with touch support
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator span');
let currentIndex = 0;

function showItem(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    showItem(currentIndex);
  });
});

// Add touch events for swipe functionality
let startX;
carousel.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

carousel.addEventListener('touchmove', (event) => {
  if (!startX) return;
  const currentX = event.touches[0].clientX;
  const diffX = startX - currentX;

  if (diffX > 50) {
    // Swipe left
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
    startX = null;
  } else if (diffX < -50) {
    // Swipe right
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
    startX = null;
  }
});


// //intersection observer for project section animations
// document.addEventListener('DOMContentLoaded', function() {
//   const target = document.getElementById('animateMe');
  
//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               target.classList.remove('hidden'); // Remove hidden class
//               target.classList.add('animate'); // Add animate class to trigger transition
//               observer.unobserve(target); // Stop observing after the animation starts
//           }
//       });
//   }, {
//       threshold: 0.5 // Adjust this value as needed
//   });

//   observer.observe(target);
// });a

//repeat animation for project section animations
document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('animateMe');

  function restartAnimation() {
      // Remove the animation class to restart the animation
      element.classList.remove('animate');
      void element.offsetWidth; // Trigger reflow
      element.classList.add('animate');
  }

  // Initial animation start
  restartAnimation();

  // Repeat animation every 5 seconds
  setInterval(restartAnimation, 2000);
});

document.addEventListener('DOMContentLoaded', function () {
  let startX;
  const carousel = document.querySelector('.carousel-inner');
  const radioButtons = document.querySelectorAll('.carousel-open');
  const totalItems = radioButtons.length;

  carousel.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchmove', function (e) {
      if (!startX) return;

      let moveX = e.touches[0].clientX;
      let diffX = startX - moveX;

      if (diffX > 50) {
          nextSlide();
          startX = null;
      } else if (diffX < -50) {
          prevSlide();
          startX = null;
      }
  });

  function nextSlide() {
      let checkedIndex = Array.from(radioButtons).findIndex(rb => rb.checked);
      radioButtons[(checkedIndex + 1) % totalItems].checked = true;
  }

  function prevSlide() {
      let checkedIndex = Array.from(radioButtons).findIndex(rb => rb.checked);
      radioButtons[(checkedIndex - 1 + totalItems) % totalItems].checked = true;
  }
});

<<<<<<< HEAD
=======
//close popup
function closePopup() {
  document.querySelector('.popup').style.display = 'none';
}


>>>>>>> e8ea876 (first commit)

