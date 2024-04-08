import React, { ReactNode} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar({}) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="searchBar" />
    </Box>
  );
}