const trash = [
    "You cannot escape your past.",
    "What's done is done.",
    "There's no turning back now.",
];

const diary = [
    "No more secrets.",
    "Not a single sentiment of yours valid.",
    "Too scared to confess?",
];

const folder = [
    "Don't you have shame on yourself?",
    "Did you already forget?",
    "Were the memories not enough for you?",
];

function openTrashBin(app) {
    document.getElementById('trashPopup').style.display = 'block';
    const randomIndex = Math.floor(Math.random() * app.length);
    document.getElementById("trashPrompt").innerHTML = `<p>${app[randomIndex]}</p>`;
}

function closeTrashBin() {
    document.getElementById('trashPopup').style.display = 'none';
}

function openLibPopup(app) {
    document.getElementById('diaryPopup').style.display = 'block';
    const randomIndex = Math.floor(Math.random() * app.length);
    document.getElementById("libraryPrompt").innerHTML = `<p>${app[randomIndex]}</p>`;
}

function closeLibPopup() {
    document.getElementById('diaryPopup').style.display = 'none';
}

function openLibrary() {
    document.getElementById('myLibrary').style.display = 'block';
}

function closeLibrary() {
    document.getElementById('myLibrary').style.display = 'none';
}

function openRetreatPictures() {
    document.getElementById('retreatPictures').style.display = 'block';
}

function closeRetreatPictures() {
    document.getElementById('retreatPictures').style.display = 'none';
}

function openDocument() {
    document.getElementById('untitledDocument').style.display = 'block';
    onclick = typeWritter();
}

function closeDocument() {
    document.getElementById('untitledDocument').style.display = 'none';
}

function openSearch() {
    document.getElementById('searchEngine').style.display = 'block';
}

function closeSearch() {
    document.getElementById('searchEngine').style.display = 'none';
}

function openBoatGame() {
    document.getElementById('browserBoatGame').style.display = 'block';
}

function closeBoatGame() {
    document.getElementById('browserBoatGame').style.display = 'none';
}

function openSystemErrorPopup() {
    document.getElementById('systemErrorPopup').style.display = 'block';
    const randomIndex = Math.floor(Math.random() * systemError.length);
    document.getElementById("systemErrorPrompt").innerHTML = `<p>${systemError[randomIndex]}</p>`;
}

function closeSystemErrorPopup() {
    document.getElementById('systemErrorPopup').style.display = 'none';
    document.getElementById('browserBoatGame').style.display = 'none';
    document.getElementById('desktopView').style.display = 'flex';
}

function closeSignInPage(){
    document.getElementById('signInPage').style.display = 'none';
    signedIn = true;
}

function openSearchPopup() {
    document.getElementById('searchPopup').style.display = 'block';
}

function closeSearchPopup() {
    document.getElementById('searchPopup').style.display = 'none';
}

function openCrptdGame() {
    const query = document.getElementById('searchInput').value.trim();

    if (query !== '') {
        document.getElementById('searchEngine').style.display = 'none';
        document.getElementById('crptdBoatGame').style.display = 'block';
        document.getElementById('browserBoatGame').style.display = 'none';
        document.getElementById('searchPopup').style.display = 'block';
    }
}

function closeCrptdGame() {
    document.getElementById('crptdBoatGame').style.display = 'none';
}   

// search button functionality
document.getElementById('searchButton').onclick = function() {
    const query = document.getElementById('searchInput').value.trim();

    if (query !== '') {
        openSearchPopup();
        openCrptdGame();
    }
};


document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('searchButton').click();
    }
});


//  ribbon buttons dont edit
const ribbonLabels = ["Home", "File", "Edit", "View", "Insert", "Format", "Tools", "Table", "Window", "Help"];
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




// --- SIGNINPAGE ---

let signedIn = false;

document.getElementById('signInBtn').onclick = function() {
    document.getElementById('signInPage').style.display = 'none';
    signedIn = true;
};