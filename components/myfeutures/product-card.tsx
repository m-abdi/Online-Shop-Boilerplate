import { Box, typography } from "@mui/system";
import { Button, Fade, Modal, SvgIcon, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  itemAdded,
  itemRemoved,
  selectProductById,
} from "../../store/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import AddToCart from "./AddToCartButton";
import Backdrop from "@mui/material/Backdrop";
import Bounce from "react-reveal/Bounce";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { ProductInfo } from "../../Types/Types";
import QuickViewIcon from "./QuickViewIcon";
import styles from "../../public/css/flex-utilities.module.css";
import zIndex from "@mui/material/styles/zIndex";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function ProductCard({ info }) {
  const [inWishList, setInWishList] = useState(
    useAppSelector((state) => selectProductById(state, info.id)),
  );
  const [quickViewStatus, setQuickViewStatus] = useState(false);
  const handleQuickViewOpen = () => setQuickViewStatus(true);
  const handleQuickViewClose = () => setQuickViewStatus(false);
  const [pic, setPic] = useState(info.picture);
  const [hover, setHover] = useState(false)
  const handleImageHoverIn = () => {
    if (info.picture_2) setPic(info.picture_2);
  };
  const handleImageHoverOut = ()=> setPic(info.picture)
  const [favoriteIcon, setFavoriteIcon] = useState(
    inWishList
      ? <FavoriteIcon color="error" />
      : <FavoriteBorderOutlinedIcon />,
  );
  const dispatch = useAppDispatch();
  function handleFavoriteIconClick() {
    if (inWishList) {
      dispatch(itemRemoved(info));
      setInWishList(false);
      setFavoriteIcon(<FavoriteBorderOutlinedIcon />);
    } else {
      dispatch(itemAdded(info));
      setInWishList(true);
      setFavoriteIcon(<FavoriteIcon color="error" />);
    }
  }
  return (
    <Card
      sx={{ width: "300px", height: "450px", my: 3, mx: 2 }}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
    >
      <CardContent className={styles.centerColumn} sx={{ p: 0 }}>
        <Box sx={{ position: "relative" }}>
          <Image
            src={pic}
            width="300"
            height="300"
            onMouseEnter={() => handleImageHoverIn()}
            onMouseLeave={()=>handleImageHoverOut()}
          />
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0, zIndex: "1000" }}
            onClick={() => handleFavoriteIconClick()}
            title={inWishList? "حذف از علاقه مندی ها": "اضافه کردن به علاقه مندی ها"}
          >
            {favoriteIcon}
          </IconButton>
          <IconButton
            sx={{ position: "absolute", top: 0, left: 0, zIndex: "1000" }}
            onClick={() => setQuickViewStatus(true)}
            title="بازدید سریع"
          >
            <QuickViewIcon />
            <Modal
              open={quickViewStatus}
              onClose={handleQuickViewClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade>
                <Box sx={style}>
                  <Typography>sidjfosidjfosi</Typography>
                </Box>
              </Fade>
            </Modal>
          </IconButton>
        </Box>

        <Typography variant="h5">
          {info.title}
        </Typography>
        <Typography variant="h6">
          {info.price}
        </Typography>
      </CardContent>
      <Bounce>
        <CardActions className={styles.centerColumn}>
          <AddToCart info={info} />
        </CardActions>
      </Bounce>
    </Card>
  );
}

export default ProductCard;
