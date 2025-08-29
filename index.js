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

function closeSystemErrorPopup() {
    document.getElementById('systemErrorPopup').style.display = 'none';
    document.getElementById('browserBoatGame').style.display = 'none';
    document.getElementById('desktopView').style.display = 'flex';
}

function closeSignInPage(){
    document.getElementById('signInPage').style.display = 'none';
    signedIn = true;
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

var i = 0;
var text = 'I am Harvey Ramos, a Grade 12 ICT student from Don Bosco Anselmo Rural High School, \nand a few weeks ago, I saw someone die right in front of me. \nWe had a nature retreat at Camp Katarungan. There a forest lay, beside a river that stretched for miles. \nWe hiked, swam, and played. We rode boats across the river and even caught some fish along the way. \nEverything was supposed to be so memorable, so fun … But I couldn’t enjoy it with Dan around.'
var speed = 50;

document.getElementById("contButton").style.display = 'none';

function typeWritter(){
    if (i < text.length){
        let char = text.charAt(i);
        if (char === '\n'){
            document.getElementById("typedStory").innerHTML += '<br>';
        } else {
            document.getElementById("typedStory").innerHTML += char;
        }
        i++;
        setTimeout(typeWritter, speed);
    } else {
        document.getElementById("contButton").style.display = 'block';
        document.getElementById("contButton").disabled = false;
    }
}

document.getElementById("contButton").onclick = function() {
    document.getElementById("contButton").style.display = 'none';
    document.getElementById("contButton").disabled = true;
    showGhostText();
    addEditableLine();
}

function charChecker(){
    if (textContent[lineNumber] == storyLines[lineNumber]) {
        lineNumber++;
        showGhostText();
        addEditableLine();
    } else {
        alert("Incorrect text. Please try again.");
    }
}

// story lines the player will type, edit and put story line
const storyLines = [
    "(-----------------, will code soon)",
    "For years, he made fun of everything I did",
    "The way I looked, the way I spoke. Fuck, maybe even the way I breathed.",
    "He always found something to laugh at, some way to humiliate me in front of everyone.",
    "I thought I’d be safe, away from school. But of course, he just had to be there too.",
    "He called me names and stole my hiking gear. He even pushed me into the river once.",
    "I tried to ignore him. I tried to keep calm, but at some point I couldn’t take it anymore. I snapped.",
    "One night, when I was checking over my boat, I saw something wrong with Dan’s …",
    "Their engine seemed pretty worn, and when I tried to use the gearshift, it wouldn’t budge into reverse.",
    "It was dangerous. I knew it. It could’ve gotten someone seriously hurt.",
    "I could’ve said something. I could’ve warned him. But why would I? Why would I help him?",
    "That brute. That monster. That spawn of Hell. What exactly did I owe him?",
    "I left that night without a second thought, knowing full well Dan would get himself hurt eventually.",
    "Color me surprised when he went full speed the next day and toppled over when he couldn’t slow down.",
    "He drowned in that river, making headlines at school for weeks.",
    "But I didn’t cry. I didn’t feel guilt. I didn’t kill him.",
    "He did that all on his own."    
];


let lineNumber = 0;

// get elem
const ghostText = document.getElementById("ghostText");
const documentArea = document.getElementById("editableLines");

document.getElementById("contButton").onclick = function() {
    document.getElementById("contButton").style.display = 'none';
    showGhostText();
    addEditableLine();
}

// new line
function addEditableLine() {
    const line = document.createElement("div");
    line.id = "line-" + lineNumber;
    line.setAttribute("contenteditable", "true");
    line.classList.add("editableLine");
    document.getElementById("docContainer").insertBefore(line, document.getElementById("ghostText"));
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
    charChecker();
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




// BOAT GAME
// --- CONFIG ---
const lanes = [60, 170, 280]; // y positions for up, middle, down
let currentLane = 1; // start in the middle
let obstacles = [];
let gameRunning = true;
let animationFrame;
let seconds = 0;
let maxSeconds = Math.floor(1 + Math.random() * 1); // 10 DAPAT ITO AKFSFB
let lastObstacleTime = performance.now();
let finalPhase = false;
let gameStarted = false;

// --- DOM ---
const obstacleDelay = 900;
const gameArea = document.getElementById('gameArea');
const boat = document.getElementById('boat');
const boatImg = document.getElementById('boatImg');
const gameOverMsg = document.getElementById('gameOverMsg');
const gameOverText = document.getElementById('gameOverText');

function startBoatGame() {
    if (gameStarted) return;
    gameStarted = true;
    document.getElementById('boatGamePrompt').style.display = 'none';
    gameRunning = true;
    finalPhase = false;
    pendingFinalPhase = false;
    obstacles = [];
    currentLane = 1;
    setBoatPosition();
    lastObstacleTime = performance.now();
    seconds = 0;
    maxSeconds = Math.floor(1 + Math.random() * 1); // 10 SECONDS DAPAT TOH
    animationFrame = requestAnimationFrame(gameLoop);
    gameTimer = setTimeout(() => {
        pendingFinalPhase = true;
    }, 1000 * maxSeconds);
}

function setBoatPosition() {
    boat.style.top = lanes[currentLane] + 'px';
}
setBoatPosition();

function spawnObstacle() {
    if (!gameRunning) return;
    const lane = Math.floor(Math.random() * 3);

    // Randomly choose obstacle type
    const obstacleImages = [
        "./icons/woodFloat.png",
        "./icons/rockFloat.png"
    ];
    const img = obstacleImages[Math.floor(Math.random() * obstacleImages.length)];

    const obs = document.createElement('div');
    obs.className = 'obstacle';
    obs.style.top = lanes[lane] + 'px';
    obs.dataset.lane = lane;
    obs.style.left = (gameArea.offsetWidth + 20) + 'px';
    obs.style.background = `url('${img}') no-repeat center/contain`;
    obs.style.imageRendering = 'pixelated';
    gameArea.appendChild(obs);
    obstacles.push(obs);
}

function spawnFinalObstacles() {
    const obstacleImages = [
        "./icons/woodFloat.png",
        "./icons/rockFloat.png"
    ];

    for (let lane = 0; lane < lanes.length; lane++) {
        const img = obstacleImages[Math.floor(Math.random() * obstacleImages.length)];
        const obs = document.createElement('div');
        obs.className = 'obstacle';
        obs.style.top = lanes[lane] + 'px';
        obs.dataset.lane = lane;
        obs.style.left = (gameArea.offsetWidth + 20) + 'px';
        obs.style.background = `url('${img}') no-repeat center/contain`;
        obs.style.imageRendering = 'pixelated';
        obs.dataset.final = "true";
        gameArea.appendChild(obs);
        obstacles.push(obs);
    }
}

function resetBoatGame() {
    // Stop animation
    if (animationFrame) cancelAnimationFrame(animationFrame);

    if (typeof gameTimer !== "undefined" && gameTimer) {
        clearTimeout(gameTimer);
        gameTimer = null;
    }   
    // Reset variables
    gameRunning = false;
    gameStarted = false;
    finalPhase = false;
    pendingFinalPhase = false;
    obstacles = [];
    currentLane = 1;
    seconds = 0;
    maxSeconds = Math.floor(1 + Math.random() * 1); // 10 SECONDS DAPAT TOH

    const obsElems = document.querySelectorAll('.obstacle');
    obsElems.forEach(elem => elem.remove());

    setBoatPosition();

    gameOverMsg.style.display = 'none';
    document.getElementById('boatGamePrompt').style.display = 'block';
}

let pendingFinalPhase = false; 

function gameLoop(now) {
    if (!gameRunning) return;

    // Spawn obstacles based on elapsed time
    if (!pendingFinalPhase && !finalPhase && (now - lastObstacleTime > obstacleDelay)) {
        spawnObstacle();
        lastObstacleTime = now;
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        let left = parseInt(obs.style.left);
        left -= 6;
        obs.style.left = left + 'px';

        // Collision detection
        if (left < 180 && left > 20 && parseInt(obs.dataset.lane) === currentLane) {
            if (obs.dataset.final === "true") {
                gameRunning = false;
                cancelAnimationFrame(animationFrame);
                gameOverMsg.innerHTML = "You crashed!";
                gameOverMsg.style.display = 'flex';

                // Show the error popup automatically after a short delay for effect
                setTimeout(function() {
                    gameOverMsg.style.display = 'none';
                    document.getElementById('systemErrorMsg').innerHTML = "System error! <br>Type: Server-side error. <br>Cause: Brakes not found.";
                    document.getElementById('systemErrorPopup').style.display = 'block';
                }, 1200);
            } else {
                gameRunning = false;
                cancelAnimationFrame(animationFrame);
                gameOverText.innerHTML = "You crashed!";
                gameOverMsg.style.display = 'flex';

                // Restart button reloads the game
                document.getElementById('restartButton').onclick = function() {
                    resetBoatGame();
                };
            }
        }
    }

    if (pendingFinalPhase && !finalPhase) {
        pendingFinalPhase = false;
        finalPhase = true;
        spawnFinalObstacles();
    }

    animationFrame = requestAnimationFrame(gameLoop);
}

function endGame(message) {
    if (!gameRunning || finalPhase) return;
    finalPhase = true;

    spawnFinalObstacles();
}

// --- START GAME ---
document.addEventListener('keydown', function(e) {
    if (!signedIn) return; // Block all game controls until signed in

    if (!gameStarted && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        startBoatGame();
        return;
    }
    if (!gameRunning) return;
    if (e.key === 'ArrowUp' && currentLane > 0) {
        currentLane--;
        setBoatPosition();
    }
    if (e.key === 'ArrowDown' && currentLane < 2) {
        currentLane++;
        setBoatPosition();
    }
});

gameOverMsg.style.display = 'none';


// --- SIGNINPAGE ---

let signedIn = false;

document.getElementById('signInBtn').onclick = function() {
    document.getElementById('signInPage').style.display = 'none';
    signedIn = true;
};