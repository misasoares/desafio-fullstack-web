import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useValidateLogin } from "../../shared/services/validate-login/validate-login";
import CustomTabPanel, { a11yProps } from "./components/CustomTabPanels";
import { Avatar } from "@mui/material";

export default function Home() {
  const [value, setValue] = React.useState(0);

  const { isTokenValid } = useValidateLogin();

  React.useEffect(() => {
    isTokenValid();
  }, []);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={(_, value) => handleChange(value)}
          aria-label="basic tabs example"
          className="p-4"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <div className="flex w-full justify-end items-center ">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
