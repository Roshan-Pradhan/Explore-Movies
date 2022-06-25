import React from "react";
import SingleContent from "./SingleContent";

const SearchResults = () => {
  return (
    <div>
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
                media_type="tv"
                vote_average={c.vote_average}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SearchResults;
