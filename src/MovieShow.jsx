import React from "react";
import { useParams } from "react-router-dom";

const MovieShow = () => {
  const { id } = useParams();
  return (
    <>
      <h2>our Single Movie {id}</h2>
    </>
  );
};

export default MovieShow;
