// Predefined levels
// easy 4x4, int 5x5, hard 7x7
const levels = {
    easy: [
        [
            { row: 0, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 0, col: 1, type: "bend", rotation: 0, filled: false },
            { row: 0, col: 2, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 0, col: 3, type: "end", rotation: 0, filled: false, role: "consumer" }
        ],
        [
            { row: 1, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 1, col: 1, type: "t", rotation: 0, filled: false },
            { row: 1, col: 2, type: "t", rotation: 0, filled: false },
            { row: 1, col: 3, type: "straight", rotation: 0, filled: false }
        ],
        [
            { row: 2, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 2, col: 1, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 2, col: 2, type: "t", rotation: 0, filled: false, role: "source" },
            { row: 2, col: 3, type: "t", rotation: 0, filled: false }
        ],
        [
            { row: 3, col: 0, type: "bend", rotation: 0, filled: false },
            { row: 3, col: 1, type: "straight", rotation: 0, filled: false },
            { row: 3, col: 2, type: "straight", rotation: 0, filled: false },
            { row: 3, col: 3, type: "bend", rotation: 0, filled: false }
        ]
    ],

    intermediate: [
        [
            { row: 0, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 0, col: 1, type: "bend", rotation: 0, filled: false },
            { row: 0, col: 2, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 0, col: 3, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 0, col: 4, type: "end", rotation: 0, filled: false, role: "consumer" }
        ],
        [
            { row: 1, col: 0, type: "bend", rotation: 0, filled: false },
            { row: 1, col: 1, type: "t", rotation: 0, filled: false },
            { row: 1, col: 2, type: "t", rotation: 0, filled: false },
            { row: 1, col: 3, type: "bend", rotation: 0, filled: false },
            { row: 1, col: 4, type: "straight", rotation: 0, filled: false }
        ],
        [
            { row: 2, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 2, col: 1, type: "straight", rotation: 0, filled: false },
            { row: 2, col: 2, type: "t", rotation: 0, filled: false, role: "source" },
            { row: 2, col: 3, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 2, col: 4, type: "straight", rotation: 0, filled: false }
        ],
        [
            { row: 3, col: 0, type: "bend", rotation: 0, filled: false },
            { row: 3, col: 1, type: "bend", rotation: 0, filled: false },
            { row: 3, col: 2, type: "t", rotation: 0, filled: false },
            { row: 3, col: 3, type: "t", rotation: 0, filled: false },
            { row: 3, col: 4, type: "t", rotation: 0, filled: false }
        ],
        [
            { row: 4, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 4, col: 1, type: "bend", rotation: 0, filled: false },
            { row: 4, col: 2, type: "bend", rotation: 0, filled: false },
            { row: 4, col: 3, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 4, col: 4, type: "bend", rotation: 0, filled: false }
        ]
    ],

    hard: [
        [
            { row: 0, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 0, col: 1, type: "bend", rotation: 0, filled: false },
            { row: 0, col: 2, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 0, col: 3, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 0, col: 4, type: "straight", rotation: 0, filled: false },
            { row: 0, col: 5, type: "t", rotation: 0, filled: false },
            { row: 0, col: 6, type: "end", rotation: 0, filled: false, role: "consumer" }
        ],
        [
            { row: 1, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 1, col: 1, type: "bend", rotation: 0, filled: false },
            { row: 1, col: 2, type: "t", rotation: 0, filled: false },
            { row: 1, col: 3, type: "t", rotation: 0, filled: false },
            { row: 1, col: 4, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 1, col: 5, type: "straight", rotation: 0, filled: false },
            { row: 1, col: 6, type: "end", rotation: 0, filled: false, role: "consumer" }
        ],
        [
            { row: 2, col: 0, type: "bend", rotation: 0, filled: false },
            { row: 2, col: 1, type: "t", rotation: 0, filled: false },
            { row: 2, col: 2, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 2, col: 3, type: "t", rotation: 0, filled: false },
            { row: 2, col: 4, type: "straight", rotation: 0, filled: false },
            { row: 2, col: 5, type: "t", rotation: 0, filled: false },
            { row: 2, col: 6, type: "bend", rotation: 0, filled: false }
        ],
        [
            { row: 3, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 3, col: 1, type: "t", rotation: 0, filled: false },
            { row: 3, col: 2, type: "t", rotation: 0, filled: false },
            { row: 3, col: 3, type: "t", rotation: 0, filled: false, role: "source" },
            { row: 3, col: 4, type: "bend", rotation: 0, filled: false },
            { row: 3, col: 5, type: "t", rotation: 0, filled: false },
            { row: 3, col: 6, type: "bend", rotation: 0, filled: false }
        ],
        [
            { row: 4, col: 0, type: "t", rotation: 0, filled: false },
            { row: 4, col: 1, type: "t", rotation: 0, filled: false },
            { row: 4, col: 2, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 4, col: 3, type: "t", rotation: 0, filled: false },
            { row: 4, col: 4, type: "t", rotation: 0, filled: false },
            { row: 4, col: 5, type: "straight", rotation: 0, filled: false },
            { row: 4, col: 6, type: "straight", rotation: 0, filled: false }
        ],
        [
            { row: 5, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 5, col: 1, type: "t", rotation: 0, filled: false },
            { row: 5, col: 2, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 5, col: 3, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 5, col: 4, type: "straight", rotation: 0, filled: false },
            { row: 5, col: 5, type: "straight", rotation: 0, filled: false },
            { row: 5, col: 6, type: "straight", rotation: 0, filled: false }
        ],
        [
            { row: 6, col: 0, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 6, col: 1, type: "bend", rotation: 0, filled: false },
            { row: 6, col: 2, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 6, col: 3, type: "straight", rotation: 0, filled: false },
            { row: 6, col: 4, type: "bend", rotation: 0, filled: false },
            { row: 6, col: 5, type: "end", rotation: 0, filled: false, role: "consumer" },
            { row: 6, col: 6, type: "end", rotation: 0, filled: false, role: "consumer" }
        ]
    ]
};

