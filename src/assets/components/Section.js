import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = ({ data, categorie, i }) => {
  return (
    <>
      {categorie.meals.map((meal, index) => {
        return (
          <article className="section">
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
            <div className={!meal.picture && "hidden"}>
              <img src={meal.picture} alt="" />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Section;
