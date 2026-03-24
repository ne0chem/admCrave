import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RefendSetting() {
  const navigate = useNavigate();
  //для показа скрывания доп инфы
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  const [isOtmenaOpen, setIsOtmenaOpen] = useState(false);
  const toggleOtmena = () => {
    setIsOtmenaOpen(!isOtmenaOpen);
  };
  const [isOplataOpen, setIsOplataOpen] = useState(false);
  const toggleOplata = () => {
    setIsOplataOpen(!isOplataOpen);
  };
  const [checkbox, setCheckbox] = useState(true);
  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked); // устанавливаем состояние в зависимости от checked
  };

  const handleClick = () => {
    navigate("/refund-rules/refind-setting");
  };

  return (
    <div className="RefundRule-container">
      <div className="header__button">
        <button className="button__dop">Правила возврата</button>
        <button onClick={handleClick} className="button__dop ">
          Настройки
        </button>
      </div>
      <div className="RefundRule__header">
        <p className="title">Варианты возврата электронных билетов</p>
        <p className="text">
          В том случае, когда сеанс отменяется, заменяется или переносится,
          покупатель может обратиться через сервис Автовозврата за возвратом
          электронного билета. Укажите настройки "по умолчанию", которые будут
          использоваться в правилах возврата при отмене, замене и переносе
        </p>
        <p className="text">
          На закладке Правила возврата вы сможете задать индивидуальные условия
          возврата для каждого сеанса.
        </p>
      </div>
      <div className="otmena__container">
        <div className="otmena">
          <button onClick={toggleOplata} className="button__hover button__mb2">
            При отмене
          </button>
          {!isOplataOpen && (
            <div className="otmena__container">
              <p className="text__bold">
                Предлагать покупателю варианты возврата
              </p>
              <p className="text">
                Укажите, какие варианты будут доступны покупателю в сервисе
                Автовозврата в случае отмены:
              </p>
              <p className="text__bold">Период возврата</p>
              <p className="text">
                При отмене сеанса необходимо указать период, в течение которого
                покупатель может вернуть билеты через сервис Автовозврата
              </p>
              <div className="chexbox-container">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={checkbox}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <p className="text">Возврат денег:</p>
              </div>
              {!checkbox && (
                <div className="dop__checbox">
                  <p className="text__bold">
                    Сообщение покупателю при запрете возврата
                  </p>
                  <p className="text">
                    В случае когда покупателю не доступен ни один из вариантов
                    возврата, задайте текст, который он увидит, когда
                    воспользуется сервисом автовозврата.
                  </p>
                  <textarea
                    className="input dop_input"
                    placeholder="Уважаемый покупатель! Возврат на данный сеанс организатор производит самостоятельно. Просьба обращаться к организатору."
                  />
                </div>
              )}
              <div className="info__container">
                <div className="left__top">
                  <p className="text__bold">Начинать возврат</p>
                  <div className="top__right">
                    <div className="right__container">
                      <p className="text">Дата отмены</p>
                      <input type="text" className="input input__dop" />
                      <p className="text">дней</p>
                    </div>
                    <p className="text">
                      Укажите день начала возврата. Задается как количество дней
                      после дня отмены.
                    </p>
                    <p className="text">
                      Например, значение 1 будет значить "на следующий день".
                    </p>
                  </div>
                </div>
                <div className="left__top">
                  <p className="text__bold">Завершать возврат</p>
                  <div className="top__right">
                    <div className="right__container">
                      <select className="filter-select input__dop">
                        <option>Дата отмены</option>
                        <option>Дата сеанса</option>
                      </select>
                      <input type="text" className="input input__dop" />
                      <p className="text">дней</p>
                    </div>
                    <p className="text">
                      Укажите количество дней, в течение которого может
                      происходить возврат.
                    </p>
                    <p className="text">
                      Например, значение 10 будет значить, что возврат будет
                      возможен в течение десяти дней с указанной даты..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="otmena">
          <button onClick={toggleShow} className="button__hover button__mb2">
            При замене
          </button>
          {!isShow && (
            <div className="otmena__container">
              <p className="text__bold">
                Предлагать покупателю варианты возврата
              </p>
              <p className="text">
                Укажите, какие варианты будут доступны покупателю в сервисе
                Автовозврата в случае отмены:
              </p>
              <p className="text__bold">Период возврата</p>
              <p className="text">
                При отмене сеанса необходимо указать период, в течение которого
                покупатель может вернуть билеты через сервис Автовозврата
              </p>
              <div className="chexbox-container">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={checkbox}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <p className="text">Возврат денег:</p>
              </div>
              {!checkbox && (
                <div className="dop__checbox">
                  <p className="text__bold">
                    Сообщение покупателю при запрете возврата
                  </p>
                  <p className="text">
                    В случае когда покупателю не доступен ни один из вариантов
                    возврата, задайте текст, который он увидит, когда
                    воспользуется сервисом автовозврата.
                  </p>
                  <textarea
                    className="input dop_input"
                    placeholder="Уважаемый покупатель! Возврат на данный сеанс организатор производит самостоятельно. Просьба обращаться к организатору."
                  />
                </div>
              )}
              <div className="info__container">
                <div className="left__top">
                  <p className="text__bold">Начинать возврат</p>
                  <div className="top__right">
                    <div className="right__container">
                      <p className="text">Дата замены</p>
                      <input type="text" className="input input__dop" />
                      <p className="text">дней</p>
                    </div>
                    <p className="text">
                      Укажите день начала возврата. Задается как количество дней
                      после дня отмены.
                    </p>
                    <p className="text">
                      Например, значение 1 будет значить "на следующий день".
                    </p>
                  </div>
                </div>
                <div className="left__top">
                  <p className="text__bold">Завершать возврат</p>
                  <div className="top__right">
                    <div className="right__container">
                      <select className="filter-select input__dop">
                        <option>Дата замены</option>
                        <option>Дата сеанса</option>
                      </select>
                      <input type="text" className="input input__dop" />
                      <p className="text">дней</p>
                    </div>
                    <p className="text">
                      Укажите количество дней, в течение которого может
                      происходить возврат.
                    </p>
                    <p className="text">
                      Например, значение 10 будет значить, что возврат будет
                      возможен в течение десяти дней с указанной даты..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="otmena">
          <button onClick={toggleOtmena} className="button__hover">
            При переносе
          </button>
          {!isOtmenaOpen && (
            <div className="otmena__container">
              <p className="text__bold">
                Предлагать покупателю варианты возврата
              </p>
              <p className="text">
                Укажите, какие варианты будут доступны покупателю в сервисе
                Автовозврата в случае отмены:
              </p>
              <p className="text__bold">Период возврата</p>
              <p className="text">
                При переносе сеанса необходимо указать период, в течение
                которого покупатель может вернуть билеты через сервис
                Автовозврата
              </p>
              <div className="chexbox-container">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={checkbox}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <p className="text">Возврат денег:</p>
              </div>
              {!checkbox && (
                <div className="dop__checbox">
                  <p className="text__bold">
                    Сообщение покупателю при запрете возврата
                  </p>
                  <p className="text">
                    В случае когда покупателю не доступен ни один из вариантов
                    возврата, задайте текст, который он увидит, когда
                    воспользуется сервисом автовозврата.
                  </p>
                  <textarea
                    className="input dop_input"
                    placeholder="Уважаемый покупатель! Возврат на данный сеанс организатор производит самостоятельно. Просьба обращаться к организатору."
                  />
                </div>
              )}
              <div className="info__container">
                <div className="left__top">
                  <p className="text__bold">Начинать возврат</p>
                  <div className="top__right">
                    <div className="right__container">
                      <p className="text">Дата переноса</p>
                      <input type="text" className="input input__dop" />
                      <p className="text">дней</p>
                    </div>
                    <p className="text">
                      Укажите день начала возврата. Задается как количество дней
                      после дня отмены.
                    </p>
                    <p className="text">
                      Например, значение 1 будет значить "на следующий день".
                    </p>
                  </div>
                </div>
                <div className="left__top">
                  <p className="text__bold">Завершать возврат</p>
                  <div className="top__right">
                    <div className="right__container">
                      <select className="filter-select input__dop">
                        <option>Дата переноса</option>
                        <option>Прежняя дата сеанса</option>
                        <option>Новая дата сеанса</option>
                      </select>
                      <input type="text" className="input input__dop" />
                      <p className="text">дней</p>
                    </div>
                    <p className="text">
                      Укажите количество дней, в течение которого может
                      происходить возврат.
                    </p>
                    <p className="text">
                      Например, значение 10 будет значить, что возврат будет
                      возможен в течение десяти дней с указанной даты..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <button className="button__dop">Сохранить</button>
    </div>
  );
}
