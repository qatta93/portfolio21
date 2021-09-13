
var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
})

  //show side menu

function ShowDiv() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

    // open menu-cover

    function ShowMenu() {
      var y = document.getElementById("menu-cover");
      if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
    }

