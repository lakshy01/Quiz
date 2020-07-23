
import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions';
import QuestionList from './QuestionList';
import Progress from './Progress';
import Timer from './Timer';
import Report from './Report';
import './style.css';
import image from '../images/ninth.png';


let j = 0;

class App extends React.Component {

    state = { open: false, show: null, minutes: null, seconds: null };

    componentDidMount() {
        this.props.fetchQuestions();
    }

    onEvaluation = () => {
        this.done = 0;
        for (let i = j; i < this.props.isAnswers.length; i++) {
            this.done = this.done + this.props.isAnswers[i];
        }
        j = this.props.isAnswers.length;
        this.done = (this.done / this.props.questions[0].length) * 100;
        this.done = Math.ceil(this.done);
        this.setState({ open: true });
    }

    onShowAnswerist = () => {
        this.setState({ show: 'show' });
    }

    onTimeChange = (minutes, seconds) => {
        this.setState({
            minutes: minutes,
            seconds: seconds
        })
    }

    render() {
        if (this.props.isSignedIn === false) {
            return (
                <div className="ui container">
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="ten wide column">
                                <img src={image}></img>
                            </div>
                            <div className="six wide column pos">
                                <h2 className="back5" style={{ fontSize: '40px' }}>Not yet Signin</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            if (this.state.open === false) {
                return (
                    <div className="ui container">
                        <div className="ui grid">
                            <div className="ui row">
                                <div className="thirteen wide column">
                                    <h2 className="back5">Let's begin</h2>
                                </div>
                                <div className="three wide column">
                                    <Timer onTimeChange={this.onTimeChange} />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <QuestionList questions={this.props.questions} />
                        <br />
                        <hr />
                        <br />
                        <div className="ui container" style={{ textAlign: 'center' }}>
                            <button onClick={this.onEvaluation} className="btn glowbtn">Submit</button>
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }
            if (this.state.show === 'show') {
                return (
                    <div className="ui container">
                        <Report questions={this.props.questions} />
                    </div>
                )
            }
            return (
                <div className="ui container">
                    <Progress done={this.done} />
                    <br />
                    <hr />
                    <br />
                    <div className="ui container" style={{ textAlign: 'center' }}>
                        <button onClick={this.onShowAnswerist} className="btn glowbtn">Check Answers</button>
                    </div>
                </div>
            )
        }
    }
};

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        isAnswers: state.isAnswers,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { fetchQuestions })(App);