import { PaginationProps, Pagination as MUIPagination, PaginationItem } from "@mui/material";
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";

interface IPagination extends PaginationProps {
  count: number;
  page: number;
  setPage: CallableFunction;
}
export const Pagination = ({count, page, setPage ,...props }: IPagination) => {
  return (
    <MUIPagination
      showFirstButton
      showLastButton
      count={count}
      page={page}
      shape="rounded"
      variant="outlined"
      renderItem={(item) => (
        <PaginationItem
          slots={{
            first: (props) => <IconChevronsLeft {...props} size={18} />,
            last: (props) => <IconChevronsRight {...props} size={18} />,
          }}
          {...item}
        />
      )}
      onChange={(_, value) => setPage(value - 1)}
      {...props}
    />
  );
};