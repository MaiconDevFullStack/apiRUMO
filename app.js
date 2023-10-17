const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require('cors');

const app = express();

app.use(cors({
	origin: '*'
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT']
}));

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const PORT = process.env.PORT || 3500;




app.get("/", (req, res)=>{
	res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/upload', 
	fileUpload({ createParentPath: true }), (req, res) => {
		const files = req.files
		console.log(files)
		
		return res.json({ status: 'logged', message: 'logged'});	
	});


app.listen(PORT, ()=> console.log(`SERVER RUNNING ON PORT ${PORT}`));