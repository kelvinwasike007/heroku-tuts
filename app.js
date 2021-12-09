var nano = require('nano');
const app = require('express')();
nano(process.env.COUCHDB_URL || 'http://127.0.0.1:5984').db.create('test2', function(err) {  
    if (err) {
      console.error(err);
    }
  });

var PORT = process.env.PORT || 3000;

app.get('', (req, res)=>{
    res.send('WELCOME TO HEROKU MY NIGA')
})

app.listen(PORT, ()=>{
    console.log(`APP RUNNING at ${PORT}`)
})