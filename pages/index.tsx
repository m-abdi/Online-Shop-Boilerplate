import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Copyright from "../src/Copyright";
import Link from "../src/Link";
import OwlCarousel from "../components/features/owl-carousel"
import ProTip from "../src/ProTip";
import Typography from "@mui/material/Typography";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <OwlCarousel
        adClass="intro-slider owl-simple owl-light owl-nav-inside"
        options={introSlider}
      >
        <div className="intro-slide">
          <figure className="slide-image">
            <picture>
              <img src="images/home/sliders/slide-1.jpg" alt="banner" />
            </picture>
          </figure>

          <div className="intro-content">
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
              <>
                <h3 className="intro-subtitle">Deals and Promotions</h3>
                <h1 className="intro-title text-white">
                  Sneakers & Athletic Shoes
                </h1>

                <div className="intro-price text-white">from $9.99</div>

                <ALink
                  href="/shop/sidebar/list"
                  className="btn btn-white-primary btn-round"
                >
                  <span>SHOP NOW</span>
                  <i className="icon-long-arrow-right"></i>
                </ALink>
              </>
            </Reveal>
          </div>
        </div>

        <div className="intro-slide">
          <figure className="slide-image">
            <picture>
              <img src="images/home/sliders/slide-2.jpg" alt="banner" />
            </picture>
          </figure>

          <div className="intro-content">
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
              <>
                <h3 className="intro-subtitle">Trending Now</h3>
                <h1 className="intro-title text-white">
                  This Week's Most Wanted
                </h1>

                <div className="intro-price text-white">from $49.99</div>

                <ALink
                  href="/shop/sidebar/list"
                  className="btn btn-white-primary btn-round"
                >
                  <span>SHOP NOW</span>
                  <i className="icon-long-arrow-right"></i>
                </ALink>
              </>
            </Reveal>
          </div>
        </div>

        <div className="intro-slide">
          <figure className="slide-image">
            <picture>
              <img src="images/home/sliders/slide-3.jpg" alt="banner" />
            </picture>
          </figure>

          <div className="intro-content">
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
              <>
                <h3 className="intro-subtitle text-white">
                  Deals and Promotions
                </h3>
                <h1 className="intro-title text-white">
                  Can’t-miss Clearance:
                </h1>

                <div className="intro-price text-white">
                  starting at 60% off
                </div>

                <ALink
                  href="/shop/sidebar/list"
                  className="btn btn-white-primary btn-round"
                >
                  <span>SHOP NOW</span>
                  <i className="icon-long-arrow-right"></i>
                </ALink>
              </>
            </Reveal>
          </div>
        </div>
      </OwlCarousel>
    </Container>
  );
}
