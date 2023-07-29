import React from "react";
import "./IphoneProMax.css";
import { Link } from 'react-router-dom';
const IphoneProMax = () => {
  return (
    <div className="iphone-pro-max">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="group-wrapper">
              <div className="group-2">
                <h1 className="best-rated-courses">
                  <span className="text-wrapper">Best Rated</span>
                  <span className="span">{"  "}Courses for You</span>
                </h1>
                <p className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet ullamcorper sed&nbsp;&nbsp;per s<br />
                  adipiscing elit. Diam viverra ullamcorper sed per s
                </p>
              </div>
            </div>
            <img
              className="img"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/238182b9b276814e744dcd0e3ebd12b2/img/group-9191@2x.png"
            />
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <div className="rectangle" />
                  <div className="group-3">
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                    <div className="group-4">
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                      <div className="img-wrapper">
                        <img
                          className="group-5"
                          alt="Group"
                          src="https://generation-sessions.s3.amazonaws.com/238182b9b276814e744dcd0e3ebd12b2/img/group-8996@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-2">Best Prices</div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <Link to="/Registration" className="text-wrapper-3" role="button">REGISTER</Link>
          <Link to="/login" className="text-wrapper-4" role="button">SIGN IN</Link>
        </div>
      </div>
    </div>
  );
};
export default IphoneProMax;
