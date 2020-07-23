
import React from 'react';
import Checked from './Checked';
import { Link } from 'react-router-dom';

class Report extends React.Component {

    renderList = () => {
        if (this.props.questions.length === 0) {
            return;
        }

        return this.props.questions[0].map((question) => {
            return (
                <Checked question={question} />
            )
        })
    }


    render() {
        return (
            <div className="ui container">
                <div className="ui relaxed divided list">{this.renderList()}</div>
                <div className="ui container" style={{ textAlign: 'center' }}>
                    <button className="btn glowbtn">Print</button>
                    <Link to="/menu" className="item">
                        <button className="btn glowbtn">
                            Menu
                        </button>
                    </Link>
                </div>
            </div >
        )
    }
}

export default Report;