import React from "react";
import "./Main.css";
const events = [
  {
    data: "25.10.2023 20:00",
    name: "Crave Airlines",
    location: "Театр Crave",
    sity: "Москва",
    price: " 10000-20000",
  },
  {
    data: "25.10.2023 20:00",
    name: "Crave Airlines Премьера",
    location: "Театр Crave",
    sity: "Москва",
    price: " 10000-20000",
  },
  {
    data: "25.10.2023 20:00",
    name: "Crave Airlines",
    location: "Театр Crave",
    sity: "Москва",
    price: " 10000-20000",
  },
];

export default function Main() {
  return (
    <div className="events-container">
      <div className="main__header">
        <div className="main__poisk">
          <p className="main__text">Поиск :</p>
          <input
            type="text"
            className="filter-input main__input"
            placeholder="мероприятие, место проведения и/или дата"
          />
        </div>
        <div className="main__plase-filter">
          <select className="filter-select">
            <option>- Место проведенния -</option>
            <option> Театр Crave</option>
          </select>
        </div>
      </div>
      <div className="table-container">
        <table className="events-table">
          <thead>
            <tr>
              <th>Дата и время</th>
              <th>Мероприятия</th>
              <th>Место проведения</th>
              <th>Город</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td className="event-name">{event.data}</td>
                <td className="muted">{event.name}</td>
                <td className="muted">{event.location}</td>
                <td className="muted">{event.sity}</td>
                <td className="muted">{event.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
