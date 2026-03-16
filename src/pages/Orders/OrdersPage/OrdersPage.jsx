// OrdersPage.jsx
import React, { useState } from "react";
import "./OrdersPage.css";

const OrdersPage = () => {
  return (
    <div className="order-container">
      <h1 className="order-title">Список заказов</h1>

      {/* Фильтры */}
      <div className="zakaz__container">
        <div className="filters-grid">
          <div className="filter-row">
            <div className="filter-label">Номер заказа / штрихкод:</div>
            <input type="text" className="filter-input" />
          </div>

          <div className="filter-row">
            <div className="filter-label">Дата оформления:</div>
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
            <div className="filter-label">Дата оплаты:</div>
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
            <div className="filter-label">Дата сеанса:</div>
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
            <div className="filter-label">Сеанс:</div>
            <select className="filter-select">
              <option>- выберите -</option>
            </select>
          </div>

          <div className="filter-row">
            <div className="filter-label">ФИО клиента:</div>
            <input type="text" className="filter-input" />
          </div>

          <div className="filter-row">
            <div className="filter-label">Телефон:</div>
            <input type="text" className="filter-input" />
          </div>

          <div className="filter-row">
            <div className="filter-label">E-mail:</div>
            <input type="text" className="filter-input" />
          </div>
        </div>

        {/* Статусы */}
        <div className="section">
          <h3 className="section-title">Статусы:</h3>
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
          <h3 className="section-title">Способ получения:</h3>
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
          <h3 className="section-title">Оформил:</h3>
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
        <button className="button">Применить</button>
        <button className="button">По умолчанию</button>
        <button className="button">Выгрузить в Excel</button>
      </div>
    </div>
  );
};

export default OrdersPage;
