//Подписки на рассылку
import React from "react";

export default function NewsletterSubscriptions() {
  const events = [
    {
      name: "Виктор Виктор Викторович",
      email: "aakenteva40@gmail.com",
      date: "2024.12.24",
    },
    {
      name: "Виктор Виктор Викторович",
      email: "aakenteva40@gmail.com",
      date: "2024.12.24",
    },
    {
      name: "Виктор Виктор Викторович",
      email: "aakenteva40@gmail.com",
      date: "2024.12.24",
    },
  ];
  return (
    <div className="return">
      <div className="container__top">
        <p className="title">Подписки на рассылку</p>
        <button className="button__dop button__mb2">Выгрузить в Exel</button>
        <div className="container__flex">
          <p className="text">Поиск :</p>
          <input type="text" className="input" />
        </div>
      </div>
      <div className="table-container">
        <table className="events-table">
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Email</th>
              <th>Дата добавления</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td className="event-name">{event.name}</td>
                <td className="muted">{event.email}</td>
                <td className="muted">{event.date}</td>
                <td>
                  <button className="action-btn" aria-label="Действие">
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
}
