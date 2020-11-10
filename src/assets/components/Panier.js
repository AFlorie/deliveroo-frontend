import React from "react";

const Panier = ({ cart, setCard }) => {
  // console.log(cart);
  return (
    <section className="basket">
      <button className={cart.length !== 0 ? "fullcart" : "emptycart"}>
        Valider mon panier
      </button>
      {cart.length === 0 ? (
        <div className="empty-text">Votre panier est vide</div>
      ) : (
        cart.map((item, i) => {
          return (
            <section key={item.id}>
              <div className="command">
                <span></span>
                <span>{item.title}</span>
                <span>{item.price.replace(".", ",")} €</span>
              </div>
              <hr />
              <div className="detail">
                <section>
                  <span>Sous-total</span>
                  <span>{item.price.replace(".", ",")} €</span>
                </section>
                <section>
                  <span>Frais de livraison</span>
                  <span>2,50€ </span>
                </section>
                <section>
                  <span>Total</span>
                  <span>{item.price} + 2.50</span>
                </section>
              </div>
              <hr />
              <div></div>
            </section>
          );
        })
      )}
    </section>
  );
};

export default Panier;
