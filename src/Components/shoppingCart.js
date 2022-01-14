import React from "react";
import "./shoppingCart.css";

function ShoppingCart(props) {
  //console.log(props.inventory)
  if (props.items.length == 0) {
    return (
      <div className="ShoppingCart">
        <h3>No items in the shopping cart 🙄</h3>
      </div>
    );
  } else {
    return (
      <div className="ShoppingCart">
        {props.items.map((item) => {
          // const element = props.inventory.find(
          //   (element) => element.name == item
          // );
          let price;
          if (item == "Kiara") {
            price = "150";
          }
          // else if for everyone else
          else if (item == "Bah") {
            price = "1.5";
          } else if (item == "Noemi") {
            price = "2.5";
          } else if (item == "Jibril") {
            price = "2.5";
          } else if (item == "Dares") {
            price = "2.5";
          }
          console.log(item);
          return (
            <div className="cartItem">
              <h3>{item}</h3>
              <h5>${price} </h5>
            </div>
          );
        })}

        <h2>Total: ${props.total}</h2>
      </div>
    );
  }
}

export default ShoppingCart;
