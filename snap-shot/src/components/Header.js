import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({setSearchContent}) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form  setSearchContent={setSearchContent}/>
      <Navigation />
    </div>
  );
};

export default Header;