var fetch = require('node-fetch');
var fs = require('fs');

const express = require('express');
const app = express();


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

fetch('https://reqres.in/api/users?delay=3')
.then(response => response.json())
.then(data => {
    console.log(data)
    app.use(express.static())
});

fs.writeFile('fetch.json', JSON.stringify(fetch), function(err){
    if (err) {
        console.log(err);
    }
});


