import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom';
const Registration = () => {
  return (
    <div className="home2">
      <div className="group-wrapper">
        <div className="group">
          <div className="div">
            <div className="text-wrapper">BACK</div>
            <img 
              className="img"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/7796e19a1ef16fa8448b7257f5de3694/img/group-1410104562@2x.png"
            />
          </div>
          <div className="already-registered">
            <span className="span">Already Registered? </span>
            <Link to="/login" className="text-wrapper-2" role="button">Sign in</Link>
          </div>
          <img
            className="line"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/7796e19a1ef16fa8448b7257f5de3694/img/line-2.svg"
          />
          <div className="group-2">
            <h1 className="complete">
              Complete
              <br />
              Registration
            </h1>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-3">Type name...</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-3">Email Address</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-3">Select Date Of Birth</div>
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-group">
                <div className="text-wrapper-3">Set Password</div>
              </div>
            </div>
            <div className="text-wrapper-4">Personal Information</div>
          </div>
          <div className="group-4">
            <div className="group-5">
              <div className="group-6">
                <div className="group-7">
                  <div className="overlap-group-2">
                    <p className="by-continuing-you">
                      <span className="text-wrapper-5">By continuing, you accept to our </span>
                      <span className="text-wrapper-6">Terms and Conditions</span>
                      <span className="text-wrapper-5"> and </span>
                      <span className="text-wrapper-6">Privacy Policy</span>
                    </p>
                    <img
                      className="vector"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/7796e19a1ef16fa8448b7257f5de3694/img/vector-4884.svg"
                    />
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/7796e19a1ef16fa8448b7257f5de3694/img/vector-4885.svg"
                    />
                    <img
                      className="vector-3"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/7796e19a1ef16fa8448b7257f5de3694/img/vector-4886.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="vector-wrapper">
                <img
                  className="vector-4"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/7796e19a1ef16fa8448b7257f5de3694/img/vector-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="group-8">
            <div className="group-9">
              <div className="text-wrapper-7">Continue</div>
              <img
                className="vector-5"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/7796e19a1ef16fa8448b7257f5de3694/img/vector.svg"
              />
            </div>
          </div>
          <div className="overlap">
            <div className="group-10">
              <div className="group-11">
                <div className="text-wrapper-8">Sign in with google</div>
                <img
                  className="group-12"
                  alt="Group"
                  src="https://generation-sessions.s3.amazonaws.com/7796e19a1ef16fa8448b7257f5de3694/img/group-1410105301@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration