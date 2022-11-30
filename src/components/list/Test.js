import React from "react";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./page.css";

const Page = () => {
    let selected = 0;
    let limit = 200;
    let ApiDataCount = 0;
    let pointOut = 0;
    const pageSplit = 20;

    const [pageCount, setPageCount] = useState(0);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [PageNo, setPageNo] = useState(1);
    const [apiCount, setApiCount] = useState();
    const [selectionHolder, setSelectionHolder] = useState(1);

    const storeFlag = (apiCount, selected) => {
        if (selected % pageSplit === 0) {
            //pageSplit means "limit/dataPerPage = 200/10=20"
            pointOut = selected / pageSplit;
            console.log(pointOut, "after /10");
        } else {
            pointOut = selected / pageSplit;
            //console.log(pointOut, "after /10");
            pointOut = Math.floor(pointOut + 1);
            //console.log(pointOut, "after math floor");
        }
        return pointOut;
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    //console.log(currentPage, "currentPage")
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);
    console.log(indexOfFirstItem, indexOfLastItem);
    //console.log(items.slice(indexOfFirstItem, indexOfLastItem));

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_page=${PageNo}&_limit=${limit}`
            );
            refCall(res);

            const data = await res.json();
            console.log("getting 200 data", data);
            console.log(ApiDataCount, "apicount");
            setPageCount(Math.ceil(ApiDataCount / itemsPerPage));
            setItems(data);
        };
        getComments();
    }, []);
    const refCall = (res) => {
        ApiDataCount = res.headers.get("x-total-count"); // total data
        setApiCount(ApiDataCount);
    };

    async function fetchComments(holder) {
        //console.log(holder, "holder inside fetch function before increment");
        //console.log(PageNo, "pageno inside fetch function")
        setPageNo(holder);
        const result = await fetch(
            `https://jsonplaceholder.typicode.com/photos?_page=${holder}&_limit=${limit}`
        );
        const dataValue = await result.json();
        return dataValue;
    }

    let holder = 1;
    const handlePageClick = (event, value) => {
        selected = event.selected + 1;

        holder = storeFlag(apiCount, selected);
        //console.log(holder, "holder");
        setSelectionHolder(holder);
        if (selectionHolder === holder) {
            console.log("Selected Value & holder are same");
            //console.log(selected,"selected value before modulas & holding original selected value");
            selected = selected % pageSplit;
            //console.log(selected, "selected value after modulas");
            setCurrentPage(selected);
        } else {
            console.log("Selcted Value & holder are not same");
            //console.log(selected,"selected value before modulas & holding original selected value");
            selected = selected % pageSplit;
            //console.log(selected, "selected value after modulas");
            setCurrentPage(selected);
            fetchComments(holder).then((datatwo) => {
                console.log("getting another 200 data", datatwo);
                setItems(datatwo);
            });
        }
        if (selected % pageSplit === 0) {
            selected = pageSplit;
            setCurrentPage(selected);
        }
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow align="center">
                            <TableCell align="center">Data ID</TableCell>
                            <TableCell align="center">Data Title</TableCell>
                            <TableCell align="center">Data URL</TableCell>
                            <TableCell align="center">Data Thumbnail URL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentItem.map((item, i) => (
                            <TableRow key={item.id}>
                                <TableCell align="center">{item.id}</TableCell>
                                <TableCell align="center">{item.title}</TableCell>
                                <TableCell align="center">{item.url}</TableCell>
                                <TableCell align="center">
                                    <img
                                        src={item.thumbnailUrl}
                                        alt="img"
                                        width="40"
                                        height="40"
                                    ></img>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "20px 0px 0px 0px"
                }}
            >
                <ReactPaginate
                    nextLabel="next>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={6}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<previous"
                    pageClassName="pageClassName"
                    pageLinkClassName="pageLink"
                    previousClassName="previousClass"
                    previousLinkClassName="previousLinkClass"
                    nextClassName="nextClass"
                    nextLinkClassName="nextLinkClass"
                    breakLabel="...."
                    breakClassName="breakClass"
                    breakLinkClassName="breakLinkClass"
                    containerClassName="pagination"
                    activeClassName="activeClass"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
};
export default Page;
