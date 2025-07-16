import { FC } from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  onChangePage: any;
};

const Pagination: FC<PaginationProps> = (props) => {
  const { onChangePage, currentPage } = props;

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
      // renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
