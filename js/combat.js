function shockPlayer() {
    health -= 20;
    updateHealth();
    alert("You received an electric shock!");
    if (health <= 0) {
        showGameOver();
    }
}

function investigateNoise() {
    if (hasPistol == false) {
        health -= 20;
        updateHealth();
        alert("A Zombie attacked!\n\n-20 Health");
        if (health <= 0) {
            showGameOver();
        }
    } else {
        zombieAlive = false
            showCorridor();
            return;
    }
}

function showGameOver() {
    game.innerHTML = `
        <h1>GAME OVER</h1>
        <p>
        Mission Failed
        </p>
        <button id="restartButton">Back to Title</button>
    `;

    document.getElementById("restartButton").addEventListener("click", showTitle);
}