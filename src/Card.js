import React, { useContext } from "react";
import { useHistory } from "react-router";

const Card = (props) => {
  const qty = useContext(props.context);
  let history = useHistory();

  return (
    <div
      className="col-md-4"
      key={props.i}
      onClick={() => {
        history.push("/detail/" + props.shoes.id);
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
        alt=""
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      {qty[props.i]}
    </div>
  );
};

export default Card;
