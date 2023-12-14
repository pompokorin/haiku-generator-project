function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The candle is burning",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemElement = document.querySelector("#keyword");
poemElement.addEventListener("submit", generatePoem);
