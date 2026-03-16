import React from "react";
import "./ConsumerReturns.css";

export default function ConsumerReturns() {
  return (
    <div className=" return">
      <h1 className="order-title">Возврат билетов от покупателя</h1>
      <div className="return__container">
        <p className="return__text">Введите номер заказа:</p>
        <input type="text" className="return-input" />
        <button className="button">Найти</button>
      </div>
    </div>
  );
}
