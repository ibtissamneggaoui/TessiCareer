import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Search } from "@mui/icons-material";

interface SearchProps{
  label:string,
}
export default function SearchBar({label,...props } : SearchProps & { [key: string]: any }) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      {...props}
    >
      
      <TextField 
      fullWidth
      label={label}
      InputProps={{
        endAdornment: (
          <>
          
            <Search  />
          </>
        ),
      }}
      
      />
    
      
    </Box>
  );
}