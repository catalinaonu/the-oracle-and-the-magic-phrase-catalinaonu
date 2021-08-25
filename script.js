// Use the skeleton bellow as a basis for your script
var generateBtn = document.querySelector("#magic-btn");

function makeSomeMagic() {
  let sportQuestion = confirm("do I like to do sports?");
  let pizzaQuestion = confirm("do I like to make pizza?");
  let puzzleQuestion = confirm("do I like to make puzzles?");
  let petsQuestion = confirm("do I like pets?");
  let readQuestion = confirm("do I like to draw or to read?");
  let kindOfPersonQuestion = confirm("am I a morning person or a evening one?");

  console.log(sportQuestion);
  if (
    sportQuestion &&
    pizzaQuestion &&
    puzzleQuestion &&
    petsQuestion &&
    readQuestion &&
    kindOfPersonQuestion
  ) {
    return "Your future is bright :)";
  } else if (
    !sportQuestion &&
    !pizzaQuestion &&
    !puzzleQuestion &&
    !petsQuestion &&
    !readQuestion &&
    !kindOfPersonQuestion
  ) {
    return "You're a sad person!";
  } else {
    return "You still have a chance to become a good, happy person";
  }
}

function displayMagicPhrase() {
  var magicPhrase = makeSomeMagic();
  var magicPhraseDisplay = document.querySelector("#magic-phrase");

  magicPhraseDisplay.value = magicPhrase;
}
// Attach event listener to the magic button
generateBtn.addEventListener("click", displayMagicPhrase);
