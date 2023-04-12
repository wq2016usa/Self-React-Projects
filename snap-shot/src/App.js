import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Switch, Link, createBrowserRouter, RouterProvider, useHistory} from "react-router-dom";
import PhotoContextProvider from "./photoContext/photoContext";
import Item from "./components/Item";
import Header from "./components/Header";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import './App.css';

function App () {
  // const [temphistory, setTempHistory] = useState("");
  const [searchContent, setSearchContent] = useState("");
  

  return (
    <PhotoContextProvider>
      <BrowserRouter basename="/">
        <Header
          setSearchContent={setSearchContent}
            // history={history}
        />
        <div className="snapShotContainer">
          <Routes>
            <Route
              exact
              path="/"
              element = {
                <Item searchTerm="mountain" />
              }
            />
            <Route path="/mountain" element={<Item searchTerm="mountain" />} />
            <Route path="/beach" element={<Item searchTerm="beach" />}/>
            <Route path="/bird" element={<Item searchTerm="bird" />} />
            <Route path="/food" element={<Item searchTerm="food" />} />
            <Route
              path="/search/:query"
              element={
                <Search searchTerm={searchContent} />
              }
            />
            <Route element={NotFound} />
          </Routes>
        </div>
      </BrowserRouter>
    </PhotoContextProvider>
    
  );
}

export default App;
