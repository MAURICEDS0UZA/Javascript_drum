document.addEventListener("DOMContentLoaded", function () {
  const keyClicked = document.querySelectorAll(".key");

  function handleEvent(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);

    // check for audio element
    if (!audio) return;

    // Added class playing
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }

  function removeTransition(e) {
    const value = e.target.classList.value.split(" ");
    /* if (value.includes("playing")) {
      e.target.classList.remove("playing");
    }
    return;*/

    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  keyClicked.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );

  window.addEventListener("keydown", handleEvent);
});
