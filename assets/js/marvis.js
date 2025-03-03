
//pages
function about() {
  window.location.href = './assets/html/about.html';
}

//socials
function threads() {
  window.open('https://www.threads.net/@uxstudiio', '_blank');
}
function behance() {
  window.open('https://www.behance.net/marvisigbinew1', '_blank');
}
function linkedin() {
  window.open('https://www.linkedin.com/in/marvis-igbineweka/', '_blank');
}
function inst() {
  window.open('https://www.instagram.com/marvis.ig/', '');
}
function studio() {
  window.open('https://www.instagram.com/uxstudiio/', '');
}

//others
function tne() {
  window.open('https://www.figma.com/design/RBo8ue2FiKveS3PViL6n42/ToneShow?t=Ok6B0D8hSUlHbWEu-1', '_blank');
}
function mig() {
  window.open('https://www.figma.com/design/78TK3YYOU1UfNZifO87bBr/MIG?node-id=0-1&t=SuYg793DvfWtNZfO-1', '_blank');
}
function res() {
  window.open('https://cdn.glitch.global/20f7db08-2c65-491e-87a0-f660f15456ba/Marvis%20Igbineweka%20Resume.pdf?v=1731230431047', '_blank');
}
function pin() {
  window.open('https://pin.it/6RZnjAZFm', '');
}
function cert() {
  const certWindow = window.open('', '_blank', 'width=800,height=600');
  certWindow.document.write(`
    <html>
      <head>
        <title>Certificate Preview</title>
        <style>
          body {
            margin: 0;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #000;
          }
          img {
            max-width: 100%;
            max-height: 100%;
            pointer-events: none; /* Disable interactions like right-click */
            user-select: none; /* Prevent text/image selection */
          }
        </style>
      </head>
      <body>
        <img src="https://cdn.glitch.global/20f7db08-2c65-491e-87a0-f660f15456ba/UI_UX%20Design%20Expert%20Master%20Certificate.jpg?v=1728869615586" 
             alt="Certificate" />
      </body>
    </html>
  `);
  certWindow.document.close(); // Ensures the document is properly rendered.
}


// jump to section through links
function faq() {
  document.getElementById('faqTarget').scrollIntoView({ behavior: 'smooth' });
}

function reviews() {
  document.getElementById('reviewsTarget').scrollIntoView({ behavior: 'smooth' });
}

//popups
function showPopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'block';
}
function showPopupMobile() {
  const popup = document.querySelector('.popupMobile');
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';
}
function closePopupMobile() {
  const popup = document.querySelector('.popupMobile');
  popup.style.display = 'none';
}

function showPopup1() {
  const popup = document.querySelector('.popup1');
  popup.style.display = 'block';
}
function showPopupMobile1() {
  const popup = document.querySelector('.popupMobile1');
  popup.style.display = 'block';
}

function closePopup1() {
  const popup = document.querySelector('.popup1');
  popup.style.display = 'none';
}
function closePopupMobile1() {
  const popup = document.querySelector('.popupMobile1');
  popup.style.display = 'none';
}

function showPopup4() {
  const popup = document.querySelector('.popup4');
  popup.style.display = 'block';
}
function showPopupMobile3() {
  const popup = document.querySelector('.popupMobile3');
  popup.style.display = 'block';
}

function closePopup4() {
  const popup = document.querySelector('.popup4');
  popup.style.display = 'none';
}
function closePopupMobile3() {
  const popup = document.querySelector('.popupMobile3');
  popup.style.display = 'none';
}



