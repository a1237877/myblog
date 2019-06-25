const express = require('express')
const router = express.Router()

router.get('/:name', function(req, res) {
    // res.send('hello, ' + req.params.name)
    res.render('users', {
        name: req.params.name,
        supplies: ['刘上文', '小鲤鱼', '魏老板']
    })
})

module.exports = router