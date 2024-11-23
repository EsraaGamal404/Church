
  let menulist = document.getElementById("menulist")
  menulist.style.maxHeight = "0px";

  function togglemenu(){
    if(  menulist.style.maxHeight == "0px"){
      menulist.style.maxHeight ="300px";
    }
    else{
      menulist.style.maxHeight ="0px";
    }
  }



  window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
nav.classList.toggle("sticky",window.scrollY)
  })



 