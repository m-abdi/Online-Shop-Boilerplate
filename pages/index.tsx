import {
  fadeIn,
  fadeInLeftShorter,
  fadeInRightShorter,
  fadeInUpShorter,
  introSlider,
} from "../utils/data";

import ALink from "../components/features/alink";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Copyright from "../src/Copyright";
import Flickity from "react-flickity-component";
import Footer from "../components/partials/footer/footer"
import { GET_HOME_DATA } from "../server/queries";
import Image from "next/image";
import Link from "../src/Link";
import MostWantedCollection from "../components/partials/home/new-collection";
import NewCollection from "../components/partials/home/new-collection";
import OwlCarousel from "../components/features/owl-carousel";
import ProTip from "../src/ProTip";
import ProductCard from "../components/myfeutures/product-card";
import ProductCarousel from "../components/myfeutures/products/product-carousel";
import React from "react";
import Reveal from "react-awesome-reveal";
import TopCollection from '../components/partials/home/top-collection'
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";

export default function Index() {
  return (
    <>
      <TopCollection />
      <MostWantedCollection/>
      <Footer/>
    </>
  );
}
