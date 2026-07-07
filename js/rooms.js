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
    healthHUD.classList.remove("hidden");
    game.innerHTML = `
        <h2>SITE-09 MAP</h2>

        <button id="securityButton">Security Office</button>

        <br><br>

        <button id="medicalButton">Medical Bay</button>

        <br><br>

        <button id="electricalButton">Electrical Room</button>

        <br><br>

        <button id="saveButton">SAVE GAME</button>

        <br><br>

        <button id="resetButton">RESET GAME</button>
    `;

    document.getElementById('securityButton').addEventListener('click', showSecurity);
    document.getElementById('medicalButton').addEventListener('click', showMedical);
    document.getElementById('electricalButton').addEventListener('click', enterElectrical);
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

function showMedical() {
    currentScene = "medical";
    game.innerHTML = `
        <h2>MEDICAL BAY</h2>



        <button id="searchCabinet">Search Cabinet</button>
        <br><br>
        <button id="inspectDrawer">Inspect Drawer</button>
        <br><br>
        <button id="returnMap">Return to Map</button>
    `;

    document.getElementById("searchCabinet").addEventListener("click", searchCabinet);
    document.getElementById("inspectDrawer").addEventListener("click", inspectDrawer);
    document.getElementById("returnMap").addEventListener("click", showMap);
}

function enterElectrical() {
    if(hasKeycard == false) {
        alert("ACCESS DENIED\n\nKeycard Lv1 Required.");
    } else {
        showElectrical();
    }
}

function showElectrical() {
    currentScene = "electrical";
    game.innerHTML = `
        <h2>ELECTRICAL ROOM</h2>
        <p>
            Emergency power is offline.
        </p>
        <button id="returnMap">Return to Map</button>
        <button id="electricShock">Touch Exposed Wire</button>
        <button id="investigateButton">Investigate Noise</button>
    `;

    document.getElementById("returnMap").addEventListener("click", showMap);
    document.getElementById("electricShock").addEventListener("click", shockPlayer);
    document.getElementById("investigateButton").addEventListener("click", investigateNoise);
}

function showCorridor() {
    currentScene = "corridor";
    hud.classList.remove("hidden");
    objectiveHUD.classList.remove("hidden");
    healthHUD.classList.remove("hidden");
    game.innerHTML = `
        <h2>CORRIDOR</h2>
        <p>
            The zombie lies motionless.
        </p>
    `;
    setTimeout(() => {
        showBlackScreen(showDialogue);
    }, 5000)
}
