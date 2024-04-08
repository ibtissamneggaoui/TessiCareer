import * as React from "react";
import { Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import colors from "@/utils/styles/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Box }from "@mui/material";
import BasicButton from "../components/BasicButton";
import { GetApp } from "@mui/icons-material";

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

export default function Training() {
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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SearchBar label="Search" sx={{ width: '60%', marginRight: '6px' }} />
        <BasicButton bgcolor={colors.secondary}  startIcon={<GetApp/>}>
           Exporter
        </BasicButton>
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: "60px" }}>
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
    </>
  );
}
