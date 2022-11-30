import React, { useState, useMemo } from 'react';
import './style.css';
import data from '../../../data/db.json'
import Pagination from './Pagination';


let PageSize = 5;

export default function App() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data['serviceorders'].slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map(item => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                {/* <td>{item.first_name}</td> */}
                                {/* <td>{item.last_name}</td> */}
                                {/* <td>{item.email}</td> */}
                                {/* <td>{item.phone}</td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data['serviceorders'].length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
}
