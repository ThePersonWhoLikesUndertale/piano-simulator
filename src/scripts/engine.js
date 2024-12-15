const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("tunes");

const playTune = (key) => {};

function init() {
    pianoKeys.forEach((key) => {
      key.addEventListener("click", () => playTune(key.dataset.key));
    });
}

init();