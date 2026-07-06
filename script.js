const game = document.getElementById('game');
const hud = document.getElementById('hud');
const inventoryHUD = document.getElementById('inventoryHUD');
const objectiveHUD = document.getElementById('objectiveHUD');

let playerName = "Captain Price";
let currentScene = "title";
const rooms = [
    "Security Office",
    "Medical Bay",
    "Generator Room"
];
let hasKeycard = false;
let hasMedkit = false;
let hasBandage = false;
const inventory = [];

function updateInventory() {
    let text = "Inventory\n\n";
    for (let i = 0; i < inventory.length; i++) {
        text += "- " + inventory[i] + "\n";
    }
    if (inventory.length == 0) {
        text = "Inventory\n\nEmpty";
    }
    inventoryHUD.textContent = text;
}

function updateObjective() {
    if (hasKeycard){
        objectiveHUD.textContent = "Objective\n\n☑ Find a Keycard";
    }else{
        objectiveHUD.textContent = "Objective\n\n☐ Find a Keycard";
    }
}

function showTitle() {
    currentScene = "title";
    hud.classList.add("hidden");
    objectiveHUD.classList.add("hidden");
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

function showEntrance() {
    currentScene = "entrance";
    game.innerHTML = `
        <h2>Site-09</h2>
        <p id="story"></p>

        <button id="enterButton">ENTER SITE</button>
    `;

    const story =
    document.getElementById("story");
    typeWriter(story, "The entrance door slowly opens...");

    document.getElementById('enterButton').addEventListener('click', showMap);
}

function showMap() {
    currentScene = "map";
    hud.classList.remove("hidden");
    objectiveHUD.classList.remove("hidden");
    game.innerHTML = `
        <h2>SITE-09 MAP</h2>

        <button id="securityButton">Security Office</button>

        <br><br>

        <button id="medicalButton">Medical Bay</button>

        <br><br>

        <button id="generatorButton">Generator Room</button>

        <br><br>

        <button id="saveButton">SAVE GAME</button>

        <br><br>

        <button id="resetButton">RESET GAME</button>
    `;

    document.getElementById('securityButton').addEventListener('click', showSecurity);
    document.getElementById('medicalButton').addEventListener('click', showMedical);
    document.getElementById('generatorButton').addEventListener('click', enterGenerator);
    document.getElementById('saveButton').addEventListener('click', saveGame);
    document.getElementById('resetButton').addEventListener('click', resetGame);
}

function showSecurity() {
    currentScene = "security";
    game.innerHTML = `
        <h2>SECURITY OFFICE</h2>
        <p>
        The room is abandoned.
        Dust covers every surface.
        A monitor is still powered on.
        </p>
        <button id="searchDesk">Search Desk</button>
        <br><br>
        <button id="inspectLocker">Inspect Locker</button>
        <br><br>
        <button id="returnMap">Return to Map</button>
    `;

    document.getElementById("searchDesk").addEventListener("click", searchDesk);
    document.getElementById("inspectLocker").addEventListener("click", inspectLocker);
    document.getElementById("returnMap").addEventListener("click", showMap);
}

function searchDesk() {
    if(hasKeycard == false) {
        alert("You found Keycard Lv1 and a Flashlight!");
        hasKeycard = true;
        updateObjective();
        inventory.push("Keycard Lv1");
        inventory.push("Flashlight");
        updateInventory();
    } else {
        alert("The desk is empty.");
    }
}

function inspectLocker() {
    if(hasMedkit == false) {
        alert("You found Medkit!");
        hasMedkit = true;
        inventory.push("Medkit");
        updateInventory();
    } else {
        alert("Locker is empty.");
    }
}

function showMedical() {
    currentScene = "medical";
    game.innerHTML = `
        <h2>MEDICAL BAY</h2>



        <button id="searchCabinet">Search Cabinet</button>
        <br><br>
        <button id="returnMap">Return to Map</button>
    `;

    document.getElementById("searchCabinet").addEventListener("click", searchCabinet);
    document.getElementById("returnMap").addEventListener("click", showMap);
}

function searchCabinet() {
    if(hasBandage == false) {
        alert("You found Bandage!");
        hasBandage = true;
        inventory.push("Bandage");
        updateInventory();
    } else {
        alert("Cabinet is empty.");
    }
}

function enterGenerator() {
    if(hasKeycard == false) {
        alert("ACCESS DENIED\n\nKeycard Lv1 Required.");
    } else {
        showGenerator();
    }
}

function showGenerator() {
    currentScene = "generator";
    game.innerHTML = `
        <h2>GENERATOR ROOM</h2>
        <p>
            Emergency power is offline.
        </p>
        <button id="returnMap">Return to Map</button>
    `;

    document.getElementById("returnMap").addEventListener("click", showMap);
}

function typeWriter(element, text) {
    element.textContent = '';
    let index = 0;
    const timer = setInterval(function() {
        element.textContent += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(timer);
        }
    }, 40);
}

function saveGame() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
    alert("Game Saved!");
}

function resetGame() {
    const confirmReset = confirm("Are you sure you want to reset your progress?");
    if (confirmReset) {
        localStorage.clear();
        location.reload();
    }
}

console.log(currentScene);

showTitle();
updateInventory();
updateObjective();