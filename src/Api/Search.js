import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Search = ({ page, setSearchData, setNumberofPages }) => {
  //   const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const searchMovie = async () => {
    const searchResult = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setSearchData(searchResult.data.results);
    setNumberofPages(searchResult.data.total_pages);
  };
  const searchSeries = async () => {
    const searchResult = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setSearchData(searchResult.data.results);
    setNumberofPages(searchResult.data.total_pages);
  };
  useEffect(() => {
    searchMovie();
    searchSeries();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div className="searchContainer">
        <TextField
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#193948" }}
          onClick={searchMovie}
        >
          <SearchIcon />
        </Button>
      </div>
    </>
  );
};

export default Search;
