const express = require('express');
const app = express();
const mustache = require('mustache-express');
const router = express.Router();

router.get('/:weight',function(req,res){
    let weight = {'name': req.params.weight};
    let wFull;
    let percentage = (weight*100)/wFull + '%';
    res.render('index', percentage);
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname);

console.log('Running at Port 8080');