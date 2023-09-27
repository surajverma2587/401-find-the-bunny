const startGameBtn = document.getElementById("start-game-btn");

const renderGameContainer = () => {
  // <div>
  //     <div>Game</div>
  //     <div>Score</div>
  //     <div class="jumbotron text-center border m-1">
  //       <button class="btn btn-danger" id="restart-game-btn">Restart</button>
  //     </div>
  //   </div>
  const gameContainerDiv = document.createElement("div");

  const gameDiv = document.createElement("div");
  const scoreDiv = document.createElement("div");
  const controlDiv = document.createElement("div");

  gameDiv.textContent = "Game";
  scoreDiv.textContent = "Score";

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
  console.log("restart");
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
