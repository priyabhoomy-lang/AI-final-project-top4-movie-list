function generateMovies(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#movie-year");
  let apiKey = "043fo3afb4t56ba7c16f40bfab647517";
  let context =
    "You are a movie buff. You mission is to generate the top 4 hollywood action movies based on box office collection in basic HTML and separate each line with a <br />. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate top 4 action movies for the year ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let movieElement = document.querySelector("#movie");
  movieElement.classList.remove("hidden");
  movieElement.innerHTML = `<div class="generating">⏳ Generating Top 4 action movies for the year ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayMovie);
}

function displayMovie(response) {
  new Typewriter("#movie", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let movieFormElement = document.querySelector("#movie-generator-form");
movieFormElement.addEventListener("submit", generateMovies);
