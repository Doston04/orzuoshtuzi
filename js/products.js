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

const callBtn = document.querySelectorAll(".callBtn__inner")
const modal = document.querySelector(".modal")
const modalContent = document.querySelector(".modal__inner")

callBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex"
  })
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none"
  } else if (e.target == modalContent) {
    modal.style.display = "flex"
  }
});

