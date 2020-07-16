import "./styles.css";

const arraOfColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const buttonSelect = document.querySelector(".btn");
const BodySelect = document.querySelector("body");
const hexa = document.querySelector(".hex");

buttonSelect.addEventListener("click", buttondefine);
function buttondefine() {
  let hashh = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * arraOfColors.length);
    hashh += arraOfColors[random];
  }
  BodySelect.style.backgroundColor = hashh;
  hexa.innerHTML = hashh;
}
