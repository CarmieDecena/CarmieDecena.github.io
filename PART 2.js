function openCenteredPopup(url, name, width, height) {
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    window.open(
        url,
        name,
        `width=${width},height=${height},left=${left},top=${top}`
    );
}

function openFullWindow(url, name) {
    window.open(
        url,
        name,
    )
}

function openPopup1() {
    var myWindow = window.openCenteredPopup('POPUP 1.html', 'myPopup', 400, 180);
}

function openPopup2() {
    var myWindow = window.openCenteredPopup('POPUP 2.html', 'myPopup', 400, 180);
}

function openDocument() {
    var myWindow = window.openFullWindow('PART 3.html', 'myDocument');
}

//  ribbon buttons dont edit
const ribbonLabels = ["File", "Disk", "Tree", "View", "Options", "Window", "Help"];
const ribbonButtonsArea = document.getElementById("ribbonButtonsContainer");

for (let i = 0; i < ribbonLabels.length; i++) {
    const button = document.createElement("div");
    button.className = "ribbonButtons";
    button.textContent = ribbonLabels[i];
    ribbonButtonsArea.appendChild(button);
}


// ribbon icons edit only to put the icons
const ribbonIcons = ["blank document.png", "open folder.png", "select all.png", "find.png", "undo.png", "redo.png", "save.png", "cut.png", "copy.png", "paste.png"];
const ribbonIconsArea = document.getElementById("ribbonIconsContainer");

for (let i = 0; i < ribbonIcons.length; i++) {
    const icon = document.createElement("div");
    icon.className = "ribbonIcons";
    
    // Create an image element
    const img = document.createElement("img");
    img.src = "icons/" + ribbonIcons[i];
    img.alt = ribbonIcons[i];
    img.className = "ribbonIconImg"; // for CSS styling

    icon.appendChild(img);
    ribbonIconsArea.appendChild(icon);
}



