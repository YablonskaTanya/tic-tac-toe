const container = document.querySelector(".js-content");

function createMarkup() {
  let markup = "";
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  container.innerHTML = markup;
}
createMarkup();
