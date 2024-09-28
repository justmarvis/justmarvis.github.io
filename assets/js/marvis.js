
//open pages
function about() {
  window.location.href = './assets/html/about.html';
}
function gallery() {
  window.open('https://www.behance.net/marvisigbinew1', '_blank');
}
function proj3() {
  window.open('https://www.behance.net/marvisigbinew1', '_blank');
}
function projOne() {
  window.open('https://www.figma.com/design/78TK3YYOU1UfNZifO87bBr/MIG?node-id=0-1&t=0z3oBRiikQ9DoYc7-1', '_blank');
}
function projTwo() {
  window.open('https://www.figma.com/design/RBo8ue2FiKveS3PViL6n42/ToneShow?node-id=0-1&t=yq8aVNIfY1T38qjQ-1', '_blank');
}
function projFour() {
  window.open('https://www.figma.com/design/9fiHrekVI947dFeKUDNFeD/GameHub?node-id=0-1&t=o3GPHmwkTnAd2Xye-1', '_blank');
}

//jump to section through links
function services() {
  document.getElementById('serviceTarget').scrollIntoView({ behavior: 'smooth' });
}
function reviews() {
  document.getElementById('reviewsTarget').scrollIntoView({ behavior: 'smooth' });
}
function projects() {
  document.getElementById('projectTarget').scrollIntoView({ behavior: 'smooth' });
}

//close popup
function closePopup() {
  document.querySelector('.popup').style.display = 'none';
}

