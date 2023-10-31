import React from 'react';
import './SingleContent.css';
import { img_300, unavailable } from '../../config/config';
import Badge from '@mui/material/Badge';

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const posterUrl = `${img_300}${poster}`;
  console.log(posterUrl);
  return (
    <div className="media">
      <img
        className="psoter"
        src={poster ? posterUrl : unavailable}
        alt={title}
      />
      <Badge
        badgeContent={Math.round(vote_average * 10) / 10}
        color={vote_average > 6 ? 'primary' : 'secondary'}
      />
      {/* <img src={img} alt={title} /> */}
      <b className="title">{title}</b>
      <span className="sub-title">
        {media_type === 'tv' ? 'TV Series' : 'Movie'}
        <span className="sub-title">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
