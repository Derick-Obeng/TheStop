
const readline = require("readline");

class Stopwatch {
    constructor() {
        this.startTime = null; // The time when the stopwatch starts
        this.stopTime = null;  // The time when the stopwatch stops
        this.running = false;  // Boolean flag to check if the stopwatch is running
        this.duration = 0;     // Total elapsed time in seconds
    }

    // Starts the stopwatch
    start() {
        if (this.running) {
            console.log("\nError: Stopwatch is already running!");
            return;
        }
        this.running = true;
        this.startTime = Date.now(); // Record the start time
        console.log("\nStopwatch started!");
    }

    // Stops the stopwatch and calculates the elapsed duration
    stop() {
        if (!this.running) {
            console.log("\nError: Stopwatch is not running!");
            return;
        }
        this.running = false;
        this.stopTime = Date.now(); // Record the stop time
        this.duration += (this.stopTime - this.startTime) / 1000; // Update the total duration
        console.log(`\nStopwatch stopped! Total Duration: ${this.duration.toFixed(2)} seconds`);
    }

    // Resets the stopwatch to its initial state
    reset() {
        this.startTime = null;
        this.stopTime = null;
        this.running = false;
        this.duration = 0; // Clear the recorded duration
        console.log("\nStopwatch has been reset!");
    }

    // Retrieves the current duration
    getDuration() {
        if (this.running) {
            // Calculate live duration if the stopwatch is running
            return this.duration + (Date.now() - this.startTime) / 1000;
        }
        return this.duration; // Return the static duration if stopped
    }
}

// Readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Instantiate the Stopwatch
const stopwatch = new Stopwatch();

// Function to display the menu
function displayMenu() {
    console.log("\nStopwatch Menu:");
    console.log("1. Start");
    console.log("2. Stop");
    console.log("3. Show Duration");
    console.log("4. Reset");
    console.log("5. Exit");

    rl.question("\nEnter your choice (1-5): ", handleInput);
}

// Function to handle user input
function handleInput(choice) {
    switch (choice.trim()) {
        case "1":
            stopwatch.start();
            break;
        case "2":
            stopwatch.stop();
            break;
        case "3":
            console.log(`\nElapsed Time: ${stopwatch.getDuration().toFixed(2)} seconds`);
            break;
        case "4":
            stopwatch.reset();
            break;
        case "5":
            console.log("\nExiting Stopwatch. Goodbye!");
            rl.close();
            return; // Stop further execution
        default:
            console.log("\nInvalid choice! Please enter a number between 1 and 5.");
    }

    // Show the menu again after handling input
    displayMenu();
}

// Start the program by displaying the menu
displayMenu();

