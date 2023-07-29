import React from 'react'
import BackIcon from '../assets/backicon.svg';
import Vector from '../assets/Vector.svg';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="home">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="div">
              <div className="text-wrapper">BACK</div>
              <img
                className="img"
                alt="Group"
                src={BackIcon}
              />
            </div>
            <p className="don-t-have-an">
              <span className="span">Don’t have an account? </span>
              <Link to="/registration" className="text-wrapper-2" role='button'>Register</Link>
            </p>
            <div className="group-2">
              <h1 className="sign-in-to-WYXZ">
                Sign in
                <br />
                to WYXZ
              </h1>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <input className="text-wrapper-3"type='text'placeholder='Email Address'/>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap-group">
                  <input className="text-wrapper-33" type='text' placeholder='Select Date Of Birth'/>
                </div>
              </div>
              <div className="text-wrapper-4">Personal Information</div>
            </div>
            <div className="group-wrapper">
              <div className="group-3">
                <div className="text-wrapper-5">Continue</div>
                <img
                  className="vector"
                  alt="Vector"
                  src={Vector}
                />
              </div>
            </div>
          </div>
          <div className="text-wrapper-6">Forgot Password?</div>
        </div>
      </div>
    </div>
  );
}

export default Login