const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();
const port=2000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.enable('view cache');

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about',(req,res)=>
{
    res.render('var',{'name':'deepak'});
})

app.listen(port,()=>
{
    console.log("server start on port"+port);
});