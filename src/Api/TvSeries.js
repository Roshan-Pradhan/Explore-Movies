import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../Components/CustomPagination";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SingleContent from "../Components/SingleContent";
import Tvgenre from "../Components/Tvgenre";
import useGenres from "../Hooks/useGenres";
import SearchTv from "./SearchTv";

const TvSeries = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberofPages] = useState();
  const [selectedgenres, setSelectedgenres] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const genreforURL = useGenres(selectedgenres);
  const movies = async () => {
    const moviesData = await axios.get(`
    https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`);
    setContent(moviesData.data.results);
    setNumberofPages(moviesData.data.total_pages);
  };

  useEffect(() => {
    movies();
    // eslint-disable-next-line
  }, [page, genreforURL]);
  return (
    <>
      <div className="pageTitle">
        <LiveTvOutlinedIcon sx={{ fontSize: 30, color: "red" }} />
        <h3 className="pageText">Tv Series</h3>
      </div>
      <div className="searchops">
        <SearchTv
          page={page}
          setSearchData={setSearchData}
          setNumberofPages={setNumberofPages}
        />
      </div>
      <div className="genres">
        <Tvgenre
          type="movie"
          setPage={setPage}
          selectedgenres={selectedgenres}
          setSelectedgenres={setSelectedgenres}
        />
      </div>
      <div className="maincontainer">
        {searchData.length === 0 ? (
          <>
            {content &&
              content.map((c) => {
                return (
                  <SingleContent
                    key={c.id}
                    id={c.id}
                    title={c.title || c.name}
                    poster={c.poster_path}
                    date={c.first_air_date || c.release_date}
                    media_type="tv"
                    vote_average={c.vote_average}
                  />
                );
              })}
          </>
        ) : (
          <>
            {searchData &&
              searchData.map((c) => {
                return (
                  <SingleContent
                    key={c.id}
                    id={c.id}
                    title={c.title || c.name}
                    poster={c.poster_path}
                    date={c.first_air_date || c.release_date}
                    media_type="tv"
                    vote_average={c.vote_average}
                    total_page={c.total_page}
                  />
                );
              })}
          </>
        )}
      </div>
      <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
    </>
  );
};

export default TvSeries;
