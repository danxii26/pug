const express = require('express');
const pug = require('pug');

const PORT = 3001;
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Dan Ng.'
    });
});

var users = [
    {id: 1, name: 'Biden'},
    {id: 2, name: 'Trump'}
]

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: users
    })
});

app.get('/users/search', (req, res) => {
    const userName = req.query.name;
    const getUserByName = users.filter((user) => {
        return user.name === userName;
    })
    res.render('users/index', {
        users: getUserByName
    })
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})