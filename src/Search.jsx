import React from "react";
import { useContext } from "react";
import { MainContext } from "./MainContext";

const Search = () => {
  const { query, setQuery, error } = useContext(MainContext);

  const textHandle = (e) => {
    setQuery(e.target.value);
  };

  const formHandle = (e) => {
    e.preventDefault();
    setQuery("");
  };

  return (
    <>
      <form action="#" onSubmit={formHandle}>
        <input type="search" value={query} onChange={textHandle} />
      </form>
      <div className="cardError">
        <p>{error.show && error.msg}</p>
      </div>
    </>
  );
};

export default Search;
