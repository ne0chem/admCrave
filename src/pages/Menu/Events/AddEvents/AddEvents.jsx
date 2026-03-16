import React from "react";
import "./AddEvents.css";

export default function AddEvents() {
  return (
    <div className="event-form-container">
      <div className="event-form-header">
        <a href="#" className="back-link">
          Перейти к списку мероприятий
        </a>
      </div>

      <div className="event-form">
        {/* НАЗВАНИЕ */}
        <div className="form-row">
          <label className="form-label">
            Название: <span className="required-star">*</span>
          </label>
          <div className="form-field">
            <input type="text" className="form-input" />
          </div>
        </div>

        {/* актуально */}
        <div className="form-row">
          <label className="form-label"></label>
          <div className="form-field">
            <label className="checkbox-label">
              <input type="checkbox" className="form-checkbox" /> актуально
            </label>
          </div>
        </div>

        {/* ВОЗРАСТНАЯ КАТЕГОРИЯ */}
        <div className="form-row">
          <label className="form-label">Возрастная категория:</label>
          <div className="form-field">
            <div className="age-categories">
              <label className="age-category">
                <input type="checkbox" /> 0+
              </label>
              <label className="age-category">
                <input type="checkbox" /> 6+
              </label>
              <label className="age-category">
                <input type="checkbox" /> 12+
              </label>
              <label className="age-category">
                <input type="checkbox" /> 16+
              </label>
              <label className="age-category">
                <input type="checkbox" /> 18+
              </label>
            </div>
          </div>
        </div>

        {/* абонемент */}
        <div className="form-row">
          <label className="form-label"></label>
          <div className="form-field">
            <label className="checkbox-label">
              <input type="checkbox" className="form-checkbox" /> абонемент
            </label>
          </div>
        </div>

        {/* ОРГАНИЗАТОР МЕРОПРИЯТИЯ */}
        <div className="form-row">
          <label className="form-label">Организатор :</label>
          <div className="form-field">
            <div className="select-wrapper">
              <select className="form-select">
                <option>ООО "Крейв Москвоу"</option>
              </select>
            </div>
          </div>
        </div>

        {/* ПОСТАВЩИК ПО УМОЛЧАНИЮ */}
        <div className="form-row">
          <label className="form-label">Поставщик по умолчанию :</label>
          <div className="form-field">
            <div className="select-wrapper">
              <select className="form-select">
                <option>ООО "Крейв Москвоу"</option>
              </select>
            </div>
          </div>
        </div>

        {/* Пояснение */}
        <div className="form-row">
          <label className="form-label"></label>
          <div className="form-field">
            <p className="form-hint">
              Поставщик по накладной должен показываться как Поставщик в чеках
              при агентских продажах
            </p>
          </div>
        </div>

        {/* Применить особые условия НДС */}
        <div className="form-row">
          <label className="form-label"></label>
          <div className="form-field">
            <label className="checkbox-label">
              <input type="checkbox" className="form-checkbox" /> Применить
              особые условия НДС
            </label>
          </div>
        </div>

        {/* СТАВКА НДС */}
        <div className="form-row">
          <label className="form-label">Ставка НДС:</label>
          <div className="form-field">
            <div className="select-wrapper select-small">
              <select className="form-select">
                <option>Без НДС</option>
                <option>НДС оранизатора</option>
                <option>22%</option>
                <option>20%</option>
                <option>7%</option>
                <option>5%</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button className="button">Сохранить</button>
    </div>
  );
}
