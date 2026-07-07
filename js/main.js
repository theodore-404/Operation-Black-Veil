const game = document.getElementById('game');
const hud = document.getElementById('hud');
const inventoryHUD = document.getElementById('inventoryHUD');
const objectiveHUD = document.getElementById('objectiveHUD');
const healthHUD = document.getElementById('healthHUD');

let currentScene = "title";
const rooms = [
    "Security Office",
    "Medical Bay",
    "Electrical Room"
];

function showTitle() {
    currentScene = "title";
    hud.classList.add("hidden");
    objectiveHUD.classList.add("hidden");
    healthHUD.classList.add("hidden");
    game.innerHTML = `
        <h1>Operation Black Veil</h1>
        <button id="startButton">START</button>
    `;
    document.getElementById('startButton').addEventListener('click', showMission);
}

function showMission() {
    currentScene = "mission";
    game.innerHTML = `
        <h2>MISSION BRIEF</h2>
        <p>Welcome, ${playerName}.</p>
        <p>Investigate Site-09.</p>
        <button id="continueButton">CONTINUE</button>
    `;

    document.getElementById('continueButton').addEventListener('click', showChapter1);
}

function showChapter1() {
    currentScene = "chapter1";
    game.innerHTML = `
        <h2>CHAPTER 1</h2>
        <p>
            02:17 AM
        </p>
        <p>
            Your helicopter lands outside Site-09.
        </p>
        <p>
            No lights.
        </p>
        <p>
            No guards.
        </p>
        <p>
            No radio response.
        </p>
        <p>
            Only silence.
        </p>

        <button id="nextButton">NEXT</button>
    `;
    document.getElementById('nextButton').addEventListener('click', showEntrance);
}

console.log(currentScene);

loadGame();
showTitle();
updateInventory();
updateObjective();
updateHealth();