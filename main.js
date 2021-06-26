let taskBar = document.querySelector(".taskbar");
let startMenu = document.querySelector(".startmenu");
taskBar.addEventListener("click", function () {
   if(startMenu.style.bottom == "50px"){
    startMenu.style.bottom = "-655px";
   }else{
    startMenu.style.bottom = "50px";
   }
});