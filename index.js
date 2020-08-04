const generatePin = document.getElementById("generatePin");
const pinDisplay = document.getElementById("pinDisplay");
const button = document.getElementsByClassName("button");
const pinCheckDisplay = document.getElementById("PinCheckDisplay");
const submitButton = document.getElementById("submitButton");
const notify = document.getElementById("comments");

generatePin.addEventListener("click", function () {
  const randomPin = Math.floor(1000 + Math.random() * 9000);
  pinDisplay.value = randomPin;
});

//pin checking buttons event listener.
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (e) {
    //deleting the last number from input.
    if (e.target.id == "backSpace") {
      const displayValue = pinCheckDisplay.value;
      const displayValueAfter = displayValue.slice(0, displayValue.length - 1);
      pinCheckDisplay.value = displayValueAfter;
    } //deleting every single number from the input.
    else if (e.target.id == "allClear") {
      pinCheckDisplay.value = "";
    } //printing values in the input.
    else {
      const buttonValue = e.target.innerText;
      pinCheckDisplay.value += buttonValue;
      console.log(buttonValue);
    }
  });
}

submitButton.addEventListener("click", function (e) {
  const displayValue = pinCheckDisplay.value;
  const pinValue = pinDisplay.value;
  if (displayValue == pinValue) {
    notify.querySelector("#pinMatch").style.display = "block";
  } else {
    notify.querySelector("#pinNotMatch").style.display = "block";
  }
});
