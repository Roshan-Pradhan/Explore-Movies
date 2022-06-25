import React from "react";
import StarIcon from "@mui/icons-material/Star";
import ModalMovies from "./Modal";

const SingleContent = ({
  id,
  title,
  poster,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <>
      <ModalMovies id={id} media_type={media_type}>
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/w300${poster}`
              : `https://www.movienewz.com/img/films/poster-holder.jpg`
          }
          alt={title}
          className="imageHover"
        />
        <h4 className="movieTitle">{title}</h4>
        <div className="dateseries">
          <p>{media_type === "tv" ? "TV series" : "Movie"}</p>
          <p style={{ color: vote_average > 6 ? "#91EE91" : "red" }}>
            {vote_average} <StarIcon sx={{ fontSize: 12 }} />
          </p>
          <p>{date}</p>
        </div>
      </ModalMovies>
    </>
  );
};

export default SingleContent;
