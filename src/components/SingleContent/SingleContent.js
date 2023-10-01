import React from "react";
import "./SingleContent.css";
import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "components/config/config";
import ContentModal from "components/ContentModal/ContentModal";

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />
      <img className="poster" src={poster ? `${img_300}${poster}` : unavailable} alt={title} />
      <b className="title">{title}</b>
      <span className="subtitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subtitle sub-date">{date}</span>
      </span>
    </ContentModal>
  );
  SingleContent.propTypes = {
    adult: PropTypes.bool.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    original_language: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    popularity: PropTypes.number.isRequired,
    date: PropTypes.string,
    release_date: PropTypes.string,
    video: PropTypes.bool.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    name: PropTypes.string, // This prop is conditionally rendered based on media_type
    first_air_date: PropTypes.string, // This prop is conditionally rendered based on media_type
    origin_country: PropTypes.arrayOf(PropTypes.string), // This prop is conditionally rendered based on media_type
  };
};

export default SingleContent;
