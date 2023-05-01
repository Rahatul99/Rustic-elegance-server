const express = require('express');

//calling express
const app = express();

app.get('/', (req, res)=> {
    res.json({ message: 'hello server running' });
});


//using app
app.listen(5000, () => {
    console.log('server is running on port 5000');
})