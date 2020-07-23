
const mongoose = require('mongoose');

let questionSchema = new mongoose.Schema({
    question: {
        type: String
    },
    choice1: {
        type: String
    },
    choice2: {
        type: String
    },
    choice3: {
        type: String
    },
    choice4: {
        type: String
    },
    answer: {
        type: String
    }
});

mongoose.model('Question', questionSchema);