
var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
})


function ShowDiv() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  //show projects details after clicking 
  
  const targetDiv1 = document.getElementById('pop-homia');
  const btn1 = document.getElementById("project1");
  btn1.onclick = function () {
    targetDiv1.style.display = "block"
  }

  const targetDiv2 = document.getElementById('pop-scandy');
  const btn2 = document.getElementById("project2");
  btn2.onclick = function () {
    targetDiv2.style.display = "block"
  }

  const targetDiv3 = document.getElementById('pop-portfolio');
  const btn3 = document.getElementById("project3");
  btn3.onclick = function () {
    targetDiv3.style.display = "block"
  }

  const targetDiv4 = document.getElementById('pop-budget');
  const btn4 = document.getElementById("project4");
  btn4.onclick = function () {
    targetDiv4.style.display = "block"
  }


    //close projects details

    const closePop = document.getElementsByClassName('projects-pop');
    const closeBtn = document.getElementsByClassName('close');
    closeBtn.onclick = function () {
      closePop.style.display = "none";
    }

    // open menu-cover

    function ShowMenu() {
      var y = document.getElementById("menu-cover");
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
    }