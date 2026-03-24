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
                className={`submenu-item ${activeItem === "room-config" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/room-config", "room-config")
                }
              >
                Конфигурация кабинета
              </button>
              <button
                className={`submenu-item ${activeItem === "seat-maps" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/seat-maps", "seat-maps")}
              >
                Распоясовки
              </button>
              <button
                className={`submenu-item ${activeItem === "events" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/events", "events")}
              >
                Мероприятия
              </button>
              <button
                className={`submenu-item ${activeItem === "menu-seans" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/menu-seans", "menu-seans")}
              >
                Сеансы
              </button>
              <button
                className={`submenu-item ${activeItem === "report-delivery" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/report-delivery", "report-delivery")
                }
              >
                Рассылка отчетов
              </button>
              <button
                className={`submenu-item ${activeItem === "quota-distribution" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick(
                    "/quota-distribution",
                    "quota-distribution",
                  )
                }
              >
                Распределение квот по образцу
              </button>
              <button
                className={`submenu-item ${activeItem === "agent-invoices" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/agent-invoices", "agent-invoices")
                }
              >
                Сводные накладные на выдачу агентам
              </button>
              <button
                className={`submenu-item ${activeItem === "group-revaluation" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/group-revaluation", "group-revaluation")
                }
              >
                Групповая переоценка
              </button>
              <button
                className={`submenu-item ${activeItem === "promo-codes" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/promo-codes", "promo-codes")
                }
              >
                Промокоды
              </button>
              <button
                className={`submenu-item ${activeItem === "promo-code-generator" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick(
                    "/promo-code-generator",
                    "promo-code-generator",
                  )
                }
              >
                Автогенерация промокодов
              </button>
              <button
                className={`submenu-item ${activeItem === "discounts" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/discounts", "discounts")}
              >
                Скидки от количества билетов
              </button>
              <button
                className={`submenu-item ${activeItem === "widgets" ? "active" : ""}`}
                onClick={() => handleMenuItemClick("/widgets", "widgets")}
              >
                Виджеты
              </button>
              <button
                className={`submenu-item ${activeItem === "client-list" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/client-list", "client-list")
                }
              >
                Список клиентов
              </button>
              <button
                className={`submenu-item ${activeItem === "newsletter-subscriptions" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick(
                    "/newsletter-subscriptions",
                    "newsletter-subscriptions",
                  )
                }
              >
                Подписки на рассылку
              </button>
              <button
                className={`submenu-item ${activeItem === "related-products" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/related-products", "related-products")
                }
              >
                Сопутствующие товары
              </button>
              <button
                className={`submenu-item ${activeItem === "related-products-and-services" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick(
                    "/related-products-and-services",
                    "related-products-and-services",
                  )
                }
              >
                Сопутствующие товары и услуги
              </button>
              <button
                className={`submenu-item ${activeItem === "refund-rules" ? "active" : ""}`}
                onClick={() =>
                  handleMenuItemClick("/refund-rules", "refund-rules")
                }
              >
                Правила возврата электронных билетов
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