//Position title animation
const textElement = document.getElementById('textSwitcher');
    let toggle = true;

    setInterval(() => {
        // Start fade-out effect
        textElement.style.opacity = '0';

        setTimeout(() => {
            // Switch text after fade-out
            textElement.textContent = toggle ? "FRONT-END" : "UX/UI DESIGNER";
            toggle = !toggle;

            // Start fade-in effect
            textElement.style.opacity = '1';
        }, 900); // Match the fade-out duration (0.9s)
    }, 5000); // Switch every 5 seconds


    // faq dropdown
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".quest").forEach((question) => {
          question.addEventListener("click", function () {
              const dropdown = this.querySelector(".faqdrop");
              const icon = this.querySelector(".drop"); // Select the drop icon
  
              if (dropdown) {
                  dropdown.classList.toggle("active");
                  
                  // Toggle the opacity of the drop icon
                  if (dropdown.classList.contains("active")) {
                      icon.style.opacity = "0"; // Hide icon
                  } else {
                      icon.style.opacity = "1"; // Show icon
                  }

                  // Smoothly fade out or fade in the icon
                icon.style.transition = "opacity 0.3s ease";
                icon.style.opacity = dropdown.classList.contains("active") ? "0" : "1";
              }
          });
      });
  });

  //position animation
  document.addEventListener("DOMContentLoaded", function () {
    const text = "UI/UX and Product Designer"; // Text to be typed
    const speed = 100; // Typing speed (ms)
    let i = 0;
    const typeElement = document.getElementById("type");

    function typeWriter() {
        if (i < text.length) {
            typeElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {}
    }

    typeWriter(); // Start animation
    
});

//position animation
document.addEventListener("DOMContentLoaded", function () {
  const text = "UI/UX and Product Designer"; // Text to be typed
  const speed = 100; // Typing speed (ms)
  let i = 0;
  const typeElement = document.getElementById("typeSmall");

  function typeWriter() {
      if (i < text.length) {
          typeElement.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      } else {}
  }

  typeWriter(); // Start animation
  
});

// In view animation
// Select all elements with the class 'opt'
const elements = document.querySelectorAll('.opt');

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the 'in-view' class when the element is in the viewport
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.5, // Trigger when 10% of the element is visible
});

// Observe each element
elements.forEach((el) => observer.observe(el));

// Cursor follow circle
// const circle = document.getElementById("cursorCircle");
// let mouseX = 0, mouseY = 0;
// let circleX = 0, circleY = 0;
// const delay = 0.1;
// const circleSize = 15;

// document.addEventListener("mousemove", (e) => {
//     mouseX = e.clientX + window.scrollX;
//     mouseY = e.clientY + window.scrollY;
// });

// function animate() {
//     circleX += (mouseX - circleX) * delay;
//     circleY += (mouseY - circleY) * delay;
    
//     circle.style.left = `${circleX - circleSize / 2}px`;
//     circle.style.top = `${circleY - circleSize / 2}px`;
    
//     requestAnimationFrame(animate);
// }

// animate();