// Other HTML elements (DOM const)
const startButton = document.querySelector("#start-button");
const nameInput = document.querySelector("#player-name");
const difficultySelect = document.querySelector("#difficulty");

const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");

const displayName = document.querySelector("#display-name");
const displayDifficulty = document.querySelector("#display-difficulty");

const board = document.querySelector("#board");

const gameState = {
    playerName: "",
    difficulty: "",
    board: [],
    isGameOver: false,
    startTime: 0,
    elapsedTime: 0,
    timerInterval: null
};

const gameMessage = document.querySelector("#game-message");

const saveButton = document.querySelector("#save-button");
const continueButton = document.querySelector("#continue-button");

const leaderboard = document.querySelector("#leaderboard");

const backButton = document.querySelector("#back-button");

const elapsedTimeDisplay = document.querySelector("#elapsed-time");

const startMessage = document.querySelector("#start-message");

// Function to copy level setup
// Copy instead of assigning directly, to prevent original setup from being modified
function copyLevel(level) {
    return level.map(function (row) {
        return row.map(function (cell) {
            return {
                row: cell.row,
                col: cell.col,
                type: cell.type,
                rotation: cell.rotation,
                filled: cell.filled,
                role: cell.role || "normal"
            };
        });
    });
}

// Using binary numbers to track pipe openings & connections
// Bit values in clockwise order
// up, right, down, left
const DIRECTION_BITS = {
    up: 8,
    right: 4,
    down: 2,
    left: 1
};

// Base mask for each pipe type before rotation
function getBaseMask(type) {
    if (type === "straight") {
        return DIRECTION_BITS.up + DIRECTION_BITS.down;
    }

    if (type === "bend") {
        return DIRECTION_BITS.up + DIRECTION_BITS.right;
    }

    if (type === "end") {
        return DIRECTION_BITS.up;
    }

    return DIRECTION_BITS.down + DIRECTION_BITS.right + DIRECTION_BITS.left;
}

// Rotate one mask by 90 degrees clockwise
function rotateMask90(mask) {
    let newMask = 0;

    if (mask & DIRECTION_BITS.up) {
        newMask += DIRECTION_BITS.right;
    }

    if (mask & DIRECTION_BITS.right) {
        newMask += DIRECTION_BITS.down;
    }

    if (mask & DIRECTION_BITS.down) {
        newMask += DIRECTION_BITS.left;
    }

    if (mask & DIRECTION_BITS.left) {
        newMask += DIRECTION_BITS.up;
    }

    return newMask;
}

