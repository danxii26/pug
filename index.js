const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');
const userRouter = require('./routes/user');

const PORT = 3001;
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Dan Ng.'
    });
});

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});