// Copy text
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.follow.email');
  const tooltip = document.createElement('div');

  tooltip.innerText = "Send Email";
  tooltip.classList.add('tooltip');

  document.body.appendChild(tooltip); // Ensure it's added to the DOM

  console.log("Tooltip added:", tooltip); // Debugging step

  container.addEventListener('mouseenter', function(event) {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  container.addEventListener('mouseleave', function() {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
  });
  // Copy email on click
  container.addEventListener('click', function() {
      const email = 'marvisdev98@gmail.com';
      
      navigator.clipboard.writeText(email).then(() => {
          alert('Email copied to clipboard!');
      }).catch(err => {
          console.error('Failed to copy: ', err);
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.fullName.opt.github');
  const tooltip = document.createElement('div');
  
  // Set tooltip text and class
  tooltip.innerText = "Invite User";
  tooltip.classList.add('tooltip');

  // Append tooltip to body
  document.body.appendChild(tooltip);

  // Show tooltip on hover
  container.addEventListener('mouseenter', function(event) {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Move tooltip with mouse
  container.addEventListener('mousemove', function(event) {
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Hide tooltip on mouse leave
  container.addEventListener('mouseleave', function() {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
  });

  // Copy email on click
  container.addEventListener('click', function() {
      const email = 'justmarvis';
      
      navigator.clipboard.writeText(email).then(() => {
          alert('Email copied to clipboard!');
      }).catch(err => {
          console.error('Failed to copy: ', err);
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.fullName.opt.figma');
  const tooltip = document.createElement('div');
  
  // Set tooltip text and class
  tooltip.innerText = "Invite User";
  tooltip.classList.add('tooltip');

  // Append tooltip to body
  document.body.appendChild(tooltip);

  // Show tooltip on hover
  container.addEventListener('mouseenter', function(event) {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Move tooltip with mouse
  container.addEventListener('mousemove', function(event) {
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Hide tooltip on mouse leave
  container.addEventListener('mouseleave', function() {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
  });

  // Copy email on click
  container.addEventListener('click', function() {
      const email = 'marvinomeccozi@gmail.com';
      
      navigator.clipboard.writeText(email).then(() => {
          alert('Email copied to clipboard!');
      }).catch(err => {
          console.error('Failed to copy: ', err);
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.action.opt.email');
  const tooltip = document.createElement('div');
  
  // Set tooltip text and class
  tooltip.innerText = "Send Email";
  tooltip.classList.add('tooltip');

  // Append tooltip to body
  document.body.appendChild(tooltip);

  // Show tooltip on hover
  container.addEventListener('mouseenter', function(event) {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Move tooltip with mouse
  container.addEventListener('mousemove', function(event) {
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Hide tooltip on mouse leave
  container.addEventListener('mouseleave', function() {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
  });

  // Copy email on click
  container.addEventListener('click', function() {
      const email = 'marvisdev98@gmail.com';
      
      navigator.clipboard.writeText(email).then(() => {
          alert('Email copied to clipboard!');
      }).catch(err => {
          console.error('Failed to copy: ', err);
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.action.opt.github');
  const tooltip = document.createElement('div');
  
  // Set tooltip text and class
  tooltip.innerText = "Invite User";
  tooltip.classList.add('tooltip');

  // Append tooltip to body
  document.body.appendChild(tooltip);

  // Show tooltip on hover
  container.addEventListener('mouseenter', function(event) {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Move tooltip with mouse
  container.addEventListener('mousemove', function(event) {
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Hide tooltip on mouse leave
  container.addEventListener('mouseleave', function() {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
  });

  // Copy email on click
  container.addEventListener('click', function() {
      const email = 'justmarvis';
      
      navigator.clipboard.writeText(email).then(() => {
          alert('Email copied to clipboard!');
      }).catch(err => {
          console.error('Failed to copy: ', err);
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.action.opt.figma');
  const tooltip = document.createElement('div');
  
  // Set tooltip text and class
  tooltip.innerText = "Invite User";
  tooltip.classList.add('tooltip');

  // Append tooltip to body
  document.body.appendChild(tooltip);

  // Show tooltip on hover
  container.addEventListener('mouseenter', function(event) {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Move tooltip with mouse
  container.addEventListener('mousemove', function(event) {
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
  });

  // Hide tooltip on mouse leave
  container.addEventListener('mouseleave', function() {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
  });

  // Copy email on click
  container.addEventListener('click', function() {
      const email = 'marvinomeccozi@gmail.com';
      
      navigator.clipboard.writeText(email).then(() => {
          alert('Email copied to clipboard!');
      }).catch(err => {
          console.error('Failed to copy: ', err);
      });
  });
});

// Scroll animation
// Section three
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".choose");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              section.classList.add("show");
          }
      });
  }, { threshold: 0.3 });

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".why");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              section.classList.add("show");
          }
      });
  }, { threshold: 0.3 });

  observer.observe(section);
});

// Section Two
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".bigSean");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              section.classList.add("show");
          }
      });
  }, { threshold: 0.3 });

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".bigBen");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              section.classList.add("show");
          }
      });
  }, { threshold: 0.3 });

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".bigD");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              section.classList.add("show");
          }
      });
  }, { threshold: 0.3 });

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".bigRue");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              section.classList.add("show");
          }
      });
  }, { threshold: 0.3 });

  observer.observe(section);
});