// Get actual current mask of a cell after rotation
function getMask(cell) {
    let mask = getBaseMask(cell.type);
    const rotationSteps = cell.rotation / 90;

    for (let i = 0; i < rotationSteps; i++) {
        mask = rotateMask90(mask);
    }

    return mask;
}

// Check if a cell is open in one direction
function hasOpening(cell, direction) {
    const mask = getMask(cell);
    return (mask & DIRECTION_BITS[direction]) !== 0;
}

// Opposite direction helper for neighbor checking
function getOppositeDirection(direction) {
    if (direction === "up") {
        return "down";
    }

    if (direction === "right") {
        return "left";
    }

    if (direction === "down") {
        return "up";
    }

    return "right";
}
// Function to get neighbor cell coordinates
function getNextPosition(row, col, direction) {
    if (direction === "up") {
        return { row: row - 1, col: col };
    }

    if (direction === "right") {
        return { row: row, col: col + 1 };
    }

    if (direction === "down") {
        return { row: row + 1, col: col };
    }

    return { row: row, col: col - 1 };
}

// Function to check if inside board (not out of bounds)
function isInsideBoard(row, col) {
    return row >= 0 &&
           row < gameState.board.length &&
           col >= 0 &&
           col < gameState.board[row].length;
}

// Function to check connection with direct neighbor
function areCellsConnected(row, col, direction) {
    const cell = gameState.board[row][col];

    if (!hasOpening(cell, direction)) {
        return false;
    }

    const nextPosition = getNextPosition(row, col, direction);
    const nextRow = nextPosition.row;
    const nextCol = nextPosition.col;

    if (!isInsideBoard(nextRow, nextCol)) {
        return false;
    }

    const neighbor = gameState.board[nextRow][nextCol];
    const oppositeDirection = getOppositeDirection(direction);

    return hasOpening(neighbor, oppositeDirection);
}

// Debugging for Bitmask, directions logic
function maskToText(cell) {
    const mask = getMask(cell);
    const directions = [];

    if (mask & DIRECTION_BITS.up) {
        directions.push("up");
    }

    if (mask & DIRECTION_BITS.right) {
        directions.push("right");
    }

    if (mask & DIRECTION_BITS.down) {
        directions.push("down");
    }

    if (mask & DIRECTION_BITS.left) {
        directions.push("left");
    }

    return directions.join(",");
}

// Debugging for cell connections
function getConnectedDirections(row, col) {
    const directions = ["up", "right", "down", "left"];
    const connectedDirections = [];

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];

        if (areCellsConnected(row, col, direction)) {
            connectedDirections.push(direction);
        }
    }

    return connectedDirections;
}

// Function to find source cell
function findSource() {
    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            const cell = gameState.board[row][col];

            if (cell.role === "source") {
                return { row: row, col: col };
            }
        }
    }

    return null;
}

// Function to find consumer cells
function findConsumers() {
    const consumers = [];

    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            const cell = gameState.board[row][col];

            if (cell.role === "consumer") {
                consumers.push({ row: row, col: col });
            }
        }
    }

    return consumers;
}

// Function to check if all consumers reached
// For win condition
function areAllConsumersFilled() {
    const consumers = findConsumers();

    if (consumers.length === 0) {
        return false;
    }

    for (let i = 0; i < consumers.length; i++) {
        const consumer = consumers[i];
        const row = consumer.row;
        const col = consumer.col;

        if (!gameState.board[row][col].filled) {
            return false;
        }
    }

    return true;
}

// Function to check if filled pipes connect correctly to adjacent cells
// Openings that point outside the board are allowed for end pipes
function hasNoLeaks() {
    const directions = ["up", "right", "down", "left"];

    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            const cell = gameState.board[row][col];

            if (!cell.filled) {
                continue;
            }

            for (let i = 0; i < directions.length; i++) {
                const direction = directions[i];

                if (!hasOpening(cell, direction)) {
                    continue;
                }

                const nextPosition = getNextPosition(row, col, direction);
                const nextRow = nextPosition.row;
                const nextCol = nextPosition.col;

                // End pipes may point outside the board
                if (!isInsideBoard(nextRow, nextCol)) {
                    if (cell.type === "end") {
                        continue;
                    }

                    return false;
                }

                if (!areCellsConnected(row, col, direction)) {
                    return false;
                }
            }
        }
    }

    return true;
}

