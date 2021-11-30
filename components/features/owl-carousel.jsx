import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselElement,
  MDBCarouselInner,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import React, { memo } from "react";

import ALink from "./alink";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fadeInUpShorter = keyframes`
from {
    opacity: 0;
    transform: translate(0,50px);
    transform-origin: 0 0;
}
to {
    opacity:1;
    transform:none
}`;
function App() {
  return (
    <MDBCarousel showIndicators>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement
            src="/public/images/home/sliders/slide-1.jpg"
            alt="banner"
          />
          <MDBCarouselCaption>
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
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.jpg"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.jpg"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default memo(App);
