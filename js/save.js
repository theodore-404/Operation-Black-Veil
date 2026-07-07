function saveGame() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("health", health);
    localStorage.setItem("hasKeycard", hasKeycard);
    localStorage.setItem("hasMedkit", hasMedkit);
    localStorage.setItem("hasBandage", hasBandage);
    localStorage.setItem("hasPistol", hasPistol);
    localStorage.setItem("hasGeneratorKey", hasGeneratorKey);
    alert("Game Saved!");
}

function loadGame() {
    const savedInventory = localStorage.getItem("inventory");
    if (savedInventory) {
        inventory.length = 0;
        inventory.push(...JSON.parse(savedInventory));
        updateInventory();
    }
    health = Number(localStorage.getItem("health")) || 100;
    hasKeycard = localStorage.getItem("hasKeycard") === "true";
    hasMedkit = localStorage.getItem("hasMedkit") === "true";
    hasBandage = localStorage.getItem("hasBandage") === "true";
    hasPistol = localStorage.getItem("hasPistol") === "true";
    hasGeneratorKey = localStorage.getItem("hasGeneratorKey") === "true";
    updateHealth();
    updateObjective();
}

function resetGame() {
    const confirmReset = confirm("Are you sure you want to reset your progress?");
    if (confirmReset) {
        localStorage.clear();
        location.reload();
    }
}