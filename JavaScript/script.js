// Experience div left and right button function 
function skillsLeft() {
    document.getElementById("slider-1").style.display="none";
    document.getElementById("slider-2").style.display="grid";
    document.getElementById("slider-3").style.display="none";
}
function educationRight() {
    document.getElementById("slider-1").style.display="grid";
    document.getElementById("slider-2").style.display="none";
    document.getElementById("slider-3").style.display="none";
}

// Skills div left and right button function 
function educationLeft() {
    document.getElementById("slider-1").style.display="grid";
    document.getElementById("slider-2").style.display="none";
    document.getElementById("slider-3").style.display="none";
}
function experienceRight() {
    document.getElementById("slider-1").style.display="none";
    document.getElementById("slider-2").style.display="none";
    document.getElementById("slider-3").style.display="grid";
}


// education div left and right button function 
function experienceLeft() {
    document.getElementById("slider-1").style.display="none";
    document.getElementById("slider-2").style.display="none";
    document.getElementById("slider-3").style.display="grid";
}
function skillsRight() {
    document.getElementById("slider-1").style.display="none";
    document.getElementById("slider-2").style.display="grid";
    document.getElementById("slider-3").style.display="none";
}




// menu bar script 
// hamburger = document.querySelector(".menu-bar");
//         nav = document.querySelector(".navbar");
//         hamburger.onclick = function() {
//             nav.classList.toggle("active");
//         }


function toggleMenu() {
    var menuBox = document.getElementById('navbar');    
    var animation1 = document.getElementById('animation1');    
    var animation2 = document.getElementById('animation2');    
    var animation3 = document.getElementById('animation3');    
    if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
      menuBox.style.display = "none";
    //   animation2.style.visibility = "visible";
      animation1.style.transform = "none ";
      animation2.style.transform = "none ";
      animation3.style.transform = "none ";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "block";
      animation1.style.transform = "translate(0px ,10px) rotate(45deg)";
      animation3.style.transform = "translate(0px ,-7px) rotate(-45deg)";
      animation2.style.transform = "translate(-500px ,0px) ";
    //   animation2.style.visibility = "hidden";


    }
  }

  function closeIt() {
    var menuBox = document.getElementById('navbar');    
    menuBox.style.display = "none";

  }



  // text animation script 

  const text = document.querySelector(".animationText");

  const textLoad = () => {
      setTimeout(() => {
          text.textContent = "Front-End Developer";
      }, 0);
      setTimeout(() => {
          text.textContent = "Back-End Developer";
      }, 4000);
      setTimeout(() => {
          text.textContent = "YouTuber";
      }, 8000); //1s = 1000 milliseconds
  }

  textLoad();
  setInterval(textLoad, 12000);

let education = document.getElementById("changeBtn1");
let skills = document.getElementById("changeBtn2");
let Experience = document.getElementById("changeBtn3");

education.style.color = "#07E4ff";

education.addEventListener("click",  changeP1) ;

function changeP1() {
    document.getElementById("Education").style.display = "block";
    document.getElementById("Skills").style.display = "none";
    document.getElementById("Experience").style.display = "none";
    education.style.color = "#07E4ff";
    skills.style.color = "#ffffff";
    Experience.style.color = "#ffffff";
}

skills.addEventListener("click",  changeP2) ;

function changeP2() {
    document.getElementById("Education").style.display = "none";
    document.getElementById("Skills").style.display = "block";
    document.getElementById("Experience").style.display = "none";
    education.style.color = "#ffffff";
    skills.style.color = "#07E4ff";
    Experience.style.color = "#ffffff";
}

Experience.addEventListener("click",  changeP3) ;

function changeP3() {
    document.getElementById("Education").style.display = "none";
    document.getElementById("Skills").style.display = "none";
    document.getElementById("Experience").style.display = "block";
    education.style.color = "#ffffff";
    skills.style.color = "#ffffff";
    Experience.style.color = "#07E4ff";
}
// education.click(function () {
//     document.getElementById("Education").style.display = "block";
//     education.style.color = "#07E4ff";
// })