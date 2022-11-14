const init = () => {
  //Buttons
  const startButton = document.getElementById("start");
  const resetButton = document.getElementById("reset");
  const stopButton = document.getElementById("stop");

  //input feild
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");

  let countDownInterval = null;

  const stopInterval = () => {
    clearInterval(countDownInterval);
  };

  startButton.addEventListener("click", () => {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) return;
    startButton.style.display = "none";
    stopButton.style.display = "inline";

    const startInterval = () => {
      countDownInterval = setInterval(() => {
        timer();
      }, 10);
    };

    startInterval();
  });

  stopButton.addEventListener("click", () => {
    startButton.style.display = "inline";
    stopButton.style.display = "none";

    stopInterval();
  });

  const timer = () => {
    if (second.value > 60) {
      minute.value++;
      second.value = parseInt(second.value) - 59;
    }

    if (minute.value > 60) {
      hour.value++;
      minute.value = parseInt(minute.value) - 60;
    }
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      hour.value = "";
      second.value = "";
      minute.value = "";
      startButton.style.display = "inline";
      stopButton.style.display = "none";
      stopInterval();
    } else if (second.value != 0) {
      second.value--;
      second.value = `${second.value < 10 ? "0" : ""}${second.value}`;
    } else if (minute.value != 0 && second.value <= 0) {
      second.value = 59;
      minute.value--;
      minute.value = `${minute.value < 10 ? "0" : ""}${minute.value}`;
    } else if (hour.value != 0 && minute.value <= 0) {
      minute.value = 59;
      hour.value--;
      hour.value = `${hour.value < 10 ? "0" : ""}${hour.value}`;
    }
  };

  resetButton.addEventListener("click", () => {
    hour.value = "";
    second.value = "";
    minute.value = "";
    clearInterval();
  });
};

document.addEventListener("DOMContentLoaded", init);
