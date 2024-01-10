import React from "react";
import Row from "../../Row/row";
import Column from "../../Column/column";
import { InputLabel, MenuItem, Paper, Select, Stack } from "@mui/material";
import PaymentsTable from "./paymentsTable";

const Payment = () => {
  const [age, setAge] = React.useState("Last Month");

  return (
    <>
      <Row style={{ justifyContent: "space-between" }}>
        <Column>
          <h4>Overview</h4>
        </Column>
        <Column>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          >
            <MenuItem value={"Last Week"}>Last Week</MenuItem>
            <MenuItem value={"Last Month"}>Last Month</MenuItem>
          </Select>
        </Column>
      </Row>
      <Stack flexDirection="row" justifyContent="space-evenly">
        <Paper sx={{ marginRight: "1rem", flexGrow: "1" }}>
          <Column style={{ marginLeft: "1rem" }}>
            <Row>
              <h6>Online Orders</h6>
            </Row>
            <Row>
              <h3>231</h3>
            </Row>
          </Column>
        </Paper>
        <Paper sx={{ marginRight: "1rem", flexGrow: "1" }}>
          <Column style={{ marginLeft: "1rem" }}>
            <Row>
              <h6>Amount received</h6>
            </Row>
            <Row>
              <h3>$23,92,312.19</h3>
            </Row>
          </Column>
        </Paper>
      </Stack>
      <Row>
        <h3>Transactions | {age}</h3>
      </Row>
      <PaymentsTable/>
    </>
  );
};

export default Payment;
