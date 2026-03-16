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

// заказы
import OrdersPage from "./pages/Orders/OrdersPage/OrdersPage";
import ConsumerReturns from "./pages/Orders/ConsumerReturns/ConsumerReturns";
import AgentReturns from "./pages/Orders/AgentReturns/AgentReturns";
//меню
import Events from "./pages/Menu/Events/Events";
import AddEvents from "./pages/Menu/Events/AddEvents/AddEvents";
//seans
import Seans from "./pages/Seans/Seans";
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
            {/* Отчеты */}
            {/* <Route path="/sales" element={<SalesPage />} />
            <Route path="/profit" element={<ProfitPage />} />
            <Route path="/popular" element={<PopularPage />} /> */}

            {/* Редирект на заказы по умолчанию */}
            <Route path="/" element={<Navigate to="/orders" replace />} />
            <Route path="/events/add" element={<AddEvents />} />
            <Route path="/seans" element={<Seans />} />
          </Routes>
        </ContentArea>
      </div>
    </Router>
  );
}

export default App;
