import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 다송's 컴포넌트
import Logindasongyu from "./pages/dasongyu/Login/Login";
import Maindasongyu from "./pages/dasongyu/Main/Main";

// 근홍's 컴포넌트
import LogingeunhongLim from "./pages/geunhongLim/Login/Login";
import MaingeunhongLim from "./pages/geunhongLim/Main/Main";

// 정민's 컴포넌트
import Loginjeongminlee from "./pages/jeongminlee/Login/Login";
import Mainjeongminlee from "./pages/jeongminlee/Main/Main";

// 지호's 컴포넌트
import Loginjihokwon from "./pages/jihokwon/Login/Login";
import Listjihokwon from "./pages/jihokwon/List/List";
import Detailjihokwon from "./pages/jihokwon/Detail/Detail";

// 민경's 컴포넌트
import Loginminkyoungkim from "./pages/minkyoungkim/Login/Login";
import Mainminkyoungkim from "./pages/minkyoungkim/Main/Main";

// 송이's 컴포넌트
import Loginsongyipark from "./pages/songyipark/Login/Login";
import Mainsongyipark from "./pages/songyipark/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-dasongyu" element={<Logindasongyu />} />
        <Route path="/main-dasongyu" element={<Maindasongyu />} />
        <Route path="/login-geunhongLim" element={<LogingeunhongLim />} />
        <Route path="/main-geunhongLim" element={<MaingeunhongLim />} />
        <Route path="/login-jeongminlee" element={<Loginjeongminlee />} />
        <Route path="/main-jeongminlee" element={<Mainjeongminlee />} />
        {/* 지호's router */}
        <Route path="/login-minkyoungkim" element={<Loginminkyoungkim />} />
        <Route path="/main-minkyoungkim" element={<Mainminkyoungkim />} />ㅜ
        <Route path="/login-songyipark" element={<Loginsongyipark />} />
        <Route path="/main-songyipark" element={<Mainsongyipark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
