

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



