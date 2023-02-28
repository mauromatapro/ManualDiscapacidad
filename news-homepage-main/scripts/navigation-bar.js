const navButton = document.getElementById("nav-button");
const navigation = document.getElementById("navigation");
const barContainer = document.getElementById("bar-container");
const closeButton = document.getElementById("close-bar");
const navItems = document.getElementById("nav-menu").children;
const header = document.getElementsByTagName("header")

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
const acordeon = document.getElementsByClassName('container');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}