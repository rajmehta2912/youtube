var Menu = document.querySelector(".menu");
var sideBar = document.querySelector(".sidebar");
var Container = document.querySelector(".container");

Menu.onclick = function(){
    sideBar.classList.toggle("smallSidebar");
    Container.classList.toggle("Bigcontainer");
}


