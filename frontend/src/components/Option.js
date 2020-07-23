import React from 'react';
import { connect } from 'react-redux';
import { selectedAnswer } from '../actions';
import './style.css';

class Option extends React.Component {

    state = { iconColor: 'white', visited: false }

    onOptionSelect = () => {
        if (this.props.parentVisited === false) {
            if (this.state.visited === false) {
                if (this.props.choice === this.props.answer) {
                    this.props.selectedAnswer(1);
                    this.setState({
                        iconColor: 'green',
                        visited: true
                    });
                    this.props.onOptionSelect(this.state.visited);
                } else {
                    this.props.selectedAnswer(0);
                    this.setState({
                        iconColor: 'red',
                        visited: true
                    });
                    this.props.onOptionSelect(this.state.visited);
                }
            }

        }
    }



    render() {

        return (
            <div className="item" key={this.props.choice} onClick={this.onOptionSelect}>
                <i className="large middle aligned icon circle" style={{ color: this.state.iconColor }}></i>
                <div className="content">
                    <div className="header back4">{this.props.choice}</div>
                </div>
            </div>
        )
    }
}

export default connect(null, { selectedAnswer })(Option);