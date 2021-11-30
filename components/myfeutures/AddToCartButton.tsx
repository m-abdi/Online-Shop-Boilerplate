import React, { useState } from "react";

import { Button } from "@mui/material";
import { ProductInfo } from "../../Types/Types";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { addToCart } from "../../store/shopingCartSlice";
import { removeFromCard } from "../../store/shopingCartSlice";
import { selectProductById } from "../../store/shopingCartSlice";
import { styled } from "@mui/system";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";

function AddToCart({ info }) {
  const [inCard, setInCard] = useState(
    useAppSelector((state) => selectProductById(state, info.id)),
  );
  const [hover, setHover] = useState(false);
  const [icon, setIcon] = useState(
    inCard ? <RemoveCircleOutlineOutlinedIcon /> : <ShoppingCartOutlinedIcon />,
  );

  const dispatch = useAppDispatch();
  function handleClick(info: ProductInfo) {
    if (!inCard) {
      dispatch(addToCart(info));
      setInCard(true);
      setIcon(<RemoveCircleOutlineOutlinedIcon />);
    } else if (inCard) {
      dispatch(removeFromCard(info));
      setInCard(false);
      setIcon(<ShoppingCartOutlinedIcon />);
    }
  }

  return (
    <Button
      variant={hover ? !inCard ? "contained" : "contained" : !inCard
        ? "outlined"
        : "contained"}
      color={inCard ? "error" : "primary"}
      endIcon={icon}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick(info)}
    >
      {inCard ? "حذف از سبد خرید" : "افزودن به سبد خرید"}
    </Button>
  );
}

export default AddToCart;
