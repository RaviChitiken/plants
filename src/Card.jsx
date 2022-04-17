import React from "react";
import "./styles.css";
import top from "./top.svg";
import bottom from "./bottom.svg";

function Card({ imgSrc, sciName, plantName }) {
  return (
    <>
      <div className="container px-0">
        <div className="row mx-0 my-5 some_border card_bg">
          <div className="col-12 px-0">
            <img className="img-fluid w-100" src={imgSrc} alt="myPic" />
          </div>
          <div className="row mx-0 px-0 my-4">
            <div className="col-12 px-0">
              <span className="card_category">{sciName}</span>
            </div>
            <div className="col-12 px-0">
              <h3 className="card_title mb-0">{plantName}</h3>
            </div>
            <div className="col-12 px-0">
              <span>
                <div className="my-3">
                  <a href="#top">
                    <img
                      className="img-fluid top_icon mx-2"
                      src={top}
                      alt="top icon"
                    />
                  </a>
                  <a href="#bottom">
                    <img
                      className="img-fluid bottom_icon mx-2"
                      src={bottom}
                      alt="bottom icon"
                    />
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
