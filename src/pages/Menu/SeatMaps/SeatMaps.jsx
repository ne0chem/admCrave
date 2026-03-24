import React from "react";
import { useNavigate } from "react-router-dom";
//Распоясовки

//сделать логику открытия модалки
//добавить в массив иконку ексель
//сделать логику для скачивания и отображаения инфы в екселе
//добавить логику при клике на список что бы была возможность переноса в неактуальное
export default function SeatMaps() {
  const events = [
    {
      name: "Crave Airlines",
      category: "Airlines",
      location: "Театр Crave",
      plice: "120",
      price: "160000",
    },
    {
      name: "Crave Airlines Премьера",
      category: "Airlines",
      location: "Театр Crave",
      plice: "120",
      price: "160000",
    },
    {
      name: "Crave Airlines Премьера",
      category: "Airlines",
      location: "Театр Crave",
      plice: "120",
      price: "160000",
    },
  ];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events/add");
  };
  return (
    <div className="return">
      <div className="card-header">
        <h1 className="title ">Распоясовки</h1>
        <button className="button__dop button-create" onClick={handleClick}>
          Создать распоясовку
        </button>
      </div>
      <div className="search">
        <h2 className="title">Поиск</h2>
        <div className="search-container">
          <input type="text" className="input" />
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
              <th>Распоясовка</th>
              <th>Схема зала</th>
              <th>Место проведения</th>
              <th>Кол-во мест</th>
              <th>Стоимость</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>
                  <input className="checkbox__item" type="checkbox" />
                </td>
                {/* тут добавить файл эксель */}
                <td className="event-name">{event.name}</td>
                <td className="muted">{event.category}</td>
                <td className="muted">{event.location}</td>
                <td className="muted">{event.plice}</td>
                <td className="muted">{event.price}</td>
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
}
