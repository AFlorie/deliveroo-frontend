import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = ({ data, categorie, i, cart, setCart }) => {
  return (
    <>
      {categorie.meals.map((meal, index) => {
        return (
          <article
            key={meal.id}
            className="section"
            onClick={() => {
              const tab = [...cart];
              tab.push(meal);
              setCart(tab);
            }}
          >
            <div>
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <span>{meal.price.replace(".", ",")} €</span>
              <span className={!meal.popular ? "hidden" : "popular"}>
                <i>
                  <FontAwesomeIcon icon="star" />
                </i>
                populaire
              </span>
            </div>
            <div className={!meal.picture ? "hidden" : "display"}>
              <img src={meal.picture} alt="" />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Section;
