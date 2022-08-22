const productTopBtn = document.querySelector("#productTopBtn")
const productInfoBtn = document.querySelector("#productInfoBtn")
const productImageBtn = document.querySelector("#productImageBtn")
const productTop = document.querySelector("#productTop")
const productInfo = document.querySelector("#productInfo")
const productImage = document.querySelector("#productImage")

productTopBtn.addEventListener("click", () => {
  productTop.scrollIntoView(true)
  productTopBtn.classList.add("activeSquare")
  productInfoBtn.classList.remove("activeSquare")
  productImageBtn.classList.remove("activeSquare")
})
productInfoBtn.addEventListener("click", () => {
  productInfo.scrollIntoView(true)
  productInfoBtn.classList.add("activeSquare")
  productTopBtn.classList.remove("activeSquare")
  productImageBtn.classList.remove("activeSquare")
})
productImageBtn.addEventListener("click", () => {
  productImage.scrollIntoView(true)
  productImageBtn.classList.add("activeSquare")
  productTopBtn.classList.remove("activeSquare")
  productInfoBtn.classList.remove("activeSquare")
})

const aboutProductSection = document.querySelector(".aboutProductSection")
const productNavigation = document.querySelector(".productNavigation")
const productMainInfo = document.querySelector(".productMainInfo")
const mainProduct = document.querySelector(".mainProduct")
console.log(productNavigation.scrollWidth, productMainInfo.scrollWidth);
console.log(mainProduct.scrollWidth);


// window.addEventListener("scroll", () => {
//   if (this.scrollY >= 460) {
//     productNavigation.style.cssText = `
//       position: absolute;
//       left: 20px;
//       top: ${window.scrollY - 480}px;
//     `
//     productMainInfo.style.cssText = `
//       position: absolute;
//       right: 20px;
//       top: ${window.scrollY - 480}px;
//     `
//     mainProduct.style.cssText = `
//       max-width: 640px;
//       margin: 0 auto;
//     `
//   } else {
//     productNavigation.style.position = "static"
//     productMainInfo.style.position = "static"
//   }
//   if (this.scrollY >= aboutProductSection.scrollHeight + 65) {
//     productMainInfo.style.cssText = `
//       bottom: 0;
//       top: inherit;
//     `
//   }
// })

