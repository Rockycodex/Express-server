const express = require('express');
const cors = require('cors');

const users = require('./middlewares/users/index');
const app = express();
const PORT = 4000;

app.use(cors()); //middlewares
app.use(express.json());

app.use('/users', users);
app.use('/health', (req, res) => {
	res.status(200).send('ok');
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running and App is listening on port "+ PORT)
	else
		console.log("Error occured, server can't start", error);
	}
);
