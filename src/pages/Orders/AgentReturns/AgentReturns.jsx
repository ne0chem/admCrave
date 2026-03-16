import React from "react";
import "./AgentReturns.css";

export default function AgentReturns() {
  return (
    <div className="return">
      <h1 className="order-title">Заявки на возврат по согласованию</h1>
      <div className="return__container">
        <button className="button">Создать заявку</button>
        <div>
          <p className="order-title">Поиск заявок</p>
          <div className="poisk__container">
            <div className="filter-row">
              <div className="filter-text">Номер заказа:</div>
              <input type="text" className="filter-input" />
            </div>
            <div className="filter-row">
              <div className="filter-text">Дата заявки:</div>
              <div className="date-range">
                <span>с </span>
                <input
                  type="text"
                  className="date-input"
                  placeholder="ДД.ММ.ГГГГ"
                />
                <span> по </span>
                <input
                  type="text"
                  className="date-input"
                  placeholder="ДД.ММ.ГГГГ"
                />
              </div>
            </div>
            <div className="filter-row">
              <div className="filter-text">Статус заявки:</div>
              <select className="filter-select">
                <option>Все</option>
                <option>Открыта</option>
                <option>Частично закрыта</option>
                <option>Закрыта</option>
              </select>
            </div>
            <div className="filter-row">
              <div className="filter-container">
                <label className="checkbox-item">
                  <input type="checkbox" />
                </label>
                <p className="filter-text">Возврат по реквизитам:</p>
              </div>
              <select className="filter-select">
                <option>Все</option>
                <option>Платеж не сформирован</option>
                <option>Платеж сформирован</option>
              </select>
            </div>
          </div>
        </div>
        <button className="button">Найти</button>
      </div>
    </div>
  );
}
