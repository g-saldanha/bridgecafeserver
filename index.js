const express = require('express');
const app = express();
const mustache = require('mustache-express');
const router = express.Router();

router.get('/:weight',function(req,res){
    let wFull = 1093589 - 423000;
    let realWeight = req.params.weight;
    let percentage;
    if (realWeight > 423000){
        percentage =  ' em' + ((realWeight-423000)*100)/wFull + '%';
    } else {
        percentage = 'Vazio';
    }
    let weightString = {'name': percentage };
    res.render('index', weightString);
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname);

console.log('Running at Port 8080');