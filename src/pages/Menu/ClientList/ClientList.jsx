//Список клиентов
import React, { useState } from "react";
import "./ClientList.css";
export default function ClientList() {
  const [checkbox, setCheckbox] = useState(true);
  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };
  const events = [
    {
      name: "Crave Airlines",
    },
    {
      name: "Crave Airlines",
    },
    {
      name: "Crave Airlines",
    },
  ];
  return (
    <div className="return">
      <div>
        <p className="title">Список клиентов</p>
        <p className="text">
          Список клиентов содержит данные о покупках по тем заказам, в которых
          указаны контактные данные.
        </p>
        <p className="text">Список сгруппирован по номеру телефона.</p>
        <p className="text">
          Пожалуйста, обратите внимание: в том случае, если с одним и тем же
          номером телефона были оформлены заказы с разными ФИО или адресами
          электронной почты, данные по таким заказам будут показаны одной
          строкой, при этом будет показан только один вариант ФИО и адреса
          электронной почты.
        </p>
      </div>
      <div className="container__flex client__list">
        <p className="text">Мероприятия с </p>
        <input type="text" className="date-input" />
        <p className="text"> по </p>
        <input type="text" className="date-input" />
      </div>

      <div className="checkbox-itemr">
        <div className="checkbox-item">
          <input className="checkbox__item" type="checkbox" />
          <p>
            по всем доступным мероприятиям и онлайн-событиям (в том числе
            принципалов){" "}
          </p>
        </div>
        <div className="checkbox-item">
          <input
            className="checkbox-item"
            type="checkbox"
            checked={checkbox}
            onChange={handleCheckboxChange}
          />
          {/* при клике на чекбокс открывается таблица с выбором мероприятий */}
          <p> выбрать из собственных мероприятий и событий</p>
        </div>
        {checkbox && (
          <div className="table-container">
            <table className="events-table">
              <thead>
                <tr>
                  <th>
                    <input className="checkbox__item" type="checkbox" />
                  </th>
                  <th>Мероприятия и онлайн события:</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>
                      <input className="checkbox__item" type="checkbox" />
                    </td>
                    <td className="event-name">{event.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="checkbox-item">
        <div className="checkbox-item">
          <input className="checkbox__item" type="checkbox" />
          <p>Разбивка по мероприятию и сеансу</p>
        </div>
        <div className="checkbox-item">
          <input className="checkbox__item" type="checkbox" />
          <p> Разбивка по городу</p>
        </div>
      </div>
      <button className="button__dop button-create">
        Выгрузить список клиентов
      </button>
    </div>
  );
}
