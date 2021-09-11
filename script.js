
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

    const closePops = document.getElementsByClassName('projects-pop');
    const closeBtns = document.getElementsByClassName('close');
    
    Array.from(closeBtns).forEach(function(closeBtn, i) {
      closeBtn.onclick = function () {
         closePops[i].style.display = "none";
       }
    });


    // open menu-cover

    function ShowMenu() {
      var y = document.getElementById("menu-cover");
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
    }

    // change questions - about me

    const question = document.getElementsByClassName('about-left-lg-question');
    const picture = document.getElementsByClassName('question-pic');
    const answer = document.getElementsByClassName('about-right-text-lg');
    
    Array.from(question).forEach(function(change, i) {
      change.onclick = function () {
         picture[i].style.display = "block";
         answer[i].style.display = "block";
       }
    });