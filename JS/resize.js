const img = document.getElementById("header-image")

window.addEventListener("resize",changeImg)

window.addEventListener("load", changeImg)

function changeImg(){
  if(document.documentElement.clientWidth >= 768){
    img.setAttribute("src", "assets/images/image-web-3-desktop.jpg")
  }else{
    img.setAttribute("src", "assets/images/image-web-3-mobile.jpg")
  }
}
