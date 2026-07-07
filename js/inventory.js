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

function inspectDrawer() {
    if(hasPistol == false) {
        alert("You found Pistol!");
        hasPistol = true;
        inventory.push("Pistol");
        updateInventory();
    } else {
        alert("Drawer is empty.");
    }
}

function searchCorpse() {
    if(hasGeneratorKey == false) {
        alert("You found Generator Key, Lab Card, Ammo, and Security Note!");
        hasGeneratorKey = true;
        inventory.push("Generator Key");
        inventory.push("Lab Card");
        inventory.push("Ammo");
        inventory.push("Note");
        updateInventory();
    } else {
        alert("Corpse already searched.");
    }
}