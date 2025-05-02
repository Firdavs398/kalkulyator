let buttons = document.querySelectorAll("button");
let monitor = document.querySelector(".monitor");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "equal" && monitor.innerText === "") {
        monitor.innerText = "Empty";
        setTimeout(() => {
            monitor.innerText = "";
        }, 500)
    } else if (e.target.id === "equal") {
        monitor.innerText = eval(monitor.innerText);
    } else if (e.target.id === "clear") {
      monitor.innerText = "";
    } else if (e.target.id === "backspace") {
      let string = monitor.innerText.toString();
      monitor.innerText = string.substring(0, monitor.innerText.length - 1);
    } else if (e.target.id === "backspace") {
      let string = monitor.innerText.toString();
      monitor.innerText = string.substring(0, monitor.innerText.length - 1);
    } else {
      monitor.innerText += e.target.id;
    }
  });
});