const homeBtn = document.querySelector("#homeBtn")
const home = document.querySelector("#home")
const aboutBtn = document.querySelector("#aboutBtn")
const about = document.querySelector("#about")
const productsBtn = document.querySelector("#productsBtn")
const products = document.querySelector("#products")
const newsBtn = document.querySelector("#newsBtn")
const news = document.querySelector("#news")
const contactBtn = document.querySelector("#contactBtn")
const contact = document.querySelector("#contact")

homeBtn.addEventListener("click", () => {
    home.scrollIntoView(true)
})
aboutBtn.addEventListener("click", () => {
    about.scrollIntoView(true)
})
productsBtn.addEventListener("click", () => {
    products.scrollIntoView(true)
})
newsBtn.addEventListener("click", () => {
    news.scrollIntoView(true)
})
contactBtn.addEventListener("click", () => {
    contact.scrollIntoView(true)
})

const currentYearSpan = document.querySelector(".currentYear");
const currentYear = new Date().getFullYear();
currentYearSpan.append(currentYear);