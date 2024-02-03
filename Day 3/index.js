const { exec } = require('child_process');

function executeCommand(command) {
    // Spawning a shell and executing the command
    const childProcess = exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }

        // Printing the output to the console
        console.log(`Command Output:\n${stdout}`);

        if (stderr) {
            console.error(`Command Error Output:\n${stderr}`);
        }
    });

    // Handling the exit event of the child process
    childProcess.on('exit', (code) => {
        console.log(`Command exited with code ${code}`);
    });
}

// Example usage:
executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');
