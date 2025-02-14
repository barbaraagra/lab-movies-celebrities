const Celebrity = require('../models/Celebrity.model');

const router = require('express').Router();


router.get('/celebrities/create', (req, res, next) =>
    res.render('celebrities/new-celebrity'));

router.post('/celebrities/create', async (req, res, next) => {
    try {
        const { name, occupation, catchPhrase } = req.body;

        const createdCelebrity = await Celebrity.create({ name, occupation, catchPhrase });

        res.redirect('/celebrities');

    } catch (error) {
        res.redirect('/celebrities/new-celebrity')
        console.log(error);
        next(error);
    }
});

router.get('/celebrities', async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find();
        res.render('celebrities/celebrities', { celebrities })
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;