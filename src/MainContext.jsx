import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("byomkesh...");
  const [error, setError] = useState({
    show: "false",
    msg: "",
  });

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.Search);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        setError({
          show: false,
          msg: "",
        });
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movie);

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies(`${API}&s=${query}`);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <MainContext.Provider value={{ isLoading, movie, error, query, setQuery }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
