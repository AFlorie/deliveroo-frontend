import React from "react";

const Panier = ({ cart, setCard }) => {
  console.log(cart);
  return (
    <section className="basket">
      <button className={cart.length !== 0 ? "fullcart" : "emptycart"}>
        Valider mon panier
      </button>
      {cart.length === 0 ? (
        <div>Votre panier est vide</div>
      ) : (
        <section>
          {cart.map((item, i) => {
            return (
              <>
                <div key={item.id} className="command">
                  <span></span>
                  <span>{item.title}</span>
                  <span>{item.price.replace(".", ",")} €</span>
                </div>
                <div></div>
                <div></div>
              </>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default Panier;
