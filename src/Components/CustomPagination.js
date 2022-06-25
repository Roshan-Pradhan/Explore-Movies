import { Pagination } from "@mui/material";
import React from "react";

const CustomPagination = ({ setPage, numberOfPages }) => {
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 20,
      }}
    >
      <Pagination
        count={numberOfPages}
        color="primary"
        size="medium"
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPagination;
