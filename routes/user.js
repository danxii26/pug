const express = require('express');
const router = express.Router();

var users = [
    {id: 1, name: 'Biden'},
    {id: 2, name: 'Trump'}
]

router.get('/', (req, res) => {
    res.render('users/index', {
        users: users
    })
});

router.get('/search', (req, res) => {
    const userName = req.query.name;
    const getUserByName = users.filter((user) => {
        return user.name.toLowerCase().indexOf(userName.toLowerCase()) >= 0;
    })
    res.render('users/index', {
        users: getUserByName
    })
});

router.get('/create', (req, res) => {
    res.render('users/create');
});

router.post('/create', (req, res) => {
    users.push(req.body);
    res.redirect('/users');
});

module.exports = router;
