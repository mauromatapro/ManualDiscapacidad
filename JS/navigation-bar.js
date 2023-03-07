const navButton = document.getElementById("nav-button");
const navigation = document.getElementById("navigation");
const barContainer = document.getElementById("bar-container");
const closeButton = document.getElementById("close-bar");
const navItems = document.getElementById("nav-menu").children;
const header = document.getElementsByTagName("header");
 
 

Array.from(navItems).forEach((item) => item.addEventListener("click", close))
navButton.addEventListener("click", open)
closeButton.addEventListener("click", close)

window.addEventListener("resize", () => {
  barContainer.style.transform = `translateX(0%)`
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header[0].style.backgroundColor = "var(--off-white-opac-50)"
  } else {
    header[0].style.backgroundColor = ""
  }
})

function open() {
  navButton.style.transform = `rotateZ(-90deg)`;
  navigation.style.display = "block";
  barContainer.style.transform = "translateX(0%)"
}

function close() {
  if (document.documentElement.clientWidth < 768) {
    navButton.style.transform = `rotateZ(0deg)`;
    closeButton.style.transform = `rotateZ(90deg)`;
    barContainer.style.transform = `translateX(100%)`
    setTimeout(() => {
      navigation.style.display = "";
    }, 200)
  }
} 


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
 
