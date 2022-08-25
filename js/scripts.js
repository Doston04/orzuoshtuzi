const mobileHeader = document.querySelector(".mobileHeader")
const header = document.querySelector("header")
const hamburgerDiv = document.querySelector(".hamburgerDiv")
const hamburgerSpans = document.querySelectorAll(".hamburger__span")
const span1 = document.querySelector("#span1")
const span2 = document.querySelector("#span2")
const span3 = document.querySelector("#span3")
const hamburgerText = document.querySelector(".hamburger__text")
const headerInfo = document.querySelector(".header__info")
const languageChanger = document.querySelector(".languageChanger")
const languagesDiv = document.querySelector(".languagesDiv")
const body = document.querySelector(".body")
const normalLogo = document.querySelector(".normalLogo")
const mobileLogo = document.querySelector(".mobileLogo")
const blue = "#33348E"
const white = "#FFFFFF"

const currentYearSpan = document.querySelector(".currentYear");
const currentYear = new Date().getFullYear();
currentYearSpan.append(currentYear);

let clicked = false
const toggleText = () => {
  if (clicked) {
    hamburgerText.innerHTML = "Menu"
    header.style.background = white
    header.style.boxShadow = "0 15px 45px rgba(0, 0, 0, 0.1)"
    headerInfo.style.color = blue
    hamburgerSpans.forEach(hamburgerSpan => {
      hamburgerSpan.style.backgroundColor = blue
    })
    mobileLogo.style.display = "none"
    normalLogo.style.display = "inline"
    hamburgerText.style.color = blue
    clicked = false
  } else {
    hamburgerText.innerHTML = "Yopish"
    header.style.background = blue
    header.style.boxShadow = "none"
    headerInfo.style.color = white
    hamburgerSpans.forEach(hamburgerSpan => {
      hamburgerSpan.style.backgroundColor = white
    })
    mobileLogo.style.display = "inline"
    normalLogo.style.display = "none"
    hamburgerText.style.color = white
    clicked = true
  }
}

hamburgerDiv.addEventListener("click", () => {
  mobileHeader.classList.toggle("hidden")
  span1.classList.toggle("rotate45deg")
  span2.classList.toggle("span2-hidden")
  span3.classList.toggle("rotate-45deg")
  body.classList.toggle("overflow-y-hidden")
  toggleText()
})

if (window.innerWidth > 768) {
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.top = "-128px";
    } else {
      header.style.top = "0";
    }
    lastScrollTop = scrollTop
  })
}

var element = document.querySelector("#phoneInput")
var phoneMask = IMask(element, {
  mask: '+{998}(00)000-00-00',
  lazy: false,
});

