
  const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

  function park() {
    var mydate = new Date();

    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    var park = document.getElementById("parkBanner").value
    
      if (daym = "Saturday") {
        var parkDisplay = print("park");
      }

      document.getElementById("parkBanner").innerHTMl = parkDisplay;
  }