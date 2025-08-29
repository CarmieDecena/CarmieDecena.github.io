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
    document.getElementById("desktopPrompt").innerHTML = `<p>${app[randomIndex]}</p>`;
}

function closeTrashBin() {
    document.getElementById('trashPopup').style.display = 'none';
}

function openLibPopup(app) {
    document.getElementById('libraryPopup').style.display = 'block';
    const randomIndex = Math.floor(Math.random() * app.length);
    document.getElementById("libraryPrompt").innerHTML = `<p>${app[randomIndex]}</p>`;
}

function closeLibPopup() {
    document.getElementById('libraryPopup').style.display = 'none';
}

function openLibrary() {
    document.getElementById('myLibrary').style.display = 'block';
}

function closeLibrary() {
    document.getElementById('myLibrary').style.display = 'none';
}

function openDocument() {
    document.getElementById('untitledDocument').style.display = 'block';
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

// search button functionality
document.getElementById('searchButton').onclick = function() {
    const query = document.getElementById('searchInput').value;
    alert('You searched for: '+ query);
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



// story lines the player will type, edit and put story line
const storyLines = [
    "My name is Harvey P. Ramos, I’m a Grade 12 ICT student from Don Bosco Anselmo High School.",
    "Last November 21 we had a nature retreat at Camp Katarungan.",
    "There were lots of fun activities such as Hiking, Swimming, Camp games... and even boating.",
    "Our squad leader was a middle aged man with a background in mountain climbing.",
    "On the first day, I bumped into Dan, we used to be a good friend back in middle school.",
    "On the way to the docks for our first activity, it was fishing, unsurprisingly.",
    "Dan made fun of me for not knowing how to cast my line.",
    "And when I ignored him, he just got more upset, I just threw on the towel and called it a day.",
    "On the second day, we had hiking, our squad was teamed up with Dan’s squad.",
    "And the entire time we were there he did nothing but criticize me, like every single chance he got.",
    "On the third and last day, we had swimming in the morning and fishing in the afternoon.",
    "And again, Dan just had to find a way to make fun of my swim trunks.",
    "That afternoon I went to the docks to check the fuel line on our boat, our squad leader told us to check them before the next activity.",
    "I noticed Dan’s fuel line wasn’t connected to anything, but since their’s is a different model, I just connected it to what looks right.",
    "I mean, they’re gonna double check it anyways so it’s fine.",
    "That afternoon, the camp leaders instructed us to go on the lake on our own time, their only requirement was to bring back a fish after.",
    "I heard Dan’s group was planning to go out at night, which was good for me since he won’t be terrorizing me the entire time.",
    "But thats also the last time I heard about Dan’s group...",
    "I heard they put their engine on turbo and speeded across the lake, despite their squad leaders warning.",
    "They’re probably just trying to get the most of our stay here by using up all the fuel in their fuel tank.",
    "But, I heard that when they’re about to go back to the docks they weren’t slowing down... and then a crash...",
    "I didn’t see what happened, but I already have an idea of what it was… or what it could have been…", 
    "I mean… Guys fooling around... Camp counselors shouting at them to slow down... Squad leaders telling them to pull the breaks...",
    "I was hoping they just blew a fuse or something, but a part of me was hoping they [@%&#)!]",
    "I mean they [!*^#&@] it after all, after all they did to me."
];


let lineNumber = 0;

// get elem
const ghostText = document.getElementById("ghostText");
const documentArea = document.getElementById("docContainer");



// new line
function addEditableLine() {
    const line = document.createElement("div");
    line.id = "line-" + lineNumber;
    line.setAttribute("contenteditable", "true");
    line.classList.add("editableLine");
    documentArea.appendChild(line);
    line.focus();
}

// make a line READ-ONLY LOCKS THE LINE
function lockLine(line) {
    line.setAttribute("contenteditable", "false");
    line.classList.remove("editableLine");
    line.classList.add("lockedLine");
}

// prints ghost text
function showGhostText() {
    ghostText.textContent = storyLines[lineNumber];
}



// start game
document.addEventListener("DOMContentLoaded", function () {
    showGhostText();
    addEditableLine();

    documentArea.addEventListener("keydown", function (event) {
        const currentLine = document.getElementById("line-" + lineNumber);

        // when enter is pressed, LOCK
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // stops 'enter' from making a new line
            lockLine(currentLine);
            lineNumber++;

            if (lineNumber < storyLines.length) {
                showGhostText();
                addEditableLine();
            } else {
                ghostText.textContent = "I hope they don't find out.";
            }
        }
    });
});