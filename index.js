const express = require('express'); 
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

// const chef = require('./Data/chef.json');
const chefObj = require('./Data/chef.json');
const chef = Object.values(chefObj);


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Chef api is running')
});
//
app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    const selectedChef = chef.filter(n => n.id_ === id);
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`);
});