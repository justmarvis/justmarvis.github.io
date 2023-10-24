
// function myComment() {

    //declarations
    // let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    //   'November', 'December'];
    // let date = new Date();
    // let monthName = month_names[date.getMonth()];
  
    // variable assignments for user input
    // var name = document.getElementById('name').value;
    // var comment = document.getElementById('comment').value;
  
  
    // display testimonial
    // var Comment = "By "+name+" <br> "+comment+" <br> "+monthName+" "+date.getDate()+", "+date.getFullYear()+"";
  
  
    // document.getElementById('commentOut').innerHTML = Comment;
//   }
  
  
  // footer
//     let week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   let month_names = ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
//       'Nov', 'Dec'];
//   let date = new Date();
//   let weekname = week_names[date.getDay()];
//   let monthname = month_names[date.getMonth()];
  
//   const dateoutput = document.querySelector('#currentdate');
  
//   dateoutput.textContent = date.getDate() + " " + monthname + " " + date.getFullYear();



//viewport animation for hidden
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
const certElements = document.querySelectorAll('.cert')
hiddenElements.forEach((el) => observer.observe(el));
certElements.forEach((el) => observer.observe(el));
