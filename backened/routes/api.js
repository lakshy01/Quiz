
const route = require('express').Router();
const mongoose = require('mongoose');
const Question = mongoose.model('Question');

route.get('/questions', (req, res) => {
    Question.find({}).then((questions) => {
        res.status(200).send(questions);
    }).catch((err) => {
        res.status(500).send({ error: err });
    })
})


route.post('/questions', (req, res) => {
    let question = new Question();
    question.question = req.body.question,
        question.choice1 = req.body.choice1,
        question.choice2 = req.body.choice2,
        question.choice3 = req.body.choice3,
        question.choice4 = req.body.choice4,
        question.answer = req.body.answer
    question.save((err, doc) => {
        if (!err) {
            res.status(201).send(doc);
        } else {
            res.status(501), send({ error: err });
        }
    })
})

exports = module.exports = route; 