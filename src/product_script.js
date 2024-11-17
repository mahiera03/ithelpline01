const productDisplayDiv = document.getElementById("productDisplay"),
  servicesDisplayDiv = document.getElementById("servicesDisplay"),
  service = document.getElementById("service"),
  product = document.getElementById("product"),
  disService = document.getElementById("disService"),
  disProduct = document.getElementById("disProduct");
function toggleDisplay(e, i, s, t) {
  (i.style.display = "none"),
    t.classList.remove("active"),
    (e.style.display = "flex"),
    s.classList.add("active");
}
servicesDisplayDiv.addEventListener("click", () => {
  toggleDisplay(service, product, servicesDisplayDiv, productDisplayDiv);
}),
  productDisplayDiv.addEventListener("click", () => {
    toggleDisplay(product, service, productDisplayDiv, servicesDisplayDiv);
  }),
  disService.addEventListener("click", () => {
    toggleDisplay(service, product, servicesDisplayDiv, productDisplayDiv);
  }),
  disProduct.addEventListener("click", () => {
    toggleDisplay(product, service, productDisplayDiv, servicesDisplayDiv);
  });
