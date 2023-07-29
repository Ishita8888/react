import React from "react";
import "./Mainpage.css";
import { Link } from 'react-router-dom';

 const Mainpage = () => {
  return (
    <div className="mainpage">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="group">
            <div className="div">
              <div className="group-2">
                <h1 className="extremely-easy-to">
                  <span className="text-wrapper">Extremely </span>
                  <span className="span">
                    easy
                    <br />
                  </span>
                  <span className="text-wrapper-2">to use interface</span>
                </h1>
                <p className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet ullamcorper sed&nbsp;&nbsp;per s<br />
                  adipiscing elit. Diam viverra ullamcorper sed per s
                </p>
              </div>
              <div className="group-3">
                <div className="group-4">
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                  <div className="rectangle-3" />
                </div>
                <Link to="/home2">
                <img
                  className="img"
                  alt="Group"
                  src="https://generation-sessions.s3.amazonaws.com/ddcd5de81a46fbdde769129c62ba275a/img/group-9189.png"
                />
                </Link>
              </div>
            </div>
            <img
              className="group-5"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/ddcd5de81a46fbdde769129c62ba275a/img/group-9191@2x.png"
            />
          </div>
          <img
            className="group-6"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/ddcd5de81a46fbdde769129c62ba275a/img/group-1410104736.svg"
          />
        </div>
      </div>
    </div>
  );
};
export default Mainpage;
