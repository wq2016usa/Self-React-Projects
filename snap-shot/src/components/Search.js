import React from "react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
    console.log('st',searchTerm);
  return (
    <div>
      <h2>{searchTerm} Images</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;