

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

  const targetDiv5 = document.getElementById('pop-quiz');
  const btn5 = document.getElementById("project5");
  const btn6 = document.getElementById("project5-1");
  btn5.onclick, btn6.onclick = function () {
    targetDiv5.style.display = "block"
  }

  // const targetDiv6 = document.getElementById('pop-graphics');
  // const btn7 = document.getElementById("project6");
  // const btn8 = document.getElementById("project6-1");
  // btn7.onclick, btn8.onclick = function () {
  //   targetDiv6.style.display = "block"
  // }



    //close projects details

    const closePops = document.getElementsByClassName('projects-pop');
    const closeBtns = document.getElementsByClassName('close');
    
    Array.from(closeBtns).forEach(function(closeBtn, i) {
      closeBtn.onclick = function () {
         closePops[i].style.display = "none";
       }
    });



