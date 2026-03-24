//Сопутствующие товары и услуги
import React from "react";

export default function RelatedProductsAndServices() {
  return (
    <div className="return">
      <h1 className="title">Сопутствующие товары и услуги</h1>
      <button className="button__dop button__mb2 ">Добавить</button>
      <div className="container__flex">
        <input type="text" className="input" />
        <select className="filter-select ">
          <option>Все</option>
          <option>Активные</option>
          <option>Не активные</option>
        </select>
      </div>
    </div>
  );
}
