const dodger = document.getElementById("dodger");
dodger.style.bottom = "50px"

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  left > 0 ? dodger.style.left = `${left - 1}px`:dodger.style.left = "0px";
}

document.addEventListener("keydown", e => e.key === "ArrowLeft" ? moveDodgerLeft() : false);

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  left < 360 ? dodger.style.left = `${left + 1}px`:dodger.style.left = "0px";
}

document.addEventListener("keydown", e => e.key === "ArrowRight" ? moveDodgerRight() : false);