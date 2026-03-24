import React from "react";

export default function ConsumerReturns() {
  return (
    <div className=" return">
      <h1 className="title">Возврат билетов от покупателя</h1>
      <div className="return__container">
        <p className="text">Введите номер заказа:</p>
        <input type="text" className="input" />
        <button className="button__dop">Найти</button>
      </div>
    </div>
  );
}
