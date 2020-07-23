
import React from 'react';
import ReportItem from './ReportItem';
import './style.css';

class Checked extends React.Component {

    render() {
        const { question } = this.props;
        return (
            <div className="item" key={question.id}>
                <div className="content">
                    <div className="description">
                        <h2 className="back3">{question.question}</h2>
                        <div className="ui relaxed divided list">
                            <ReportItem choice={question.choice1} answer={question.answer} />
                            <ReportItem choice={question.choice2} answer={question.answer} />
                            <ReportItem choice={question.choice3} answer={question.answer} />
                            <ReportItem choice={question.choice4} answer={question.answer} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Checked;