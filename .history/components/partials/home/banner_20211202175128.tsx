import Box from "@mui/system/Box";
import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

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
    <BannerBox>
        <Typography sx={{gridArea: "a"}}>a</Typography>
        <Typography sx={{gridArea: "b"}}>b</Typography>
        <Typography sx={{gridArea: "c"}}>c</Typography>
        <Typography sx={{gridArea: "d"}}>d</Typography> 
    </BannerBox>
  );
}
