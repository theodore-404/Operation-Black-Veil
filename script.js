const game = document.getElementById('game');
let playerName = "Captain Price";
let currentScene = "title";
const rooms = [
    "Security Office",
    "Medical Bay",
    "Generator Room"
];
let hasKeycard = false;
let hasMedkit = false;
const inventory = [];

function showTitle() {
    currentScene = "title";
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
    game.innerHTML = `
        <h2>SITE-09 MAP</h2>

        <button id="securityButton">Security Office</button>

        <br><br>

        <button id="medicalButton">Medical Bay</button>

        <br><br>

        <button id="generatorButton">Generator Room</button>
    `;

    document.getElementById('securityButton').addEventListener('click', showSecurity);
}

function showSecurity() {
    currentScene = "security";
    game.innerHTML = `
        <h2>SECURITY OFFICE</h2>
        <p>
        <p id="inventoryText">
        Inventory: Empty
        </p>
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
        alert("You found keycard Lv1!");
        hasKeycard = true;
        inventory.push("Keycard Lv1");
        inventory.push("Flashlight");
    } else {
        alert("The desk is empty.");
        const inventoryText = document.getElementById("inventoryText");
        let text = "Inventory\n\n";
        for (let i = 0; i < inventory.length; i++) {
            text += "- " + inventory[i] + "\n";
        }
        inventoryText.textContent = text;
    }
}

function inspectLocker() {
    if(hasMedkit == false) {
        alert("You found Medkit!");
        hasMedkit = true;
        inventory.push("Medkit");
    } else {
        alert("Locker is empty.");
        const inventoryText = document.getElementById("inventoryText");
        let text = "Inventory\n\n";
        for (let i = 0; i < inventory.length; i++) {
            text += "- " + inventory[i] + "\n";
        }
        inventoryText.textContent = text;
    }
}

showTitle();

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

console.log(currentScene);