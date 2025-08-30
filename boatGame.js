// BOAT GAME
// --- CONFIG ---
const lanes = [40, 150, 260]; // y positions for up, middle, down
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
                    openSystemErrorPopup();
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
    const crptdVisible = document.getElementById('crptdBoatGame').style.display === 'block';
    if (crptdVisible) {
        e.preventDefault(); // Block arrow key interaction
        return; // Skip all game logic
    }

    if (!signedIn) return;

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
