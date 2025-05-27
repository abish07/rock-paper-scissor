let choices = document.querySelectorAll(".grp-elements");
let userScore = 0;
let comScore = 0;
choices.forEach((element) => {
  console.log(element);
  element.addEventListener("click", () => {
  console.log("choice was clicked");
  });
});