const startGameBtn = document.getElementById("start-game-btn");

const constructGame = (length) => {
  const gameDiv = document.createElement("div");
  gameDiv.setAttribute("class", "jumbotron m-1");

  for (let row = 0; row < length; row++) {
    // build row
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");

    for (let col = 0; col < 3; col++) {
      // build col
      const colDiv = document.createElement("div");
      colDiv.setAttribute("class", "col border text-center p-4 fs-1");

      const icon = document.createElement("i");
      icon.setAttribute("class", "fa-solid fa-question");

      colDiv.append(icon);

      rowDiv.append(colDiv);
    }

    gameDiv.append(rowDiv);
  }

  return gameDiv;
};

const renderGameContainer = () => {
  const gameContainerDiv = document.createElement("div");

  const scoreDiv = document.createElement("div");
  const controlDiv = document.createElement("div");

  scoreDiv.textContent = "Score";

  const gameDiv = constructGame(3);

  controlDiv.setAttribute("class", "jumbotron text-center border m-1");
  const restartBtn = document.createElement("button");
  restartBtn.setAttribute("class", "btn btn-danger");
  restartBtn.textContent = "Restart";

  restartBtn.addEventListener("click", handleRestartBtnClick);

  controlDiv.append(restartBtn);

  gameContainerDiv.append(...[gameDiv, scoreDiv, controlDiv]);

  document.getElementById("game-container").append(gameContainerDiv);
};

const handleRestartBtnClick = () => {
  // refresh page
  window.location.reload();
};

const handleStartBtnClick = () => {
  // target start container
  const startContainer = document.getElementById("start-game-container");

  // remove start container
  startContainer.remove();

  // render the game container
  renderGameContainer();
};

startGameBtn.addEventListener("click", handleStartBtnClick);
