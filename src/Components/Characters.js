import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import "./Styles/Characters.css";
import Square from "./Square";

const Charaacters = () => {
  // STATE
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const URL_API = `https://rickandmortyapi.com/api/character/?page=${page}`;
      setLoading(true);
      const {
        data: { results },
      } = await axios.get(URL_API);
      setLoading(false);
      setData(results);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError(true);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      {error && (
        <div className="grilla">
          <h1 className="title">
            Error, lo lamentamos!, no hemos podido obtener lo que deseabas
          </h1>
        </div>
      )}

      {loading ? (
        <div className="grilla">
          <h1 className="title">
            Api Rick And Morthy <br /> CARGANDO ...
          </h1>
        </div>
      ) : (
        <div className="grilla">
          <h1 className="title">Rick And Morty</h1>
          {data &&
            data.map(
              ({
                id,
                image,
                name,
                gender,
                species,
                location: { name: locationName },
                origin: { name: originName },
              }) => (
                <Square
                  key={id}
                  src={image}
                  name={name}
                  gender={gender}
                  specie={species}
                  planet={locationName}
                  origin={originName}
                  alt={name}
                />
              )
            )}
          <button
            className="button-see-more"
            onClick={() => {
              if (page === 1) {
                window.moveTo(0, 0);
                alert("Esta es la primera página");
              } else setPage(page - 1);
            }}
          >
            Previous Page
          </button>
          <button onClick={() => setPage(page + 1)} className="button-see-more">
            See more
          </button>
        </div>
      )}
    </>
  );
};
export default Charaacters;
