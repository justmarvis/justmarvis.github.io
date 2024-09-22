function openPage() {
  window.location.href = './assets/html/about.html';
}

function gallery() {
  window.open('https://www.behance.net/marvisigbinew1', '_blank');
}

//jump to section through links
function services() {
  document.getElementById('serviceTarget').scrollIntoView({ behavior: 'smooth' });
}
function reviews() {
  document.getElementById('reviewsTarget').scrollIntoView({ behavior: 'smooth' });
}

//close popup
function closePopup() {
  document.querySelector('.popup').style.display = 'none';
}

