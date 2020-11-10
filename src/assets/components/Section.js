import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = ({ data, categorie, i, cart, setCart }) => {
  //console.log(cart[0].title);
  return (
    <>
      {categorie.meals.map((meal, index) => {
        return (
          <article
            key={index}
            className="section"
            onClick={() => {
              const tab = [...cart];
              console.log(tab);

              if (cart.lengh === undefined) {
                tab.push({
                  id: meal.id,
                  title: meal.title,
                  price: meal.price,
                  quantity: 1,
                });
                setCart(tab);
              } else {
                alert("deja un objet dans le tableau");
              }
            }}
          >
            <div>
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <span>{meal.price.replace(".", ",")} €</span>
              <span className={`popular ${!meal.popular && "hidden"}`}>
                <i>
                  <FontAwesomeIcon icon="star" />
                </i>
                populaire
              </span>
            </div>
            <div className={!meal.popular ? "hidden" : "popular"}>
              <img src={meal.picture} alt="" />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Section;
