

// const express = require('express');
// const path = require('path');
// let app =express()


// app.get("/",(req,res)=>{
// 	//res.send("Ram Ram Bhai Sare Ne")
// 	res.sendFile(path.join(__dirname , '/public/home.html'))

// })

// app.get("/c",(req,res)=>{
// 	res.sendFile(path.join(__dirname , '/public/currencyconverter.html'))
// })

// app.listen(8000,()=>{
// 	console.log("Server Running on 8000")
// })


const express = require ('express');
const path = require ('path');
let app = express()

app.get("/",(req,res)=>{
	res.sendFile(path.join(__dirname,'/public/home.html'))
})

app.get("/c",(req,res)=>{
	res.sendFile(path.join(__dirname, '/public/Registration.html'))
})


//Multiple queru parameter
app.get('/queryparam', (req,res)=>{
	 
	let str = req.query.uname  + req.query.uid;
	
     res.send(str)

  })

app.get('/q/:uname/:uid',(req,res)=>{
	let uname = req.params.uname
	let uid = req.params.uid
	let str = uname + uid;
	res.send(str)
})


app.listen(8000,()=>{
	console.log("Server Running on 8000")
})