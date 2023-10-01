import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Genres = ({ selectedGenres, setSelectedGenres, genres, setGenres, type, setPage }) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
  }, []);

  Genres.propTypes = {
    selectedGenres: PropTypes.array.isRequired,
    setSelectedGenres: PropTypes.func.isRequired,
    genres: PropTypes.array.isRequired,
    setGenres: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    setPage: PropTypes.func.isRequired,
  };

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2, fontSize: "medium", fontWeight: "bold" }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="medium"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{
            margin: 2,
            fontSize: "medium",
            background: "#8FA9C3",
            color: "#000000",
          }}
          label={genre.name}
          key={genre.id}
          clickable
          size="medium"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
