import * as React from "react";

import Box from "@mui/material/Box";
import ProductCarousel from "../../myfeutures/products/product-carousel";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import TabPanel from '@mui/lab/TabPanel';
import Tabs from "@mui/material/Tabs";

export default function CenteredTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ width: "100%", bgcolor: "background.paper", borderBottom: 2, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="حراج" value="1" sx={{fontSize: 19}} />
          <Tab label="پرفروش ها"value="2" sx={{fontSize: 19}}/>/
          <Tab label="پیشنهاد ویژه"value="3" sx={{fontSize: 19}}/>
        </Tabs>
      </Box>
      <TabPanel value={"1"}>
        <ProductCarousel
          items={[{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          },{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          },{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          },{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          },{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          },{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          },{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          },{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          },{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          },]}
        />
      </TabPanel>
    </TabContext>
  );
}
