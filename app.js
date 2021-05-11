// Setting the initial counter
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//Adding click events to the buttons
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    // If the variable contains certain class, i know which button im clicking
    // decrease, reset or increase
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Changing the color of the span according if it increase or decrease
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    // Changing the value on the span
    value.textContent = count;

    // Console log
    console.log(count);
  });
});
