const introText = "I am a diligent graduate from Brigham Young University in the United States, who graduated and now building a career in Full-Stack Web Development. With a keen eye for detail and a passion for crafting seamless digital experiences, I learn top thrive in the ever-evolving landscape of technology.";

const introElement = document.getElementById('intro');
let charIndex = 0;

function type() {
  if (charIndex < introText.length) {
    introElement.innerHTML += introText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  }
}

type();