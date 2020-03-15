// server.js
const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
} else {    
    // Run the app by serving the static files
    // in the dist directory
    app.use(express.static(__dirname + '/dist'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);