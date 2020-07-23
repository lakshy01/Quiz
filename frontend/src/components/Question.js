import React from 'react';
import Option from './Option';
import './style.css';

class Question extends React.Component {

    state = { parentVisited: false };

    onOptionSelect = (isVisited) => {
        if (this.state.parentVisited === false) {
            if (isVisited === true) {
                this.setState({ parentVisited: true });
            } else {
                this.setState({ parentVisited: true });
            }
        }
    }

    render() {
        const { question } = this.props;
        return (
            <div className="item" key={question.id}>
                <div className="content">
                    <div className="description">
                        <h2 className="back3">{question.question}</h2>
                        <div className="ui relaxed divided list">
                            <Option choice={question.choice1} answer={question.answer} onOptionSelect={this.onOptionSelect} parentVisited={this.state.parentVisited} />
                            <Option choice={question.choice2} answer={question.answer} onOptionSelect={this.onOptionSelect} parentVisited={this.state.parentVisited} />
                            <Option choice={question.choice3} answer={question.answer} onOptionSelect={this.onOptionSelect} parentVisited={this.state.parentVisited} />
                            <Option choice={question.choice4} answer={question.answer} onOptionSelect={this.onOptionSelect} parentVisited={this.state.parentVisited} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;