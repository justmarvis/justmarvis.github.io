
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
function unix() {
  window.open('https://www.figma.com/design/kOQlHbC1ZjGSESFuyjhahu/Unix?t=Ok6B0D8hSUlHbWEu-1', '_blank');
}
function tne() {
  window.open('https://www.figma.com/design/RBo8ue2FiKveS3PViL6n42/ToneShow?t=Ok6B0D8hSUlHbWEu-1', '_blank');
}
function fas() {
  window.open('https://www.figma.com/design/wC1W4hyzM8I1BHX5ASMpyX/fashion?t=Ok6B0D8hSUlHbWEu-1', '_blank');
}
function mig() {
  window.open('https://www.figma.com/design/78TK3YYOU1UfNZifO87bBr/MIG?node-id=0-1&t=SuYg793DvfWtNZfO-1', '_blank');
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

