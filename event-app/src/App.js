//import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./page/about";
import Header from "./components/header";
import Home from "./page/home";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About }
];
function App() {
  return (
    <>
      <Header />
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
                <div className='header'>
                  <Component />
                </div>
          </Route>
        ))}
    </>
  );
}
export default App;
