const app = require('express')();
var PORT = process.env.PORT || 3000;

app.get('', (req, res)=>{
    res.send('WELCOME TO HEROKU KELVIN')
})

app.listen(PORT, ()=>{
    console.log(`APP RUNNING at ${PORT}`)
})