// Function to check if every pipe is connected to the source
function areAllPipesFilled() {
    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            if (!gameState.board[row][col].filled) {
                return false;
            }
        }
    }

    return true;
}

// Function to check if the connected pipe network contains a cycle
function hasNoCycles() {
    const source = findSource();

    if (source === null) {
        return false;
    }

    const stack = [];
    const visited = [];

    stack.push({
        row: source.row,
        col: source.col,
        parentRow: -1,
        parentCol: -1
    });

    while (stack.length > 0) {
        const current = stack.pop();
        const row = current.row;
        const col = current.col;
        const key = `${row},${col}`;

        if (visited.includes(key)) {
            continue;
        }

        visited.push(key);

        const directions = ["up", "right", "down", "left"];

        for (let i = 0; i < directions.length; i++) {
            const direction = directions[i];

            if (!areCellsConnected(row, col, direction)) {
                continue;
            }

            const nextPosition = getNextPosition(row, col, direction);
            const nextRow = nextPosition.row;
            const nextCol = nextPosition.col;
            const nextKey = `${nextRow},${nextCol}`;

            // ignore edge back to parent
            if (nextRow === current.parentRow && nextCol === current.parentCol) {
                continue;
            }

            if (visited.includes(nextKey)) {
                return false;
            }

            stack.push({
                row: nextRow,
                col: nextCol,
                parentRow: row,
                parentCol: col
            });
        }
    }

    return true;
}

// Function for win check
// Puzzle is solved only if every required condition is true
function checkWin() {
    const solved =
        areAllConsumersFilled() &&
        hasNoLeaks() &&
        areAllPipesFilled() &&
        hasNoCycles();

    if (solved) {
        gameMessage.innerHTML = "You solved the puzzle!";

        if (!gameState.isGameOver) {
            stopTimer();
            saveLeaderboardEntry();
            renderLeaderboard();
        }

        // Prevent interaction when game ends
        gameState.isGameOver = true;
        return true;
    }

    gameMessage.innerHTML = "";
    return false;
}

// Function to save game data
function saveGame() {
    const saveData = {
        playerName: gameState.playerName,
        difficulty: gameState.difficulty,
        board: gameState.board,
        isGameOver: gameState.isGameOver,
        elapsedTime: gameState.elapsedTime
    };

    localStorage.setItem("waterPipesSave", JSON.stringify(saveData));
    gameMessage.innerHTML = "Game saved successfully.";
}

// Function to load game data
function loadGame() {
    const savedText = localStorage.getItem("waterPipesSave");

    if (savedText === null) {
        gameMessage.innerHTML = "";
        return false;
    }

    const savedData = JSON.parse(savedText);
    leaderboard.innerHTML = "";

    gameState.playerName = savedData.playerName;
    gameState.difficulty = savedData.difficulty;
    gameState.board = savedData.board;
    gameState.isGameOver = savedData.isGameOver;
    gameState.elapsedTime = savedData.elapsedTime || 0;

    displayName.innerHTML = gameState.playerName;
    displayDifficulty.innerHTML = gameState.difficulty.charAt(0).toUpperCase() + gameState.difficulty.slice(1);

    startScreen.style.display = "none";
    gameScreen.style.display = "block";

    fillConnectedPipes();
    renderBoard();
    checkWin();

    elapsedTimeDisplay.innerHTML = gameState.elapsedTime;

    if (!gameState.isGameOver) {
        startTimer();
    } else {
        stopTimer();
    }

    return true;
}

// Functions for timer
function updateElapsedTime() {
    gameState.elapsedTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    elapsedTimeDisplay.innerHTML = gameState.elapsedTime;
}

function startTimer() {
    stopTimer();

    gameState.startTime = Date.now() - gameState.elapsedTime * 1000;

    gameState.timerInterval = setInterval(function () {
        updateElapsedTime();
    }, 1000);
}

