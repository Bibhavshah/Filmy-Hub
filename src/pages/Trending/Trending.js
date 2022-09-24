import React, { useState } from "react";
import "./Trending.css";
import { useEffect } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
    // );
    // //console.log(data.results);
    // setContent(data.results);
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    const data = await response.json();
    //console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <div className="trending">
      <span className="page-title">Trending</span>
      <div className="trending">
        {content &&
          content.map((item) => {
            return (
              <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type={item.media_type}
                vote_average={item.vote_average}
              />
            );
          })}
      </div>

      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
