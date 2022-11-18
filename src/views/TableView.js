import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Avatar,
} from "@mui/material";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Checkbox from "../components/Checkbox/Checkbox";
import { padding } from "@mui/system";

const StyledHeaderRow = styled(TableRow)`
  &&& {
    background-color: #def5ec;
  }
`;

const StyledHeaderCell = styled(TableCell)`
  && {
    color: #787a79;
    font-weight: 700;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    color: #a7a7a7;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
`;

function createData(name, date, time, keyword, notebook) {
  return { name, date, time, keyword, notebook };
}

const rows = [
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
  createData(
    "William John",
    "25 Jan 2017",
    "12:25 PM",
    "WebServer",
    "server.xml"
  ),
];

export default function TableView() {
  return (
    <TableContainer sx={{ marginTop: "2em" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledHeaderRow>
            <TableCell sx={{ width: "2em" }}>
              {" "}
              <Checkbox />
            </TableCell>
            <TableCell></TableCell>
            <StyledHeaderCell>Name</StyledHeaderCell>
            <StyledHeaderCell>Date</StyledHeaderCell>
            <StyledHeaderCell>Time</StyledHeaderCell>
            <StyledHeaderCell>Keyword</StyledHeaderCell>
            <StyledHeaderCell>Notebook Name</StyledHeaderCell>
            <TableCell></TableCell>
          </StyledHeaderRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ width: ".1em", paddingRight: ".2em" }}>
                <Checkbox />
              </TableCell>
              <TableCell
                sx={{
                  width: ".1em",
                  paddingRight: ".2em",
                  paddingLeft: ".2em",
                }}
              >
                <Avatar />
              </TableCell>

              <StyledTableCell>
                <FlexDiv>{row.name}</FlexDiv>
              </StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
              <StyledTableCell>{row.time}</StyledTableCell>
              <StyledTableCell>{row.keyword}</StyledTableCell>
              <StyledTableCell>{row.notebook}</StyledTableCell>
              <StyledTableCell>
                <StarBorderIcon sx={{ color: "#5acba1" }} />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
