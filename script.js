function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e2949o3t7d077f9afab67b8fa41bbafa";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a renowned poet known for crafting short, vivid poems. Your task is to write a five-line poem based on the user's topic. Use basic HTML formatting with <br/> tags to separate each line. Keep the tone imaginative and expressive. Sign the poem with 'SheCodes AI'.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class ="generating">⏳💓 Your love for poems is a poem in itself</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);
