import React from "react";
import "./Home2.css";

import Ellipse from '../assets/Group 9189.svg'
import { Link } from 'react-router-dom';
 const Home2 = () => {
  return (
    <div className="home22">
      <div className="div">
        <div className="group">
          <div className="group-2">
            <div className="group-3">
              <h1 className="get-exciting-courses">
                <span className="text-wrapper">
                  Get Exciting Courses
                  <br />
                </span>
                <span className="span">In </span>
                <span className="text-wrapper-2">Your Budget</span>
              </h1>
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet ullamcorper sed&nbsp;&nbsp;per s<br />
                adipiscing elit. Diam viverra ullamcorper sed per s
              </p>
            </div>
            <div className="group-4">
              <div className="group-5">
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="rectangle-3" />
              </div>
              <Link to="/home3">
        <img
          className="img"
          alt="Group"
          src={Ellipse}
        />
      </Link>
            </div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="group-6" />
                <div className="text-wrapper-3">Course 1</div>
                <div className="text-wrapper-4">$1,400.5</div>
              </div>
            </div>
            <div className="group-7">
              <div className="group-8">
                <div className="ellipse" />
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="polygon-wrapper">
                  <img
                    className="polygon"
                    alt="Polygon"
                    src="https://generation-sessions.s3.amazonaws.com/59001cb736b7b05a9d5747db9733886d/img/polygon-1-2.svg"
                  />
                </div>
              </div>
              <div className="group-9">
                <div className="ellipse" />
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="polygon-wrapper">
                  <img
                    className="polygon"
                    alt="Polygon"
                    src="https://generation-sessions.s3.amazonaws.com/59001cb736b7b05a9d5747db9733886d/img/polygon-1-1.svg"
                  />
                </div>
              </div>
              <div className="group-10">
                <div className="ellipse" />
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="polygon-wrapper">
                  <img
                    className="polygon-2"
                    alt="Polygon"
                    src="https://generation-sessions.s3.amazonaws.com/59001cb736b7b05a9d5747db9733886d/img/polygon-1-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="group-wrapper">
              <div className="group-11">
                <div className="div-wrapper">
                  <div className="text-wrapper-5">Topic 01</div>
                </div>
                <div className="text-wrapper-6">Topic 02</div>
                <div className="text-wrapper-7">Topic 03</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home2;