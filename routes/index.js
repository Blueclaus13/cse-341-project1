const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('Hello Wold');
});

module.exports = router;