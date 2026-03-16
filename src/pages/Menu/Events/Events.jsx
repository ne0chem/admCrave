// App.tsx
import React from "react";
import "./Events.css";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const events = [
    {
      name: "Crave Airlines",
      category: "-",
      location: "-",
      mapLink: "-",
      lastSession: "25.10.2023 20:00",
    },
    {
      name: "Crave Airlines Премьера",
      category: "-",
      location: "-",
      mapLink: "-",
      lastSession: "30.11.2023 19:00",
    },
    {
      name: "Crave Airlines Премьера",
      category: "-",
      location: "-",
      mapLink: "-",
      lastSession: "11.11.2023 19:00",
    },
  ];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events/add");
  };
  return (
    <div className="events-container">
      <div className="card-header">
        <h1 className="order-title">Мероприятия</h1>
        <button className="button button-create" onClick={handleClick}>
          Создать мероприятие
        </button>
      </div>
      <div className="search">
        <h2 className="section-title">Поиск</h2>
        <div className="search-container">
          <input type="text" className="filter-input" />
          <select className="filter-select">
            <option>Актуальные</option>
            <option>Не актуальные</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table className="events-table">
          <thead>
            <tr>
              <th>
                <input className="checkbox__item" type="checkbox" />
              </th>
              <th>Мероприятия</th>
              <th>Категория</th>
              <th>Место проведения / Схема зала</th>
              <th>Расположения</th>
              <th>Последний сеанс</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>
                  <input className="checkbox__item" type="checkbox" />
                </td>
                <td className="event-name">{event.name}</td>
                <td className="muted">{event.category}</td>
                <td className="muted">{event.location}</td>
                <td className="muted">{event.mapLink}</td>
                <td className="muted">{event.lastSession}</td>
                <td>
                  <button className="action-btn" aria-label="Действие">
                    <button className="action-btn" aria-label="Редактировать">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 3L21 7L7 21H3V17L17 3Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 6L18 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <button className="action-btn" aria-label="Копировать">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
