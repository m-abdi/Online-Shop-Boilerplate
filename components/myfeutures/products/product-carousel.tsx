import Flickity from "react-flickity-component";
import ProductCard from "../product-card";
import { PropsType } from "../../../Types/Types";
import React from "react";

const flickityOptions = {
  initialIndex: 2,
  pageDots: false,
};

function ProductCarousel(props: PropsType) {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {props.items.map((product) => (
        <ProductCard
          info={product}
        />
      ))}
    </Flickity>
  );
}

export default ProductCarousel;
