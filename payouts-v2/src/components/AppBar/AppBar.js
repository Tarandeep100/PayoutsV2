import {
  Icon,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Help, Menu, Message, Search } from "../../assets";
import Row from "../Row/row";
import Column from "../Column/column";

const AppBar = () => {
  return (
    <Toolbar>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          flex: "1 1 auto",
        }}
      >
        <Column>
          <Row>
            Payments
            <IconButton>
              <img src={Help} alt="help" />
            </IconButton>
            How it works
          </Row>
        </Column>
        <Column>
          <Row>
            <TextField
              id="outlined-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <img src={Search} alt="search" />
                    </IconButton>
                    Search features, tutorials, etc.
                  </InputAdornment>
                ),
              }}
            />
          </Row>
        </Column>
        <Column>
          <Row>
            <IconButton>
              <img src={Message} alt="Message" />
            </IconButton>
            <IconButton>
              <img src={Menu} alt="Menu" />
            </IconButton>
          </Row>
        </Column>
      </Row>
    </Toolbar>
  );
};

export default AppBar;
