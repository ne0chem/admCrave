import React from "react";
import "./AddEvents.css";

export default function AddEvents() {
  return (
    <div className="return">
      <div className="event-form-header">
        <button className="back-link">Перейти к списку мероприятий</button>
      </div>

      <div className="event-form">
        <div className="form-row">
          <label className="form-label">
            Название: <span className="required-star">*</span>
          </label>
          <div className="form-field">
            <input type="text" className="input" />
          </div>
        </div>

        <div className="form-row">
          <label className="form-label"></label>
          <div className="form-field">
            <label className="checkbox-item">
              <input type="checkbox" className="form-checkbox" /> актуально
            </label>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label">Возрастная категория:</label>
          <div className="form-field">
            <div className="age-categories">
              <label className="checkbox-item">
                <input type="checkbox" /> 0+
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> 6+
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> 12+
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> 16+
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> 18+
              </label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label"></label>
          <div className="form-field">
            <label className="checkbox-item">
              <input type="checkbox" className="form-checkbox" /> абонемент
            </label>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label">Организатор :</label>
          <div className="form-field">
            <div className="select-wrapper">
              <select className="input">
                <option>ООО "Крейв Москвоу"</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label">Поставщик по умолчанию :</label>
          <div className="form-field">
            <div className="select-wrapper">
              <select className="input">
                <option>ООО "Крейв Москвоу"</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label"></label>
          <div className="form-field">
            <p className="text">
              Поставщик по накладной должен показываться как Поставщик в чеках
              при агентских продажах
            </p>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label"></label>
          <div className="form-field">
            <label className="checkbox-item">
              <input type="checkbox" className="form-checkbox" /> Применить
              особые условия НДС
            </label>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label">Ставка НДС:</label>
          <div className="form-field">
            <div className="select-wrapper select-small">
              <select className="input">
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
      <button className="button__dop">Сохранить</button>
    </div>
  );
}
