import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer/";
import React, { useState, useEffect } from "react";
import SingleContent from "components/SingleContent/SingleContent";
import "./Trending.css";
import CustomPagination from "components/Pagination/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjgyNjFlNTZjMTVlN2NlNjY3MWMyM2NkNDFmZGMzMCIsInN1YiI6IjY1MTJlZTkyMzQ0YThlMDk3MDA1YWU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fE30CC4yww0P3LzcE0RXDJmtAk9hJt3-nqGMQLma7i4",
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      setContent(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchData();
  }, [page]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </DashboardLayout>
  );
};

export default Trending;
