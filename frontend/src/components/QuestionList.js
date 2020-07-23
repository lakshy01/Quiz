import React from 'react';
import Question from './Question';

class QuestionList extends React.Component {

    renderList = () => {
        if (this.props.questions.length === 0) {
            return;
        }

        return this.props.questions[0].map((question) => {
            return (
                <Question question={question} />
            )
        })
    }


    render() {
        return (
            <div className="ui container">
                <div className="ui relaxed divided list">{this.renderList()}</div>
            </div>
        )
    }
}

export default QuestionList;