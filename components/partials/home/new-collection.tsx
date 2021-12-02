import * as React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import TabPanel from '@mui/lab/TabPanel';
import Tabs from "@mui/material/Tabs";
import TwelveProducts from "../../features/products/product-twelve";

export default function MostWantedCollection() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ width: "100%", bgcolor: "background.paper", borderBottom: 2, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="پر فروش ترین ها" value="1" sx={{fontSize: 19}} />
          <Tab label="کفش"value="2" sx={{fontSize: 19}}/>/
          <Tab label="شلوار"value="3" sx={{fontSize: 19}}/>
          <Tab label="پیراهن"value="4" sx={{fontSize: 19}}/>
        </Tabs>
      </Box>
      <TabPanel value={"1"}>
            <TwelveProducts/>
      </TabPanel>
    </TabContext>
  );
}
