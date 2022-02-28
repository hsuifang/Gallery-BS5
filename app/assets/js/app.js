console.log("app");

const cartBtn = document.getElementById("js-cart-btn");
const cartField = document.getElementById("js-cart");

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (cartField.classList.contains("show")) {
    cartField.classList.remove("show");
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
  } else {
    cartField.classList.add("show");
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  }
});
