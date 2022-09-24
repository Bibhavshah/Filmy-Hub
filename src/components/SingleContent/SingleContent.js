import React from "react";
import "./SingleContent.css";
import img from "../../components/assets/Naruto.jpg";
//import { img_300, unavailable } from "../../config/config";
import Badge from "@mui/material/Badge";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      {/* <img
        className="psoter"
        src={poster ? `${img_300} | ${poster}}` : unavailable}
        alt={title}
      /> */}
      <Badge
        badgeContent={Math.round(vote_average * 10) / 10}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img src={img} alt={title} />
      <b className="title">{title}</b>
      <span className="sub-title">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="sub-title">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
