import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import IconButton from '@mui/material/IconButton'
import NorthIcon from '@mui/icons-material/North'
import SouthIcon from '@mui/icons-material/South'
import { Stack } from '@mui/material'


export default function Collaborators() {
  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };
  const [sortDirection, setSortDirection] = React.useState("asc");

  const handleSortDirectionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
  }

  return (
    <Stack flexDirection={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between'}}>
      <Stack
        direction="row"
        gap={1}
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="sort-select-label" sx={{ whiteSpace: 'nowrap' }}>
            Sort with
          </InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={status}
            label="Trier par"
            onChange={handleChange}
          >
            <MenuItem value={'item01'}>Item 01</MenuItem>
            <MenuItem value={'item02'}>Item 02</MenuItem>
          </Select>
        </FormControl>
        <IconButton aria-label="sort" >
          {sortDirection === 'asc' ? <NorthIcon /> : <SouthIcon />}
        </IconButton>
        </Stack>
    </Stack>
  );
}
