import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { Stack } from "@mui/material";
import colors from "../../utils/styles/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import VerticalAlignBottomSharpIcon from '@mui/icons-material/VerticalAlignBottomSharp';
import { ArrowUpward, ArrowUpwardSharp, GetApp } from "@mui/icons-material";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const rows = [
  {
    Matricule: "22654",
    Nom: "elhidaoui ",
    Prénom: "chaimae",
    Email: "chaimae.elhidaoui@gmail.com",
    Téléphone: "020256455",
  },
  {
    Matricule: "22654",
    Nom: "elhidaoui ",
    Prénom: "chaimae",
    Email: "chaimae.elhidaoui@gmail.com",
    Téléphone: "020256455",
  },
  {
    Matricule: "22654",
    Nom: "elhidaoui ",
    Prénom: "chaimae",
    Email: "chaimae.elhidaoui@gmail.com",
    Téléphone: "020256455",
  },
];

export default function Collaborators() {
  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };
  const [sortDirection, setSortDirection] = React.useState("asc");

  const handleSortDirectionChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <Typography
        mt={2}
        variant="h4"
        fontWeight={"bold"}
        color={colors.primary}
        mb={7}
      >
        Liste Des Collaborateurs
      </Typography>
      <Stack
        flexDirection={"row"}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        {/* Sort & export buttons */}
        <Stack
          direction="row"
          gap={1}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <FormControl sx={{ minWidth: 200}}>
            <InputLabel id="sort-select-label" sx={{ whiteSpace: "nowrap" }}>
              Sort by
            </InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={status}
              label="Sort by"
              onChange={handleChange}
            >
              <MenuItem value={"item01"}>Item 01</MenuItem>
              <MenuItem value={"item02"}>Item 02</MenuItem>
            </Select>
          </FormControl>
          <IconButton aria-label="sort" sx={{color:colors.secondary}}>
            {sortDirection === "asc" ? <ArrowUpwardSharp/> : <SouthIcon />}
          </IconButton>
          <IconButton aria-label="export" sx={{color:colors.secondary}}>
            <VerticalAlignBottomSharpIcon />
          </IconButton>
        </Stack>
        <SearchBar label="Search" sx={{ width: "40%", marginRight: "6px" }} />
      </Stack>
      {/* Table */}
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Matricule</TableCell>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">Prénom</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Téléphone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Matricule}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Matricule}
                </TableCell>
                <TableCell align="left">{row.Nom}</TableCell>
                <TableCell align="left">{row.Prénom}</TableCell>
                <TableCell align="left">{row.Email}</TableCell>
                <TableCell align="left">{row.Téléphone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination */}
      <Pagination />
    </>
  );
}
