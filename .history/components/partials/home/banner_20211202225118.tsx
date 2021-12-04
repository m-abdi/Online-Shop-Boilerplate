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
    <Container sx={{p: 5}}>
      <BannerBox>
        <Box sx={{ gridArea: "c" }}><Image src="/images/home/banners/banner-3.jpg" width="360" height="220" /></Box>
        <Box sx={{ gridArea: "d" }}><Image src="/images/home/banners/banner-4.jpg" width="360" height="220" /></Box>
        <Box sx={{ gridArea: "a" }}><Image src="/images/home/banners/banner-1.jpg" width="800px" height="460" /></Box>
        <Box sx={{ gridArea: "b" }}><Image src="/images/home/banners/banner-2.jpg" width="180" height="460" /></Box>
      </BannerBox>
    </Container>
  );
}
