import React from "react";

export default function PromoCodes() {
  const events = [
    {
      dataOne: "12.08.2024 20:39",
      dataLast: "12.08.2024 20:39",
      promokode: "FFFFFHHH",
      sale: "5000",
      used: "0/1",
      info: "5995242101",
    },
    {
      dataOne: "12.08.2024 20:39",
      dataLast: "12.08.2024 20:39",
      promokode: "FFFFFHHH",
      sale: "5000",
      used: "0/1",
      info: "5995242101",
    },
    {
      dataOne: "12.08.2024 20:39",
      dataLast: "12.08.2024 20:39",
      promokode: "FFFFFHHH",
      sale: "5000",
      used: "0/1",
      info: "5995242101",
    },
  ];
  return (
    <div className="return">
      <div className="return__container">
        <p className="title">Промокоды</p>
      </div>
      <div className="button__container">
        <button className="button__dop">Добавить</button>
        <button className="button__dop">Выгрузить в Exel</button>
      </div>
      <div className="container__flex mt2">
        <div className="return">
          <p className="text">Промокод</p>
          <input
            type="text"
            className="input"
            placeholder="Искать по промокоду"
          />
        </div>
        <div className="return">
          <p className="text">Примечание</p>
          <input
            type="text"
            className="input"
            placeholder="Искать по примечанию"
          />
        </div>
      </div>
      <div className="mt2">
        <div className="checkbox-item">
          <input type="checkbox" name="" id="" />
          <p>Только неиспользованные</p>
        </div>
        <div className="container__flex">
          <div className="checkbox-item">
            <input type="checkbox" name="" id="" />
            <p>Актуальные</p>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" name="" id="" />
            <p>Все</p>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table className="events-table">
          <thead>
            <tr>
              <th>
                <input className="checkbox__item" type="checkbox" />
              </th>
              <th>Действителен с</th>
              <th>Действителен по</th>
              <th>Промокод</th>
              <th>Скидка</th>
              <th>Использование</th>
              <th>Примечание</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>
                  <input className="checkbox__item" type="checkbox" />
                </td>
                {/* тут добавить файл эксель */}
                <td className="event-name">{event.dataOne}</td>
                <td className="muted">{event.dataLast}</td>
                <td className="muted">{event.promokode}</td>
                <td className="muted">
                  {event.sale} руб. (на всю сумму заказа)
                </td>
                <td className="muted">{event.used}</td>
                <td className="muted"> Промокод к билету №{event.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
