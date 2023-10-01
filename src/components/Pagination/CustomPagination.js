import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CustomPagination = ({ setPage, numOfPages = 500 }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);

    // Update URL with new page number
    const newRoutePath = `${location.pathname}?page=${page}`;
    navigate(newRoutePath);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numOfPages}
        color="primary"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};
CustomPagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  numOfPages: PropTypes.number,
};
export default CustomPagination;
