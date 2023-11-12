import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ pageCount, currentPage, onChange }) => {
  return (
    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(event, page) => onChange(page)}
      />
    </Stack>
  );
};

export default CustomPagination;