
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
function res() {
  window.open('https://cdn.glitch.global/20f7db08-2c65-491e-87a0-f660f15456ba/Marvis%20Igbineweka%20Resume%20_%20CV%20(1).pdf?v=1728879424490', '_blank');
}
function msg() {
  window.open('https://www.linkedin.com/in/marvis-igbineweka?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
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

