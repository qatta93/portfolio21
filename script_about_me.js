

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

    // change questions - about me

        // add selected class to the active button

        const chooseBtns = document.getElementsByClassName('about-question');
        const chooseHeaders = document.getElementsByClassName('question-header');
        const chooseTxts = document.getElementsByClassName('question-add');
        const pictures = document.getElementsByClassName('question-pic');
        const answers = document.getElementsByClassName('about-text');
        
        Array.from(chooseBtns).forEach(function(chooseBtn, i) {
          chooseBtn.onclick = function () {
            chooseBtn.classList.add("question-selected");
            chooseHeaders[i].classList.add("question-selected-header");
            chooseTxts[i].classList.add("question-selected-add");
            pictures[i].style.display = "block";
            answers[i].style.display = "block";

            for (var j = 0; j < chooseBtns.length; j++) {
              if(i != j) {
                chooseBtns[j].classList.remove("question-selected");
                chooseHeaders[j].classList.remove("question-selected-header");
                chooseTxts[j].classList.remove("question-selected-add");

                pictures[j].style.display = "none";
                answers[j].style.display = "none";
              }
            }
           }
        });