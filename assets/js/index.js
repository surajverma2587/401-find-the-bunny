const startGameBtn = document.getElementById("start-game-btn");

const handleStartBtnClick = () => {
  // target start container
  const startContainer = document.getElementById("start-game-container");
  // remove start container
  startContainer.remove();
};

startGameBtn.addEventListener("click", handleStartBtnClick);
