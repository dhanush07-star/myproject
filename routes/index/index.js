var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
    res.render('index', { title: 'Train Booking' });
    //res.sendFile(__dirname+'/index.html');
  });

  // router.get('/train', async(req, res) => {
  //   res.render('train', { title: 'Hello TrainMaster' });
  //   // res.sendFile(__dirname+'/addTrains.html');
  //  });



  module.exports = router;
