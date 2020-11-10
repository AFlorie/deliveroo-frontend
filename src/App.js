import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./assets/components/Header";
import Info from "./assets/components/Info";
import Section from "./assets/components/Section";
import Panier from "./assets/components/Panier";

import logo from "./assets/images/deliveroo.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  // console.log(data.restaurant.name);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fa-deliveroo-backend.herokuapp.com/"
      );
      // console.log(response);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <span>En cours de chargement</span>
      ) : (
        <>
          <Header logo={logo} />
          <Info data={data} />

          <div className="container main">
            <section className="blockContainer">
              {data.categories.slice(0, 6).map((categorie, i) => {
                return (
                  <div className="grosBlock" key={i}>
                    <h2>{categorie.name}</h2>
                    <div className="moyenBlock">
                      <Section
                        cart={cart}
                        setCart={setCart}
                        data={data}
                        categorie={categorie}
                        i={i}
                      />
                    </div>
                  </div>
                );
              })}
            </section>
            <Panier cart={cart} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
