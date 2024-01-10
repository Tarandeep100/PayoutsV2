import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Button,
  Icon,
  IconButton,
  MenuItem,
  MenuList,
  SvgIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Row from "../Row/row";
import Column from "../Column/column";
import {
  Home,
  Orders,
  Products,
  Delivery,
  Marketing,
  Analytics,
  Payments,
  Tools,
  Discounts,
  Audience,
  Appearance,
  Plugins,
  Account,
  Wallet,
  Help,
  Menu,
  Message,
} from "../../assets/index.js";
import ChevronDown from "../../assets/Chevron Down.svg";
import AppBar from "../AppBar/AppBar";
import Payment from "../Pages/Payments/payments";

const drawerWidth = 240;

const NavBar = () => {
  const menuItems = [
    { name: "Home", icon: Home, link: "/home" },
    { name: "Orders", icon: Orders, link: "/orders" },
    { name: "Products", icon: Products, link: "/products" },
    { name: "Delivery", icon: Delivery, link: "/delivery" },
    { name: "Marketing", icon: Marketing, link: "/marketing" },
    { name: "Analytics", icon: Analytics, link: "/analytics" },
    { name: "Payments", icon: Payments, link: "/payments", active: true },
    { name: "Tools", icon: Tools, link: "/tools" },
    { name: "Discounts", icon: Discounts, link: "/discounts" },
    { name: "Audience", icon: Audience, link: "/audience" },
    { name: "Appearance", icon: Appearance, link: "/appearance" },
    { name: "Plugins", icon: Plugins, link: "/plugins" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Row style={{ justifyContent: "center" }}>
            <Column style={{ justifyContent: "center" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
              >
                <img src={Account} alt="Account" />
              </IconButton>
            </Column>
            <Column style={{ justifyContent: "center" }}>
              <Row>
                <Typography variant="h6">Tarandeep</Typography>
              </Row>
              <Row>
                <Typography variant="h6">Visit Store</Typography>
              </Row>
            </Column>

            <Column style={{ justifyContent: "center" }}>
              <IconButton
                size="small"
                edge="end"
                color="inherit"
                aria-label="menu"
              >
                <img src={ChevronDown} alt="chevron down" />
              </IconButton>
            </Column>
          </Row>
        </Toolbar>
        <Divider />
        <MenuList>
          {menuItems.map((item, index) => (
            // TODO: onclick should be added
            <MenuItem key={`${index}_${item.name}`}>
              <ListItemIcon>
                <img src={item.icon} alt={item.name} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </MenuList>
        <Row
          style={{
            position: "fixed",
            bottom: "2rem",
            justifyContent: "center",
            padding: "1 1rem",
          }}
        >
          <Column style={{ justifyContent: "center" }}>
            <IconButton>
              <img src={Wallet} alt="Wallet" />
            </IconButton>
          </Column>
          <Column style={{ justifyContent: "center" }}>
            <Row>
              <Typography variant="h6">Available credits</Typography>
            </Row>
            <Row>
              <Typography variant="h6">222.10</Typography>
            </Row>
          </Column>
        </Row>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", pl: 3, pr: 3 }}
      >
        <AppBar/>
        {/* TODO: add route to payments */}
        <Payment/>
      </Box>
    </Box>
  );
};
export default NavBar;
