// OrdersPage.jsx
import React, { useState } from "react";
import "./OrdersPage.css";

const OrdersPage = () => {
  return (
    <div className="return ">
      <h1 className="title ">Список заказов</h1>

      {/* Фильтры */}
      <div className="container__flex">
        <div className="filters-grid">
          <div className="filter-row">
            <div className="filter-text">Номер заказа / штрихкод:</div>
            <input type="text" className="input" />
          </div>

          <div className="filter-row">
            <div className="filter-text">Дата оформления:</div>
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
            <div className="filter-text">Дата оплаты:</div>
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
            <div className="filter-text">Дата сеанса:</div>
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
            <div className="filter-text">Сеанс:</div>
            <select className="input">
              <option>- выберите -</option>
            </select>
          </div>

          <div className="filter-row">
            <div className="filter-text">ФИО клиента:</div>
            <input type="text" className="input" />
          </div>

          <div className="filter-row">
            <div className="filter-text">Телефон:</div>
            <input type="text" className="input" />
          </div>

          <div className="filter-row">
            <div className="filter-text">E-mail:</div>
            <input type="text" className="input" />
          </div>
        </div>

        {/* Статусы */}
        <div className="section">
          <p className="text">Статусы:</p>
          <div className="checkbox-group">
            <label className="checkbox-item">
              <input type="checkbox" defaultChecked /> в брони
            </label>
            <label className="checkbox-item">
              <input type="checkbox" defaultChecked /> оплаченные
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> возвращенные
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> выданы распространителям
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> приглашения
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> в стадии оформления
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> аннулированные
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> только заказы с сопутсвующими товарами
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> только заказы корпоративных клиентов
            </label>
          </div>
        </div>

        {/* Способ получения */}
        <div className="section">
          <p className="text">Способ получения:</p>
          <div className="checkbox-group">
            <label className="checkbox-item">
              <input type="checkbox" defaultChecked /> кассы
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> доставка
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> электронные
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> агентские
            </label>
          </div>
        </div>

        {/* Оформил */}
        <div className="section">
          <p className="text">Оформил:</p>
          <div className="checkbox-group">
            <label className="checkbox-item">
              <input type="checkbox" defaultChecked /> все
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> crave
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> crave-buh
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> crave-buh1
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> cravekassir-1
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> Elizaveta Pavlova
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> s.gasparyan
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> Панина Яна Сабитовна
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> Прима Екатерина Николаевна
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> Служба Маркетинга
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> Смирнова Анастасия Романовна
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> ФАТАХОВА ЛАУРА АЛЬБЕРТОВНА
            </label>
          </div>
        </div>
      </div>
      <div className="button__container">
        <button className="button__dop">Применить</button>
        <button className="button__dop">По умолчанию</button>
        <button className="button__dop">Выгрузить в Excel</button>
      </div>
    </div>
  );
};

export default OrdersPage;
