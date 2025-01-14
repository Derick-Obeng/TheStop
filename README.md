## TheStop



# Key Fixtures and Features 
---

## Stopwatch Program - README

### Description

This program implements a simple command-line stopwatch using JavaScript and Node.js. The stopwatch has the following features:
- Start the stopwatch.
- Stop the stopwatch.
- View the elapsed time.
- Reset the stopwatch to its initial state.

It also includes error handling for invalid user inputs and incorrect actions (e.g., trying to start an already running stopwatch).

---

### Features

1. **Start Stopwatch**:
   - Begins timing the duration.
   - Displays an error if the stopwatch is already running.

2. **Stop Stopwatch**:
   - Stops the timing process and calculates the elapsed duration.
   - Displays an error if the stopwatch is not currently running.

3. **Show Elapsed Time**:
   - Displays the total elapsed time in seconds, with two decimal places.
   - Shows the live time if the stopwatch is running.

4. **Reset Stopwatch**:
   - Resets the stopwatch to its initial state, clearing the duration and any running state.

5. **Exit Program**:
   - Closes the application gracefully.

---

### Prerequisites

- [Node.js](https://nodejs.org/) must be installed on your system.

---

### Usage Instructions

1. **Save the Program**:
   - Save the program code as `stopwatch.js`.

2. **Run the Program**:
   - Open a terminal and navigate to the directory where the file is saved.
   - Run the program using the command:
     ```bash
     node stopwatch.js
     ```

3. **Follow the Menu Options**:
   - Enter the corresponding number for your desired action:
     - `1` to Start the stopwatch.
     - `2` to Stop the stopwatch.
     - `3` to Show the elapsed time.
     - `4` to Reset the stopwatch.
     - `5` to Exit the program.

---

### Example Interaction

```plaintext
Stopwatch Menu:
1. Start Stopwatch
2. Stop Stopwatch
3. Show Elapsed Time
4. Reset Stopwatch
5. Exit

Enter your choice (1-5): 1
✅ Stopwatch started!

Stopwatch Menu:
1. Start Stopwatch
2. Stop Stopwatch
3. Show Elapsed Time
4. Reset Stopwatch
5. Exit

Enter your choice (1-5): 3
⏱️ Elapsed Time: 5.67 seconds

Stopwatch Menu:
1. Start Stopwatch
2. Stop Stopwatch
3. Show Elapsed Time
4. Reset Stopwatch
5. Exit

Enter your choice (1-5): 5
👋 Exiting Stopwatch. Goodbye!
```

---

### Error Handling

- **Starting when already running**:
  ```
  ⚠️ Error: Stopwatch is already running. Please stop it before starting again!
  ```

- **Stopping when not running**:
  ```
  ⚠️ Error: Stopwatch is not running. Start it before trying to stop!
  ```

- **Invalid menu choice**:
  ```
  ⚠️ Invalid choice! Please enter a number between 1 and 5.
  ```

---

### Notes

- The duration is displayed in seconds with two decimal precision.
- The program loops back to the menu until you choose to exit (`5`).

---

Let me know if you'd like to adjust anything! 😊






