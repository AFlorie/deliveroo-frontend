import React from "react";

const Info = ({ data }) => {
  // console.log(data);
  return (
    <div className="global">
      <div className="container">
        <section className="info">
          <div className="col-1">
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <div className="col-2">
            <img src={data.restaurant.picture} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
