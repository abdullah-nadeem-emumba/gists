import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  TableFooter,
  TablePagination,
  Paper,
  Avatar,
} from "@mui/material";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Checkbox from "../components/Checkbox/Checkbox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "../components/Button/Button";

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

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

const PaginationDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;

  & .MuiButtonBase-root {
    padding: 0;
    background-color: #5acba1;
    border-radius: 15%;
    margin-left: 0.05em;
  }

  & .MuiButtonBase-root:hover {
    background-color: #5acba1;
  }

  & .MuiButtonBase-root svg {
    color: #fff;
  }

  &
    .MuiButtonBase-root.Mui-disabled.MuiIconButton-root.Mui-disabled.MuiIconButton-colorInherit.MuiIconButton-sizeMedium.css-zylse7-MuiButtonBase-root-MuiIconButton-root {
    padding: 0;
    background-color: #5acba1;
    color: "#FFF";
  }
`;

const StyledTableFooter = styled(TableFooter)`
  &&& {
    display: flex;
    width: 100%;
    margin-top: 2em;
  }
  & .MuiInputBase-root {
    display: none;
  }
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

export default function TableView({ gists, onRowClick }) {
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
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
              gists.length > 0 &&
                gists.map((row) => (
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
                      onClick={onRowClick}
                      sx={{ cursor: "pointer" }}
                    >
                      <FlexDiv>{row.owner.login}</FlexDiv>
                    </StyledTableCell>
                    <StyledTableCell>{row.created_at}</StyledTableCell>
                    <StyledTableCell>{row.updated_at}</StyledTableCell>
                    <StyledTableCell>{row.keyword}</StyledTableCell>
                    <StyledTableCell>{row.notebook}</StyledTableCell>
                    <StyledTableCell>
                      <StarBorderIcon
                        sx={{ color: "#5acba1", cursor: "pointer" }}
                      />
                    </StyledTableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <StyledTableFooter>
        <StyledDiv>
          <Button type="dark">
            Next Page <ArrowForwardIcon sx={{ marginLeft: ".2em" }} />
          </Button>
        </StyledDiv>
        <PaginationDiv>
          <TablePagination
            rowsPerPage={8}
            component="div"
            page={page}
            count={rows.length}
            labelRowsPerPage={null}
            onPageChange={handleChangePage}
          />
        </PaginationDiv>
      </StyledTableFooter> */}
    </>
  );
}
