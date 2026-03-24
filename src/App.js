import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import ContentArea from "./components/ContentArea/ContentArea";

//главная страница
import Main from "./pages/Main/Main";
// заказы
import OrdersPage from "./pages/Orders/OrdersPage/OrdersPage";
import ConsumerReturns from "./pages/Orders/ConsumerReturns/ConsumerReturns";
import AgentReturns from "./pages/Orders/AgentReturns/AgentReturns";
//меню
import Events from "./pages/Menu/Events/Events"; //мероприятия
import AddEvents from "./pages/Menu/Events/AddEvents/AddEvents"; //добавление мероприятия
import SeatMaps from "./pages/Menu/SeatMaps/SeatMaps"; //Распоясовки
import QuotaDistribution from "./pages/Menu/QuotaDistribution/QuotaDistribution"; //Распределение квот
import AgentInvoices from "./pages/Menu/AgentInvoices/AgentInvoices"; //Сводные накладные на выдачу агентам
import GroupRevaluation from "./pages/Menu/GroupRevaluation/GroupRevaluation"; //Групповая переоценка
import PromoCodes from "./pages/Menu/PromoCodes/PromoCodes"; //Промокоды
import PromoCodeGenerator from "./pages/Menu/PromoCodeGenerator/PromoCodeGenerator"; //Генератор промокодов
import QuantityDiscounts from "./pages/Menu/QuantityDiscounts/QuantityDiscounts"; //Скидки от количества билетов
import Widgets from "./pages/Menu/Widgets/Widgets"; //Виджеты
import ClientList from "./pages/Menu/ClientList/ClientList"; //Список клиентов
import NewsletterSubscriptions from "./pages/Menu/NewsletterSubscriptions/NewsletterSubscriptions"; //Подписки на рассылку
import RelatedProducts from "./pages/Menu/RelatedProducts/RelatedProducts"; //Сопутствующие товары
import RelatedProductsAndServices from "./pages/Menu/RelatedProductsAndServices/RelatedProductsAndServices"; //Сопутствующие товары и услуги
import RefundRules from "./pages/Menu/RefundRules/RefundRules"; //правила возврата электронных билетов
import RoomConfig from "./pages/Menu/RoomConfig/RoomConfig"; //Конфигурация кабинета
import ReportDelivery from "./pages/Menu/ReportDelivery/ReportDelivery"; //Рассылка отчётов
import Seans from "./pages/Menu/Seans/Seans"; //сеанс
import RefendSetting from "./pages/Menu/RefundRules/RefendSetting/RefendSetting"; //Настройки возврата билетов
//seans
import Seanses from "./pages/Seanses/Seans";
function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("orders-list");

  return (
    <Router>
      <div className="app">
        <LeftMenu activeItem={activeMenuItem} onMenuClick={setActiveMenuItem} />
        <ContentArea>
          <Routes>
            {/* Заказы */}
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/returns" element={<ConsumerReturns />} />
            <Route path="/refund-requests" element={<AgentReturns />} />

            {/* Меню */}
            <Route path="/events" element={<Events />} />
            <Route path="/menu-seans" element={<Seans />} />
            <Route path="/seat-maps" element={<SeatMaps />} />
            <Route path="/quota-distribution" element={<QuotaDistribution />} />
            <Route path="/agent-invoices" element={<AgentInvoices />} />
            <Route path="/group-revaluation" element={<GroupRevaluation />} />
            <Route path="/promo-codes" element={<PromoCodes />} />
            <Route
              path="/promo-code-generator"
              element={<PromoCodeGenerator />}
            />
            <Route path="/discounts" element={<QuantityDiscounts />} />
            <Route path="/widgets" element={<Widgets />} />
            <Route path="/client-list" element={<ClientList />} />
            <Route path="/related-products" element={<RelatedProducts />} />
            <Route
              path="/newsletter-subscriptions"
              element={<NewsletterSubscriptions />}
            />
            <Route
              path="/related-products-and-services"
              element={<RelatedProductsAndServices />}
            />
            <Route path="/refund-rules" element={<RefundRules />} />
            <Route path="/room-config" element={<RoomConfig />} />
            <Route path="/report-delivery" element={<ReportDelivery />} />
            {/* Отчеты */}
            {/* <Route path="/sales" element={<SalesPage />} />
            <Route path="/profit" element={<ProfitPage />} />
            <Route path="/popular" element={<PopularPage />} /> */}

            {/* Редирект на заказы по умолчанию */}
            <Route path="/" element={<Main to="/" replace />} />
            <Route path="/events/add" element={<AddEvents />} />
            <Route path="/seans" element={<Seanses />} />
            <Route
              path="/refund-rules/refind-setting"
              element={<RefendSetting />}
            />
          </Routes>
        </ContentArea>
      </div>
    </Router>
  );
}

export default App;
