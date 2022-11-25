import React, { useContext } from "react";
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
import Checkbox from "../components/Checkbox/Checkbox";
import { UserContext } from "../contexts/UserContext";
import TableStar from "../components/TableStar/TableStar";
import moment from "moment";

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

export default function TableView({ gists, onRowClick }) {
  const { user } = useContext(UserContext);

  return (
    <>
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
            {React.Children.toArray(
              gists &&
                gists.length > 0 &&
                gists.map((row) => {
                  const date = moment(row.created_at).format("D MMM YYYY");
                  const time = moment(row.created_at).format("h:mm A");
                  return (
                    <TableRow
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
                        <Avatar src={row.owner.avatar_url} />
                      </TableCell>

                      <StyledTableCell
                        onClick={() => onRowClick(row)}
                        sx={{ cursor: "pointer" }}
                      >
                        <FlexDiv>{row.owner.login}</FlexDiv>
                      </StyledTableCell>
                      <StyledTableCell>{date}</StyledTableCell>
                      <StyledTableCell>{time}</StyledTableCell>
                      <StyledTableCell>{"WebServer"}</StyledTableCell>
                      <StyledTableCell>{row.notebook}</StyledTableCell>
                      <StyledTableCell>
                        {user && <TableStar id={row.id} />}
                      </StyledTableCell>
                    </TableRow>
                  );
                })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
