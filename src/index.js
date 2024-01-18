function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "043fo3afb4t56ba7c16f40bfab647517";
  let context =
    "You are a movie buff. You mission is to generate a top 4 hollywood action movies based on box office collection in basic HTML and separate each line with a <br />. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate top 4 action movies for the year ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating Top 4 action movies for the year ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
