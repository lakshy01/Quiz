import React, { Component } from 'react';
import './style.css';

export default class Timer extends Component {

    state = {
        minutes: 1,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {minutes === 0 && seconds === 0
                    ? < button className="btn glowbtn" > Game Over</button>
                    : <button className="btn glowbtn">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</button>
                }
            </div>
        )
    }
}