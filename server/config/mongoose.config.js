const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/theredline', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('established conncection to the server'))
    .catch(err => console.log('failed to establish connection', err))
