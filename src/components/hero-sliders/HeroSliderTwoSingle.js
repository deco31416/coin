import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import ParticleTwo from "../particles/ParticleTwo";

const HeroSliderTwoSingle = ({ data }) => {
  return (
    <div
      className="slide d-flex align__center poss--relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +
          data.backgroundImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-md-12 col-sm-12 col-12 d-flex align-items-center">
            <div className="slide__inner">
              <h1>{data.title}</h1>
              <p>{data.text}</p>
              <Link
                className="slide__btn dg__btn btn--white btn--theme"
                to={process.env.PUBLIC_URL + data.url}
              >
                Go to DApp
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* particle */}
      <ParticleTwo />
    </div>
  );
};

HeroSliderTwoSingle.propTypes = {
  data: PropTypes.object
};

export default HeroSliderTwoSingle;
