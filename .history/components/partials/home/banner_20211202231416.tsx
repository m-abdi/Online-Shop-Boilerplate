import Box from "@mui/system/Box";
import React from "react";
import { styled } from "@mui/system";
import Image from "next/image"
import { Container } from "@mui/material";
const BannerBox = styled("div")({
  "@media(min-width: 900px)" : {
    display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "1fr 1fr",
  gridTemplateAreas: `
  "c c b a a"
  "d d b a a"
  `
  },
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  justifyContent:'center'
});

export default function Banner() {
  return (
    <Container sx={{p: 5}}>
      <BannerBox>
        <Box sx={{ gridArea: "c", width: 450, height: 240, position:"relative" }}><Image src="/images/home/banners/banner-3.jpg" layout="fill" /></Box>
        <Box sx={{ gridArea: "d", width: 450, height: 240, position:"relative" }}><Image src="/images/home/banners/banner-4.jpg" layout="fill" /></Box>
        <Box sx={{ gridArea: "a", width: 550, height: 500, position:"relative" }}><Image src="/images/home/banners/banner-1.jpg" layout="fill" /></Box>
        <Box sx={{ gridArea: "b", width: 240, height: 500, position:"relative" }}><Image src="/images/home/banners/banner-2.jpg" layout="fill" /></Box>
      </BannerBox>
    </Container>
  );
}
