function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "All things bright and beautiful 🌻, <br/> All creatures great and small 🦋, <br/> All things wise and wonderful 😊, <br/> The Lord God made them all 🙏.",
    autoStart: true,
    delay: 45,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);
