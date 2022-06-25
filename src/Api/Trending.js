import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../Components/SingleContent";
import CustomPagination from "../Components/CustomPagination";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";

function Trending() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const numberOfPages = 10;
  const trendingApi = async () => {
    const trendingData = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MY_KEY}&page=${page}`
    );
    setContent(trendingData.data.results);
  };
  // console.log(content);
  useEffect(() => {
    trendingApi();
    // eslint-disable-next-line
  }, [page]);

  //   console.log(content);
  return (
    <>
      <div className="pageTitle">
        <WhatshotOutlinedIcon sx={{ fontSize: 30, color: "red" }} />
        <h3 className="pageText">Trending</h3>
      </div>
      <div className="maincontainer">
        {content &&
          content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                title={c.title || c.name}
                poster={c.poster_path}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            );
          })}
      </div>
      <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
    </>
  );
}

export default Trending;
