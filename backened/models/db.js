
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://quiztester:Welcome@123@cluster0.xmnei.mongodb.net/testdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("mongodb connected");
    } else {
        console.log("error in the DB connection", err);
    }
});

require('./question');

