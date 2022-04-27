import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const { addComment } = require("../axios");

const Home = () => {
  return (
    <div className="home">
      <div className="body">
        <div className="box">안녕하세용</div>
      </div>
    </div>
  );
};

export default Home;