function stopTimer() {
    if (gameState.timerInterval !== null) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

// Function to load leaderboard data
function getLeaderboardData() {
    const savedText = localStorage.getItem("waterPipesLeaderboard");

    if (savedText === null) {
        return [];
    }

    const data = JSON.parse(savedText);

    // keep only entries that have elapsedTime
    // help to filter out old entries w/o time
    return data.filter(function (entry) {
        return entry.elapsedTime !== undefined;
    });
}

// Function to format time
function formatElapsedTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (remainingSeconds < 10) {
        return `${minutes}:0${remainingSeconds}`;
    }

    return `${minutes}:${remainingSeconds}`;
}

// Function to save one leaderboard entry
function saveLeaderboardEntry() {
    const leaderboardData = getLeaderboardData();

    leaderboardData.push({
        playerName: gameState.playerName,
        difficulty: gameState.difficulty,
        elapsedTime: gameState.elapsedTime
    });

    localStorage.setItem("waterPipesLeaderboard", JSON.stringify(leaderboardData));
}

// Function to render leaderboard
function renderLeaderboard() {
    const leaderboardData = getLeaderboardData();

    if (leaderboardData.length === 0) {
        leaderboard.innerHTML = "No leaderboard entries yet.";
        return;
    }

    // sort by shortest time
    leaderboardData.sort(function (a, b) {
        return a.elapsedTime - b.elapsedTime;
    });

    let html = "<ul>";

    for (let i = 0; i < leaderboardData.length; i++) {
        const entry = leaderboardData[i];
        const formattedTime = formatElapsedTime(entry.elapsedTime || 0);
        const difficultyText =
            entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1);

        html += `<li>${entry.playerName} - ${difficultyText} - ${formattedTime}</li>`;
    }

    html += "</ul>";

    leaderboard.innerHTML = html;
}

// Functions for start page
function showStartMessage(message) {
    startMessage.textContent = message;
}

function clearStartMessage() {
    startMessage.textContent = "";
}

// Save button event handler
function handleSaveButtonClick() {
    saveGame();
}

// Continue button event handler
function handleContinueButtonClick() {
    const loaded = loadGame();

    if (!loaded) {
        showStartMessage("No saved game found.");
        renderLeaderboard();
        return;
    }

    clearStartMessage();
}

// Back button event handler
function handleBackButtonClick() {
    startScreen.style.display = "block";
    gameScreen.style.display = "none";

    clearStartMessage();
    gameMessage.innerHTML = "";
    stopTimer();
    renderLeaderboard();
}

// Debugging puzzle
function debugBoardConnections() {
    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            const cell = gameState.board[row][col];
            console.log(
                row,
                col,
                cell.type,
                cell.role,
                cell.rotation,
                "open:",
                maskToText(cell),
                "connected:",
                getConnectedDirections(row, col),
                "filled:",
                cell.filled
            );
        }
    }
}

// Function to reset filled values
// Start on clean board each time before running BFS
function clearFilledState() {
    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            gameState.board[row][col].filled = false;
        }
    }
}

// Function to run BFS from source cell
function fillConnectedPipes() {
    clearFilledState();

    const source = findSource();

    if (source === null) {
        return;
    }

    const queue = [];
    const visited = [];

    queue.push(source);
    visited.push(`${source.row},${source.col}`);

    while (queue.length > 0) {
        const current = queue.shift();
        const row = current.row;
        const col = current.col;

        gameState.board[row][col].filled = true;

        const directions = ["up", "right", "down", "left"];

        for (let i = 0; i < directions.length; i++) {
            const direction = directions[i];

            if (!areCellsConnected(row, col, direction)) {
                continue;
            }

            const nextPosition = getNextPosition(row, col, direction);
            const nextRow = nextPosition.row;
            const nextCol = nextPosition.col;

            const key = `${nextRow},${nextCol}`;

            if (!visited.includes(key)) {
                visited.push(key);
                queue.push({ row: nextRow, col: nextCol });
            }
        }
    }
}

// Debugging to check cell roles
function roleToText(cell) {
    return cell.role;
}

// Function to convert difficulty -> board data
function getLevelByDifficulty(difficulty) {
    if (difficulty === "easy") {
        return copyLevel(levels.easy);
    }

    if (difficulty === "intermediate") {
        return copyLevel(levels.intermediate);
    }

    return copyLevel(levels.hard);
}

// Function for random rotation
function getRandomRotation() {
    const randomNumber = Math.floor(Math.random() * 4);

    return randomNumber * 90;
}

