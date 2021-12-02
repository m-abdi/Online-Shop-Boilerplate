import React, { memo } from "react";

import IIC from "public/images/quick-view.svg";
import { SvgIcon } from "@mui/material";

function QuickView() {
  return <SvgIcon component={IIC} viewBox="0, 0, 360,360" />;
}

export default memo(QuickView);
