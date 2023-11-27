const container = document.querySelector(".js-content");
container.addEventListener("click", onClick);
const button = document.querySelector(".js-button");
button.addEventListener("click", btnClick);
const title = document.querySelector(".title");
const counterX = document.querySelector(".countX");
const counterO = document.querySelector(".countO");

title.textContent = "🍿 🍿 🍿";

let player = "❌";
let playerX = [];
let playerO = [];
let countX = 0;
let countO = 0;

counterX.textContent = countX;
counterO.textContent = countO;

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function createMarkup() {
  let markup = "";
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  container.innerHTML = markup;
}
createMarkup();

function onClick(e) {
  if (!e.target.classList.contains("js-item") || e.target.textContent) {
    return;
  }
  e.target.textContent = player;
  const isEndGame = playerX.length + playerO.length === 8;
  console.log("object :>> ", isEndGame);
  id = +e.target.dataset.id;
  let result = false;

  if (player === "❌") {
    playerX.push(id);
    result = isWinner(playerX);
  } else {
    playerO.push(id);
    result = isWinner(playerO);
  }

  if (result) {
    title.textContent = `🏅 Winner is ${player}  🎉🎉🎉`;
    if (player === "❌") {
      counterX.textContent = countX += 1;
    } else {
      counterO.textContent = countO += 1;
    }

    resetGame();
    return;
  } else if (isEndGame) {
    title.textContent = `Try again 🫠`;

    resetGame();
    return;
  }
  player = player === "❌" ? "⭕️" : "❌";
}

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}

function resetGame() {
  createMarkup();
  playerX = [];
  playerO = [];
  player = "❌";
}

function btnClick() {
  createMarkup();
  playerX = [];
  playerO = [];
  player = "❌";
}
