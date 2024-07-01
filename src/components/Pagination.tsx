import React, { ReactElement } from 'react';
import { IHandlePageChangeParam } from './DataTable.model';

export interface IPaginationParam {
    currentPage?: number,
    pageSize?: number,
    totalItems?: number,
    onPageChange: ({ pageNumber, setCurrentPage }: IHandlePageChangeParam) => void
}

const Pagination = ({ currentPage, pageSize, totalItems, onPageChange }: IPaginationParam): ReactElement => {
    return (
        <div>Pagination</div>
    )
}

export default Pagination