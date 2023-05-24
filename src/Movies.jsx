import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "./MainContext";

const Movies = () => {
  const { movie, isLoading } = useContext(MainContext);

  if (isLoading) {
    return <div>loading.....</div>;
  }

  return (
    <>
      <div className="cardContainer">
        {movie.map((x) => {
          const { Poster, Title, Type, Year, imdbID } = x;

          const movieName = Title.substring(0, 15);

          return (
            <NavLink to={`movies/${imdbID}`}>
              <div className="card">
                <h2>
                  {movieName.length >= 15 ? `${movieName}...` : movieName}
                </h2>
                <img src={Poster} />
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
