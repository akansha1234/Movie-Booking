let btns = document.querySelectorAll(".btn");
let second = document.querySelector(".second-page");
let seats = document.querySelectorAll(".seat");
let container = document.querySelector(".container");
let count = document.querySelector("#count");
let total = document.querySelector("#total");
let back = document.querySelector(".back");
let count1 = 0;
let total1 = 0;
let price = 0;
function working() {
  // btns.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     price = btn.getAttribute("data-id");
  //     container.style.display = "none";
  //     second.style.display = "block";
  //   });
  // });
  btns.forEach((btn) => {
    btn.addEventListener("click", nextPage);
  });
  function nextPage() {
    price = this.getAttribute("data-id");
    container.style.display = "none";
    second.style.display = "block";
  }
  seats.forEach((seat) => {
    seat.addEventListener("click", () => {
      if (seat.classList.contains("occupied")) {
      } else {
        seat.style.backgroundColor = "lightBlue";
        count1 += 1;
        total1 = price * count1;
        count.innerHTML = count1;
        total.innerHTML = total1;
      }
    });
  });

  back.addEventListener("click", () => {
    container.style.display = "block";
    second.style.display = "none";
  });
}
working();
