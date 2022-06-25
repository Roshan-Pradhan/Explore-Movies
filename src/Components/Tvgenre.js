import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Tvgenre = ({ setPage, setSelectedgenres, selectedgenres }) => {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    const genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`
    );
    setGenres(genresData.data.genres);
  };
  useEffect(() => {
    getGenres();
  }, []);

  const handleAdd = (genre) => {
    setSelectedgenres([...selectedgenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  //   console.log(selectedgenres);
  const handleRemove = (genre) => {
    setSelectedgenres(
      selectedgenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  return (
    <div className="chip">
      {selectedgenres &&
        selectedgenres.map((genre) => {
          return (
            <Chip
              key={genre.id}
              label={genre.name}
              clickable
              sx={{ m: 1 }}
              color="primary"
              onDelete={() => handleRemove(genre)}
            />
          );
        })}
      {genres &&
        genres.map((genre) => {
          return (
            <Chip
              key={genre.id}
              label={genre.name}
              clickable
              sx={{ m: 1 }}
              onClick={() => handleAdd(genre)}
            />
          );
        })}
    </div>
  );
};

export default Tvgenre;
