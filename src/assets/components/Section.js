import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = ({ categorie, i, cart, setCart }) => {
  // console.log(cart);
  return (
    <>
      {categorie.meals.map((meal, index) => {
        return (
          <article
            key={index}
            className="section"
            onClick={() => {
              const tab = [...cart];
              if (tab.length === 0) {
                tab.push({
                  id: meal.id,
                  title: meal.title,
                  price: meal.price,
                  quantity: 1,
                });
                setCart(tab);
              } else {
                let isPresent = false;
                for (let i = 0; i < tab.length; i++) {
                  if (tab[i].id === meal.id) {
                    isPresent = true;
                    tab[i].quantity = tab[i].quantity + 1;
                  }
                }
                if (isPresent === false) {
                  tab.push({
                    id: meal.id,
                    title: meal.title,
                    price: meal.price,
                    quantity: 1,
                  });
                }
                setCart(tab);
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
