import React, { useState } from "react";

export default function Seans() {
  const [actual, setActual] = useState(true); // Актуальные
  const [past, setPast] = useState(false); // Прошедшие

  const handleActualChange = (e) => {
    setActual(e.target.checked);
    if (e.target.checked) {
      setPast(false);
    }
  };

  const handlePastChange = (e) => {
    setPast(e.target.checked);
    if (e.target.checked) {
      setActual(false);
    }
  };

  const events = [
    {
      data: "12.12.2022 07:00",
      name: "Crave Airlines",
      place: "Театр Crave",
      statusP: "Статус продажи",
      statusB: "Статус бронирования",
    },
    {
      data: "12.12.2022 07:00",
      name: "Crave Airlines",
      place: "Театр Crave",
      statusP: "Статус продажи",
      statusB: "Статус бронирования",
    },
    {
      data: "12.12.2022 07:00",
      name: "Crave Airlines",
      place: "Театр Crave",
      statusP: "Статус продажи",
      statusB: "Статус бронирования",
    },
  ];

  return (
    <div className="retutn">
      <div className="seans__header">
        <button>Сеансы</button>
        <button>Доступ к собственным сеансом для Агентов</button>
        <button>Создание сеансов по мероприятиям</button>
        <button>Создание сеансов по образцу</button>
      </div>

      <div className="checkbox-item">
        <div className="checkbox-item">
          <input
            type="checkbox"
            checked={actual}
            onChange={handleActualChange}
          />
          <p>Актуальные</p>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" checked={past} onChange={handlePastChange} />
          <p>Прошедшие</p>
        </div>
      </div>

      {/* Верхний контент - показываем только когда Актуальные активны */}
      {actual && (
        <>
          <div className="container__flex">
            <div className="return__container ">
              <div className="filters-grid">
                <div className="filter-row">
                  <div className="filter-text">Поиск:</div>
                  <input type="text" className="input" />
                </div>
                <div className="filter-row">
                  <div className="filter-text">Место проведения:</div>
                  <select className="input">
                    <option>Театр Crave</option>
                  </select>
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
                  <div className="filter-text">Время начала:</div>
                  <input type="text" className="input" />
                </div>
              </div>
            </div>
          </div>

          <div className="return__container mt2 ">
            <div className="filter-row">
              <div className="filter-text">Статус продажи:</div>
              <select className="input">
                <option>Не менять</option>
                <option>Открыта</option>
                <option>Закрыта</option>
                <option>Приостановлена</option>
              </select>
            </div>
            <div className="filter-row">
              <div className="filter-text">Статус бронирования:</div>
              <select className="input">
                <option>Не менять</option>
                <option>Доступно</option>
                <option>Недоступно</option>
              </select>
            </div>
          </div>

          <div className="card-header">
            <button className="button__dop mt2">Применить</button>
            <button className="button__dop mt2">Отменить сеансы</button>
          </div>

          <div className="table-container">
            <table className="events-table">
              <thead>
                <tr>
                  <th>
                    <input className="checkbox__item" type="checkbox" />
                  </th>
                  <th>Дата и время:</th>
                  <th>Мероприятие:</th>
                  <th>Место проведения:</th>
                  <th>Статус продажи:</th>
                  <th>Статус бронирования:</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>
                      <input className="checkbox__item" type="checkbox" />
                    </td>
                    <td className="event-name">{event.data}</td>
                    <td className="event-name">{event.name}</td>
                    <td className="event-name">{event.place}</td>
                    <td className="event-name">{event.statusP}</td>
                    <td className="event-name">{event.statusB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Нижний контент - показываем только когда Прошедшие активны */}
      {past && (
        <div className="retutn">
          <div className="filter-row">
            <div className="filter-text">Поиск:</div>
            <input type="text" className="input" />
          </div>
          <div className="table-container mt2">
            <table className="events-table">
              <thead>
                <tr>
                  <th>Дата и время:</th>
                  <th>Мероприятие:</th>
                  <th>Место проведения:</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td className="event-name">{event.data}</td>
                    <td className="event-name">{event.name}</td>
                    <td className="event-name">{event.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
