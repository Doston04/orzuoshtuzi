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
    headerInfo.style.color = blue
    hamburgerSpans.forEach(hamburgerSpan => {
      hamburgerSpan.style.backgroundColor = blue
    })
    hamburgerText.style.color = blue
    clicked = false
  } else {
    hamburgerText.innerHTML = "Yopish"
    header.style.background = blue
    headerInfo.style.color = white
    hamburgerSpans.forEach(hamburgerSpan => {
      hamburgerSpan.style.backgroundColor = white
    })
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