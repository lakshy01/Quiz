
import React from 'react';
import './style.css';

class ReportItem extends React.Component {

    state = { iconColor: 'white' }

    componentDidMount() {
        if (this.props.answer === this.props.choice) {
            this.setState({ iconColor: 'green' });
        }
    }

    render() {

        return (
            <div className="item" key={this.props.choice}>
                <i className="large middle aligned icon circle" style={{ color: this.state.iconColor }}></i>
                <div className="content">
                    <div className="header back4">{this.props.choice}</div>
                </div>
            </div>
        )
    }
}

export default ReportItem;