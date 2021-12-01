import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <Image src="/images/logo.png" width={200} height={60} />
        Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu
        vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
        tincidunt quis, accumsan porttitor, facilisis luctus, metus.
      </Box>
      <Box>
        <Typography>Information</Typography> <Typography>About Molla</Typography> <Typography>How to shop on Molla</Typography> <Typography>FAQ</Typography> <Typography>Contact us </Typography><Typography>   Log in</Typography>
      </Box>
      <Box>
      Customer Service

Payment Methods
Money-back guarantee!
Returns
Shipping
Terms and conditions
Privacy Policy
      </Box>
      <Box>
      My Account

Sign In
View Cart
My Wishlist
Track My Order
Help
      </Box>
    </Box>
  );
}
