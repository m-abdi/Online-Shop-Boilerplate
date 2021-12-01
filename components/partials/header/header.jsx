import {
  AppBar,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/system";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled } from "@mui/material/styles";

export default function Header() {
  return (
    <nav>
      <AppBar position="fixed" color="transparent">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton>
              <MenuIcon sx={{fontSize: 40}} />
            </IconButton>
            <Box margin="auto 25px">
              <Image src="/images/home/logo.svg" width={100} height={30} />
            </Box>
            <TextField
              variant="standard"
              size="small"
              id="search-product"
              variant="filled"
              placeholder="کالای مورد نظر را اینجا جستجو کنید"
              sx={{ backgroundColor: "white", borderRadius: "10px", mx: 5 }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            margin="auto end"
            display="flex"
            sx={{
              flexFlow: "row nowrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
