import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Panier = ({ cart, setCart }) => {
  const tab = [...cart];
  let price = 0;
  for (let i = 0; i < tab.length; i++) {
    price = price + tab[i].quantity * Number(tab[i].price);
  }

  let finalPrice = price + 2.5;
  price = price.toFixed(2);
  finalPrice = finalPrice.toFixed(2);

  price = price.toString().replace(".", ",");

  finalPrice = finalPrice.toString().replace(".", ",");

  // console.log(cart);
  return (
    <section className="basket">
      <button className={cart.length !== 0 ? "fullcart" : "emptycart"}>
        Valider mon panier
      </button>
      {cart.length === 0 ? (
        <div className="empty-text">Votre panier est vide</div>
      ) : (
        <>
          {cart.map((item, i) => {
            return (
              <section key={item.id}>
                <div className="command">
                  <span>
                    <i
                      onClick={() => {
                        const tab = [...cart];
                        //console.log(tab[0]);
                        for (let i = 0; i < tab.length; i++) {
                          if (tab[i].id === item.id) {
                            if (tab[i].quantity > 1) {
                              tab[i].quantity = tab[i].quantity - 1;
                            } else {
                              tab.splice(i, 1);
                            }
                          }
                        }

                        setCart(tab);
                      }}
                    >
                      <FontAwesomeIcon icon="minus-square" />
                    </i>
                    {item.quantity}
                    <i
                      onClick={() => {
                        const tab = [...cart];
                        //console.log(tab[0]);
                        for (let i = 0; i < tab.length; i++) {
                          if (tab[i].id === item.id) {
                            tab[i].quantity = tab[i].quantity + 1;
                          }
                        }

                        setCart(tab);
                      }}
                    >
                      <FontAwesomeIcon icon="plus-square" />
                    </i>
                  </span>
                  <span>{item.title}</span>
                  <span>{item.price.replace(".", ",")} €</span>
                </div>
                <hr />
              </section>
            );
          })}

          <div className="detail">
            <section>
              <span>Sous-total</span>
              <span> {price} €</span>
            </section>
            <section>
              <span>Frais de livraison</span>
              <span>2,50 € </span>
            </section>
            <hr />
            <section className="finalPrice">
              <span>Total</span>
              <span>{finalPrice} €</span>
            </section>
          </div>
        </>
      )}
    </section>
  );
};

export default Panier;
