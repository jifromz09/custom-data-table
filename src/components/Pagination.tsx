import { ReactElement } from "react";
import { DEFAULT_FIRST_PAGE } from "./Datatable.util";
import Button from "./Button";

export interface IPaginationParam {
  pageSize?: number;
  totalItems?: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  pageSize,
  totalItems,
  onPageChange,
}: IPaginationParam): ReactElement => {
  const paginationNumbers = [];

  const lastPage = Math.ceil(totalItems / pageSize);

  for (let i = 1; i <= lastPage; i++) {
    paginationNumbers.push(i);
  }

  const handlePageClick = (e: any, pageNumber: number) => {
    e.preventDefault();
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {/**You can pass different style in each button */}
      <Button
        styles={`pagination-button`}
        onClick={(e) => handlePageClick(e, DEFAULT_FIRST_PAGE)}
      >
        {`<`}
      </Button>
      {paginationNumbers.map((pageNumber) => (
        <Button
          styles={`pagination-button`}
          key={pageNumber}
          onClick={(e) => handlePageClick(e, pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
      <Button
        styles={`pagination-button`}
        onClick={(e) => handlePageClick(e, lastPage)}
      >{`>`}</Button>
    </div>
  );
};

export default Pagination;