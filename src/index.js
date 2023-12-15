function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionElement = document.querySelector("#user-instruction");
  let apiKey = "040ffb19o36e1562a0f417abf724b2t9";
  let context =
    "You are a Haiku master. Your mission is to generate a haiku in basic html and seperate each line in <br/>. Make sure to follow the user instructions . Do not include a title and only display the haiku. Leave one line after Haiku and sign the poem with 'SheCodes Ai' inside a <small> element at the end and NOT at first";
  let prompt = `User instructions: Generate a Haiku about ${instructionElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
  console.log(prompt);
}

let poemFormElement = document.querySelector("#keyword");
poemFormElement.addEventListener("submit", generatePoem);
