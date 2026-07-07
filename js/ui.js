showDialogue([
    "...",
    "The gunshot echoes through the corridor.",
    "Silence.",
    "For the first time since entering the facility...",
    "everything is still.",
    "The infected lies motionless on the cold concrete floor.",
    "This wasn't a random outbreak.",
    "Someone...was conducting experiments here.",
    "A damaged handheld radio suddenly crackles.",
    "...Hello...?",
    "...Can anyone hear me...?",
    "...If you're alive....",
    "...don't go deeper...",
    "...they're not the only ones...",
    "You look ahead.",
    "The corridor disappears into the darkness.",
    "Whatever happened inside Site-09...",
    "has only begun."
], showEnd1);

function updateHealth() {
    healthHUD.textContent = "Health: " + health;
}

function updateObjective() {
    if (hasKeycard){
        objectiveHUD.textContent = "Objective\n\n☑ Find a Keycard";
    }else{
        objectiveHUD.textContent = "Objective\n\n☐ Find a Keycard";
    }
}

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

function showBlackScreen(nextscene, delay = 3000){
    hud.classList.add("hidden");
    objectiveHUD.classList.add("hidden");
    healthHUD.classList.add("hidden");
    const blackScreen = document.createElement("div");
    
    blackScreen.classList.add("black-screen");

    document.body.appendChild(blackScreen);

    setTimeout(() => {
        blackScreen.classList.add("show");
    }, 10);

    setTimeout(() => {
        blackScreen.remove();
        nextscene();
    }, delay);
}

function showDialogue(dialogues, showEnd1){
    hud.classList.add("hidden");
    objectiveHUD.classList.add("hidden");
    healthHUD.classList.add("hidden");
    let index = 0;

    game.innerHTML = `
        <div id="dialogueBox">
            <p id="dialogue"></p>

            <small>Click anywhere to continue...</small>
        </div>
    `;
    const dialogue =
    document.getElementById("dialogue");
    typeWriter(dialogue, dialogues[index], 30);
    document.addEventListener("click", nextDialogue);

    function nextDialogue() {
        index++;
        if (index < dialogues.length) {
            typeWriter(dialogue, dialogues[index], 30);

        } else {
            document.removeEventListener("click", nextDialogue);
            showEnd1();
        }
    }
}

function showEnd1(){
    hud.classList.add("hidden");
    objectiveHUD.classList.add("hidden");
    healthHUD.classList.add("hidden");
    game.innerHTML = `
        <h1>CHAPTER 1 COMPLETE</h1>
        <h2>Operation Black Veil</h2>

        <br><br>

        <h2>Coming Soon...</h2>
        <h3>Chapter 2: The Laboratory</h3>

        <button id="backTitle">Back to Title</button>
    `;
    document.getElementById("backTitle").addEventListener("click", showTitle);
}