import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css';
import image from '../images/ninth.png';

const Menu = (props) => {
    if (props.isSignedIn === true) {
        return (
            <Link to="/game" className="item">
                <div className="ui container pos back6">
                    <button className="btn glowbtn" style={{ marginLeft: '450px' }}>
                        StartGame
                </button>
                </div>
            </Link >
        )
    } else {
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
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps)(Menu);