//App -> Express
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client')); //Dirname is ZodiacApp folder

//Setup environment variables
const port = process.env.PORT || 3000; 


app.listen(port, () => {
	console.log('Server is running on port ' + port);
});









