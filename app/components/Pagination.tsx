import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';

interface PaginationProps  {
    justifyContent?: string;
  }
  
  export default function Pagination({ justifyContent, ...props }: PaginationProps & { [key: string]: any }) {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    // Personalized pagination position : flex-start - center - flelx-end <Pagination sx={{justifyContent:'flex-end'}}></Pagination>
    <Box  mt={2} sx={{ width: '100%', display: 'flex', justifyContent: justifyContent ?? 'center'}}>
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      {...props}
    />
  </Box>
  );
}
