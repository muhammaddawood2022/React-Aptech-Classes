import React from "react";
import { Link } from "react-router-dom";

function Banner({ title, description, image, imageAlt }) {
  return (
    <section className="hero">
      <div className="container container--wide">
        <div className="hero-grid">

          <div className="hero-text">

            <span className="eyebrow">
              <span className="dot" aria-hidden="true"></span>
              Brooklyn · Berlin · est. 2014
            </span>

            <h1 className="hero-headline">
              {title}
            </h1>

            <p className="hero-sub">
              {description}
            </p>

            <div className="hero-cta-row">
              <Link
                className="btn btn--primary btn--lg"
                to="/contact"
              >
                Start a project

                <svg
                  className="arrow"
                  width="16"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                className="btn btn--ghost btn--lg"
                to="/services"
              >
                Services & rates
              </Link>
            </div>

          </div>

          <div className="hero-media reveal">
            <img
              src={image}
              alt={imageAlt}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;
