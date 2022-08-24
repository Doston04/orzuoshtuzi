const hamburgerDiv = document.querySelector(".hamburger")
const hamburgerSpans = document.querySelectorAll(".hamburger__span")
const span1 = document.querySelector("#span1")
const span2 = document.querySelector("#span2")
const span3 = document.querySelector("#span3")
const mobileHeader = document.querySelector(".heroMobileHeader")
const body = document.querySelector(".body")
const mobileHeader__inner = document.querySelector(".mobileHeader__inner")

let clicked = false
const toggleFunction = () => {
  if (clicked) {
    mobileHeader.style.display = "none"
    clicked = false
  } else {
    mobileHeader.style.display = "flex"
    clicked = true
  }
}

hamburgerDiv.addEventListener("click", () => {
  mobileHeader.classList.toggle("hidden")
  span1.classList.toggle("rotate45deg")
  span2.classList.toggle("span2-hidden")
  span3.classList.toggle("rotate-45deg")
  body.classList.toggle("overflow-y-hidden")
  toggleFunction()
})

if (window.innerWidth <= 768) {
  mobileHeader__inner.classList.add("container")
} else {
  mobileHeader.classList.remove("container")
}

const homeBtn = document.querySelector("#homeBtn")
const home = document.querySelector("#home")
const aboutBtn = document.querySelector("#aboutBtn")
const about = document.querySelector("#about")
const productsBtn = document.querySelector("#productsBtn")
const productsSec = document.querySelector("#products")
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
  productsSec.scrollIntoView(true)
})
newsBtn.addEventListener("click", () => {
  news.scrollIntoView(true)
})
contactBtn.addEventListener("click", () => {
  contact.scrollIntoView(true)
})


const products = document.querySelectorAll(".productImageDiv")
const productMinis = document.querySelectorAll(".productMini")
const activeProductTitles = document.querySelectorAll(".activeProduct__title")

productMinis.forEach((productMini, index) => {
  productMini.addEventListener("click", () => {
    products.forEach(product => {
      product.classList.remove("isActive")
    });
    productMinis.forEach(productMini => {
      productMini.classList.remove("activeProductMini")
    });
    activeProductTitles.forEach(title => {
      title.classList.remove("isActive")
    });

    products[index].classList.add("isActive");
    productMinis[index].classList.add("activeProductMini")
    activeProductTitles[index].classList.add("isActive")
  });
});

const mobileMiniProducts = document.querySelectorAll(".mobileMiniProduct")
const miniActiveProductImageDivs = document.querySelectorAll(".miniActiveProductImageDiv")
const miniTitles = document.querySelectorAll(".miniTitle")

mobileMiniProducts.forEach((product, index) => {
  product.addEventListener("click", () => {
    mobileMiniProducts.forEach(mobileProduct => {
      mobileProduct.classList.remove("activeProductMini");
    })
    miniTitles.forEach(title => {
      title.classList.remove("isActive");
    });
    miniActiveProductImageDivs.forEach(miniActiveProductImageDiv => {
      miniActiveProductImageDiv.classList.remove("isActive");
    });

    mobileMiniProducts[index].classList.add("activeProductMini")
    miniActiveProductImageDivs[index].classList.add("isActive")
    miniTitles[index].classList.add("isActive")
  });
});

const currentYearSpan = document.querySelector(".currentYear");
const currentYear = new Date().getFullYear();
currentYearSpan.append(currentYear);