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
  herald(quests);
  board.innerHTML = "";

  quests.forEach((quest) => {
    const card = document.createElement("article")
    card.className = "quest-card" + (quest.accepted ? " accepted" : "");
    card.innerHTML = 
    `
    <div>
      <h3>${quest.title}</h3>
      <p>${quest.difficulty} | ${quest.gold}</p>
    </div>
    <button data-id = "${quest.id}" ${quest.accepted ? "disabled" : ""}>
    ${quest.accepted ? "Taken" : "Accept"}
    </button>
    `;
    board.appendChild(card);
  })
}

function herald(quests)
{
  // const id = 2;
  // console.log(quests.filter(obj => obj.id === id));
  const difficulty = "Hard";
  console.log(quests.filter(obj => obj.difficulty === difficulty));
}

const amountOpen = quests.filter(quest => quest.accepted === false);
openCountEl.textContent = amountOpen.length;
goldTotalEl.textContent = amountOpen.reduce((sum, current) => sum + current.gold, 0);

board.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-id]");
  const btnID = btn.getAttribute("data-id");
  console.log(btn);
  console.log(btnID);

  const btnDIS = quests.filter(quest => quest.id == btnID);
  console.log(btnDIS);

  btnDIS.accepted = true;

  render();

  if (!btn) return;

  // TODO 4: find the quest whose id matches btn.dataset.id
  //   Careful: dataset values are strings, quest ids are numbers.
  // TODO 5: set accepted to true on that quest
  // TODO 6: call render() so the screen catches up with the data
});

render();
