import Box from "@mui/system/Box";
import React from "react";
import { styled } from "@mui/system";
import Image from "next/image"
import { Container } from "@mui/material";
const BannerBox = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "1fr 1fr",
  gridTemplateAreas: `
  "c c b a a"
  "d d b a a"
  `
});

export default function Banner() {
  return (
    <Container>
      <BannerBox>
        <Box sx={{ gridArea: "a" }}><Image src="/images/home/banners/banner-1.jpg" width="100%" height="100%" /></Box>
        <Box sx={{ gridArea: "b" }}><Image src="/images/home/banners/banner-2.jpg" width="100%" height="100%" /></Box>
        <Box sx={{ gridArea: "c" }}><Image src="/images/home/banners/banner-3.jpg" width="100%" height="100%" /></Box>
        <Box sx={{ gridArea: "d" }}><Image src="/images/home/banners/banner-4.jpg" width="100%" height="100%" /></Box>
      </BannerBox>
    </Container>
  );
}
