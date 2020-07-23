import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import { connect } from 'react-redux';
import './style.css';

const Header = (props) => {

    if (props.isSignedIn === true) {
        return (
            <div className="ui secondary pointing menu" style={{ marginTop: '20px' }}>
                <h2 className="back5">Quizey-Piezy</h2>
                <div className="right menu">
                    <Link to="/menu" className="item back5">
                        Menu
                </Link>
                    <Link to="/" className="item back5">
                        Home
                </Link>
                    <GoogleAuth />
                </div>
            </div>
        )
    } else {
        return (
            <div className="ui secondary pointing menu" style={{ marginTop: '20px' }}>
                <h2 className="back5">Quizey-Piezy</h2>
                <div className="right menu">
                    <Link to="/" className="item back5">
                        Home
                    </Link>
                    <GoogleAuth />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps)(Header);