const express = require("express");

const app = express.Router();

app.get('/', (req, res)=>{
    const users = {
		data: [
			{id: 1, name: "sunil"},
			{id: 2, name: "nidhi"},
			{id: 3, name: "vidhi"},
		]
	}
	res.status(200);
	
    res.send(JSON.stringify(users));
});

// /questions/56333308/express-api-fetch-request-returns-undefined
// /questions/:questionId/:questionTitle
app.get('/:id', (req, res)=>{
    const users = [
			{id: 1, name: "sunil"},
			{id: 2, name: "nidhi"},
			{id: 3, name: "vidhi"},
		]
	const {id} = req.params
	const {a, b} = req.query
	console.log(id, a, b);
	const newUserList = users.filter(user => user.id === parseInt(id));
	console.log(newUserList)
	res.status(200);

    res.send(JSON.stringify(newUserList[0]));
});

app.post('/', (req, res, next) => {
	const {username, password} = req.body;
	console.log(username, password);
})


app.put('/:id', (req, res, next) => {
	console.log(req, res);
})

app.delete('/:id', (req, res, next) => {
	console.log(req, res);
})

module.exports = app;
