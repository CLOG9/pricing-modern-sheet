let toggle = document.querySelector("input");
let spans = document.querySelectorAll(".cardNums");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    spans[0].innerHTML = `&dollar;19.99`;
    spans[1].innerHTML = `&dollar;24.99`;
    spans[2].innerHTML = `&dollar;39.99`;
  } else {
    spans[0].innerHTML = `&dollar;199.99`;
    spans[1].innerHTML = `&dollar;249.99`;
    spans[2].innerHTML = `&dollar;399.99`;
  }
});
