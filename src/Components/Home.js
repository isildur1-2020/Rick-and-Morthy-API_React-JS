import React from "react";
import { useHistory } from "react-router";
import "./Styles/Home.css";

const Home = () => {
  const history = useHistory();
  return (
    <div className="grilla">
      <h1 className="title">
        Rick And Morthy
        <br />
        <i className="subtitle">
          Powered by{" "}
          <a
            href="https://rickandmortyapi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
        </i>
      </h1>
      <button className="button-action" onClick={() => history.push("/characters")}>
        Look Characters
      </button>
    </div>
  );
};
export default Home;
