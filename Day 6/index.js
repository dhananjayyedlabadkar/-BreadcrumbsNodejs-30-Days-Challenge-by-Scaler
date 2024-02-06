const express = require('express');
const app = express();

function greetHandler(req, res) {
    const name = req.query.name;
    if(name){
        res.send(`Hello, ${name}!`);
    }
    else{
        res.send("Hello, Guest!");
    }
}

// Route to handle GET requests to "/greet" endpoint
app.get('/greet', greetHandler);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
 