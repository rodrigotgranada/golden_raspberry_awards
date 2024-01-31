import React, { useState, useEffect } from "react";
import "./../../styles/List/Pagination.scss";
import { MdSkipPrevious } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";

const Pagination = ({
  pageChangeHandler,
  totalRows,
  rowsPerPage,
  currentPage,
}) => {
  const noOfPages = Math.ceil(totalRows / rowsPerPage);
  const pagesArr = [...new Array(noOfPages)];

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const [pageFirstRecord, setPageFirstRecord] = useState(0);
  const [pageLastRecord, setPageLastRecord] = useState(rowsPerPage);

  const onNextPage = () =>
    pageChangeHandler((prevState) => ({
      ...prevState,
      page: currentPage + 1,
    }));
  const onPrevPage = () =>
    pageChangeHandler((prevState) => ({
      ...prevState,
      page: currentPage - 1,
    }));
  const onFirstPage = () =>
    pageChangeHandler((prevState) => ({
      ...prevState,
      page: 0,
    }));
  const onPageSelect = (pageNo) =>
    pageChangeHandler((prevState) => ({
      ...prevState,
      page: pageNo,
    }));
  const onLastPage = () =>
    pageChangeHandler((prevState) => ({
      ...prevState,
      page: noOfPages - 1,
    }));

  useEffect(() => {
    if (noOfPages === currentPage + 1) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (currentPage === 0) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [noOfPages, currentPage]);

  useEffect(() => {
    const skipFactor = currentPage * rowsPerPage;
    setPageFirstRecord(skipFactor + 1);
  }, [currentPage]);

  useEffect(() => {
    const count = pageFirstRecord + rowsPerPage;
    setPageLastRecord(count > totalRows ? totalRows : count - 1);
  }, [pageFirstRecord, rowsPerPage, totalRows]);

  return (
    <>
      {noOfPages >= 0 ? (
        <div className={"pagination"}>
          <div className={"pagebuttons"}>
            <button
              className={"pageIcon pageBtn "}
              onClick={onFirstPage}
              disabled={noOfPages === 1}
            >
              <span>
                <MdSkipPrevious />
              </span>
            </button>
            <button
              className={"pageBtn pageIcon"}
              onClick={onPrevPage}
              disabled={!canGoBack}
            >
              <span>
                <MdArrowLeft />
              </span>
            </button>
            {pagesArr.map((num, index) => (
              <button
                key={index}
                onClick={() => onPageSelect(index)}
                className={`${"pageBtn"}  ${
                  index === currentPage ? "activeBtn" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={"pageBtn pageIcon"}
              onClick={onNextPage}
              disabled={!canGoNext}
            >
              <span>
                <MdArrowRight />
              </span>
            </button>
            <button
              className={"pageBtn pageIcon"}
              onClick={onLastPage}
              disabled={noOfPages === 1}
            >
              <span>
                <MdSkipNext />
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