// Function to randomize the loaded board
function randomizeBoardRotations(boardData) {
    for (let row = 0; row < boardData.length; row++) {
        for (let col = 0; col < boardData[row].length; col++) {
            boardData[row][col].rotation = getRandomRotation();
        }
    }
}

// Function to convert pipe type -> visual symbol
function getPipeSymbol(type) {
    // End pipe - capped line
    if (type === "end") {
        return "╹"; // looks like a capped line
    }

    if (type === "straight") {
        return "│";
    }

    if (type === "bend") {
        return "└";
    }

    return "┬";
}

// Render board function
// Read from gameState.board
function renderBoard() {
    const size = gameState.board.length;
    board.style.gridTemplateColumns = `repeat(${size}, 60px)`;
    board.style.gridTemplateRows = `repeat(${size}, 60px)`;

    let html = "";

    for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
            const cell = gameState.board[row][col];

            // CSS class for pipe type
            const pipeClass = `pipe-${cell.type}`;

            // CSS class for rotation type
            const rotationClass = `rot-${cell.rotation}`;

            // CSS class for filled pipe
            const filledClass = cell.filled ? "cell-filled" : "cell-empty";

            // CSS class for source & consumer cells
            let roleClass = "";

            if (cell.role === "source") {
                roleClass = "cell-source";
            }

            if (cell.role === "consumer") {
                roleClass = "cell-consumer";
            }

            // CSS class for pipe symbol
            const pipeSymbol = getPipeSymbol(cell.type);

            // store row and col for later click handling
            html += `<div class="cell ${pipeClass} ${rotationClass} ${filledClass} ${roleClass}" data-row="${cell.row}" data-col="${cell.col}"><span class="pipe-symbol">${pipeSymbol}</span></div>`;
        }
    }

    board.innerHTML = html;
}

// Function to rotate cells
function rotateCell(row, col) {
    const cell = gameState.board[row][col];

    cell.rotation += 90;

    if (cell.rotation === 360) {
        cell.rotation = 0;
    }
}

// Event handler for board click (rotation)
// Event delegation - only use 1 listener for the parent board
    // Only handle the click if the clicked target is a ".cell"
function handleBoardClick(event) {
    // Prevent interaction when game finished
    if (gameState.isGameOver) {
        return;
    }

    let target = event.target;

    if (target.matches(".pipe-symbol")) {
        target = target.parentElement;
    }

    if (!target.matches(".cell")) {
        return;
    }

    const row = Number(target.dataset.row);
    const col = Number(target.dataset.col);

    rotateCell(row, col);
    fillConnectedPipes();
    renderBoard();
    checkWin();
}

// Event handler for Start Button
function handleStartButtonClick() {
    const enteredName = nameInput.value.trim();

    // Required name check
    if (enteredName === "") {
        showStartMessage("Please enter your name.");
        return;
    }

    // clear previous message
    clearStartMessage();

    const difficulty = difficultySelect.value;

    gameState.playerName = enteredName;
    gameState.difficulty = difficulty;
    gameState.isGameOver = false;
    gameState.elapsedTime = 0;
    gameState.startTime = 0;
    gameMessage.innerHTML = "";

    displayName.innerHTML = gameState.playerName;
    displayDifficulty.innerHTML =
        gameState.difficulty.charAt(0).toUpperCase() + gameState.difficulty.slice(1);

    startScreen.style.display = "none";
    gameScreen.style.display = "block";

    // load predefined board
    gameState.board = getLevelByDifficulty(gameState.difficulty);

    // randomize the rotations of the loaded board
    randomizeBoardRotations(gameState.board);

    fillConnectedPipes();
    renderBoard();
    elapsedTimeDisplay.innerHTML = gameState.elapsedTime;
    startTimer();
    checkWin();
}

// Event listener to start game
startButton.addEventListener("click", handleStartButtonClick);

// Event listener to rotate clicked cell
// 1 event listener for parent
board.addEventListener("click", handleBoardClick);

// Event listener to save game
saveButton.addEventListener("click", handleSaveButtonClick);

// Event listener to continue game
continueButton.addEventListener("click", handleContinueButtonClick);

// Event listener for back button
backButton.addEventListener("click", handleBackButtonClick);

// Render leaderboard once when script loads
renderLeaderboard();

