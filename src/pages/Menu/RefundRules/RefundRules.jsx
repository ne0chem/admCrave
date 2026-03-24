//правила возврата электронных билетов
import React from "react";
import "./RefundRules.css";
import { useNavigate } from "react-router-dom";

export default function RefundRules() {
  const events = [
    {
      session: "18.07.2021 20:00",
      event: "Crave Airlines Премьера",
      location: "Театр Crave",
      sessionStatus: "перенос",
      refundStatus: "Черновик",
      refundPeriod: "c 03.06.2021 00:00 по 30.06.2021 23:59",
      moneyRefund: "Да",
      voluntaryRefund: "Да",
      updatedAt: "",
    },
    {
      session: "18.07.2021 20:00",
      event: "Crave Airlines Премьера",
      location: "Театр Crave",
      sessionStatus: "перенос",
      refundStatus: "Черновик",
      refundPeriod: "c 03.06.2021 00:00 по 30.06.2021 23:59",
      moneyRefund: "Да",
      voluntaryRefund: "Да",
      updatedAt: "",
    },
    {
      session: "18.07.2021 20:00",
      event: "Crave Airlines Премьера",
      location: "Театр Crave",
      sessionStatus: "перенос",
      refundStatus: "Черновик",
      refundPeriod: "c 03.06.2021 00:00 по 30.06.2021 23:59",
      moneyRefund: "Да",
      voluntaryRefund: "Да",
      updatedAt: "",
    },
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/refund-rules/refind-setting");
  };
  return (
    <div сlassName="return">
      <div className="header__button">
        <button className="button__dop">Правила возврата</button>
        <button onClick={handleClick} className="button__dop ">
          Настройки
        </button>
      </div>
      <div>
        <p className="title">Список сеансов, где отмена, замена или перенос</p>
        <p className="text ">
          В списке отображается информация по всем сеансам, которые были
          отменены, заменены или перенесены
        </p>
        <p className="text ">
          Вы можете изменить условия возврата для каждого сеанса
        </p>
      </div>
      <div className="table-container">
        <table className="events-table">
          <thead>
            <tr>
              <th>Сеанс</th>
              <th>Мероприятие</th>
              <th>Место проведения</th>
              <th>Статус сеанса</th>
              <th>Статус возврата</th>
              <th>Период возврата</th>
              <th>Возврат денег</th>
              <th>Возврат по желанию</th>
              <th>Изменена</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td className="event-name">{event.session}</td>
                <td className="muted">{event.event}</td>
                <td className="muted">{event.location}</td>
                <td className="muted">{event.sessionStatus}</td>
                <td className="muted">{event.refundStatus}</td>
                <td className="muted">{event.refundPeriod}</td>
                <td className="muted">{event.moneyRefund}</td>
                <td className="muted">{event.voluntaryRefund}</td>
                <td className="muted">{event.updatedAt}</td>
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
