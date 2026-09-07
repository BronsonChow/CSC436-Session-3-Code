// Forged by Hand: the Guild Quest Board
// Your tools: querySelector, createElement, append, addEventListener
// Your rule: data first, then redraw. The quests array is the truth.

const board = document.querySelector("#board");
const openCountEl = document.querySelector("#open-count");
const goldTotalEl = document.querySelector("#gold-total");

// ---------------------------------------------------------------
// BRONZE: render the board from data
// ---------------------------------------------------------------
function render() {
  // TODO 1: clear the board (board.innerHTML = "" is fine)

  // TODO 2: loop over quests and build a card for each one.
  //   Each card is an <article class="quest-card"> containing:
  //     - an <h3> with the title
  //     - a <p> with difficulty and gold, like "Medium | 150g"
  //     - a <button> that says "Accept" with data-id set to the quest id
  //   If quest.accepted is true, also add the "accepted" class to the card.

  // TODO 3 (GOLD): update the two counters from the quests array.
  //   openCountEl.textContent = how many quests are not accepted
  //   goldTotalEl.textContent = total gold across open quests only
  //   Compute these here, every render. Do not update them anywhere else.
}

// ---------------------------------------------------------------
// SILVER: one delegated listener for every Accept button
// ---------------------------------------------------------------
board.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-id]");
  if (!btn) return;

  // TODO 4: find the quest whose id matches btn.dataset.id
  //   Careful: dataset values are strings, quest ids are numbers.
  // TODO 5: set accepted to true on that quest
  // TODO 6: call render() so the screen catches up with the data
});

render();
