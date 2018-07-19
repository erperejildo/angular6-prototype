import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      This project is running ReactJS
      <div className="mt-2">Examples:</div>
      <ul>
        <li>ReactJS architecture</li>
        <li>Routing including 404 pages and automatic redirection</li>
        <li>Components creation</li>
        <li>
          Template manipulation (loops, functions, dynamic class and
          selectors...)
        </li>
        <li>Animations</li>
      </ul>
    </div>
  );
}

export default Home;
