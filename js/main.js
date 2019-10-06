const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let state = false;

hamburger.addEventListener("click", () => {
  if(state === true) {
    navLinks.style.width = "0";
    state = false;
  }else {
    if(state === false){
      navLinks.style.width = "45vw";
      state = true;
    }
  }
});
// //Check if navbar is expanded or minimized and handle
// $('#navbar-toggle').click(function() {
//     if (state == "expanded") {
//         $('.sidebar').css('margin-left', '-180px');
//         state = "minimized";
//     } else {
//         if (state == "minimized") {
//             $('.sidebar').css('margin-left', '0px');
//             state = "expanded";
//         }
//     }
// })
//
//
// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }
//
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }
