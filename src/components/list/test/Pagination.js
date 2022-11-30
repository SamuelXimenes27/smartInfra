import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import './Pagination.module.css';
import styles from './Pagination.module.css';

// import './Pagi'

const Paginations = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames(styles.paginationcontainer, { [className]: className })}
        >
            <li
                className={classnames(styles.paginationitem, {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className={styles.arrowleft} />
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className={styles.paginationitem_dots}>&#8230;</li>;
                }

                return (
                    <li
                        className={classnames(styles.paginationitem, {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames(styles.paginationitem, {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className={styles.arrowright} />
            </li>
        </ul>
    );
};

export default Paginations;
