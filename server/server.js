const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send("Ola Mundo!") 
});

app.listen(8080, () => {
    console.log(`listen port 8080`);
})