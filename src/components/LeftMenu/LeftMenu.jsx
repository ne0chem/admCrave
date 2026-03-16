import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LeftMenu.css";

const LeftMenu = ({ activeItem, onMenuClick }) => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState({
    orders: true,

    menu: false,
    reports: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleMenuItemClick = (path, itemId) => {
    onMenuClick(itemId);
    navigate(path);
  };

  return (
    <div className="left-menu">
      <div className="header__menu">
        <p className="header__text">Поиск заказа в брони</p>
        <div className="search-section">
          <input
            type="text"
            placeholder="номер заказа или телефон"
            className="search-input"
          />
          <button className="search-button">Найти</button>
        </div>
      </div>

      <div className="search-in-menu">
        <input
          type="text"
          placeholder="поиск в меню"
          className="menu-search-input"
        />
      </div>

      <nav className="menu-nav">
        {/* ЗАКАЗЫ */}
        <div className="menu-section">
          <button
            className={`menu-section-header ${openSections.orders ? "open" : ""}`}
            onClick={() => toggleSection("orders")}
          >
            <span className="menu-label">Заказы</span>
            <span className="arrow">{openSections.orders ? "▼" : "▶"}</span>
          </button>

          {openSections.orders && (
            <div className="submenu">
              <button
                className={`submenu-item ${activeItem === "orders-list" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/orders", "orders-list")}
              >
                Список заказов
              </button>
              <button
                className={`submenu-item ${activeItem === "returns" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/returns", "returns")}
              >
                Возврат билетов от покупателя
              </button>
              <button
                className={`submenu-item ${activeItem === "refund-requests" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/refund-requests", "refund-requests")
                }
              >
                Заявки на возврат по согласованию
              </button>
            </div>
          )}
        </div>

        {/* МЕНЮ */}
        <div className="menu-section">
          <button
            className={`menu-section-header ${openSections.menu ? "open" : ""}`}
            onClick={() => toggleSection("menu")}
          >
            <span className="menu-label">Меню</span>
            <span className="arrow">{openSections.menu ? "▼" : "▶"}</span>
          </button>

          {openSections.menu && (
            <div className="submenu">
              <button
                className={`submenu-item ${activeItem === "events" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/events", "events")}
              >
                Мероприятия
              </button>
              <button
                className={`submenu-item ${activeItem === "categories" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/categories", "categories")}
              >
                Сеансы
              </button>
              <button
                className={`submenu-item ${activeItem === "ingredients" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/ingredients", "ingredients")
                }
              >
                Список клиентов
              </button>
            </div>
          )}
        </div>

        {/* ОТЧЕТЫ */}
        <div className="menu-section">
          <button
            className={`menu-section-header ${openSections.reports ? "open" : ""}`}
            onClick={() => toggleSection("reports")}
          >
            <span className="menu-label">Отчеты</span>
            <span className="arrow">{openSections.reports ? "▼" : "▶"}</span>
          </button>

          {openSections.reports && (
            <div className="submenu">
              <button
                className={`submenu-item ${activeItem === "sales" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/sales", "sales")}
              >
                отчет1
              </button>
              <button
                className={`submenu-item ${activeItem === "profit" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/profit", "profit")}
              >
                отчет1
              </button>
              <button
                className={`submenu-item ${activeItem === "popular" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/popular", "popular")}
              >
                отчет1
              </button>
            </div>
          )}
        </div>
        <div className="menu-section">
          <button
            className={`submenu-item ${activeItem === "seans" ? "active" : ""}`}
            onClick={() => handleMenuItemClick("/seans", "seans")}
          >
            Март
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftMenu;
