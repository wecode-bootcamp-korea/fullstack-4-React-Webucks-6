import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

// 다송's 컴포넌트

import Logindasongyu from './pages/dasongyu/Login/Login';
import Listdasongyu from './pages/dasongyu/List/List';
import Detaildasongyu from './pages/dasongyu/Detail/Detail';


// 근홍's 컴포넌트
import LogingeunhongLim from "./pages/geunhongLim/pages/Login/Login";
import MaingeunhongLim from "./pages/geunhongLim/pages/Main/Main";
import AsidegeunhongLim from "./pages/geunhongLim/pages/Main/Aside/Aside";

// 정민's 컴포넌트
import Loginjeongminlee from './pages/jeongminlee/Login/Login';
import Detailjeongminlee from './pages/jeongminlee/Detail/Detail';
import Listjeongminlee from './pages/jeongminlee/List/List';
import Mainjeongminlee from './pages/jeongminlee/Main/Main';

// 지호's 컴포넌트
import Loginjihokwon from "./pages/jihokwon/Login/Login";
import Listjihokwon from "./pages/jihokwon/List/List";
import Detailjihokwon from "./pages/jihokwon/Detail/Detail";

// 민경's 컴포넌트


import Loginminkyoungkim from './pages/minkyoungkim/pages/Login/Login';
import Mainminkyoungkim from './pages/minkyoungkim/pages/Main/Main';
import Detailminkyoungkim from './pages/minkyoungkim/pages/Main/Detail/Detail';


// 송이's 컴포넌트
import Loginsongyipark from './pages/songyipark/Login/Login';
import Listsongyipark from './pages/songyipark/List/List';
import Detailsongyipark from './pages/songyipark/Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login-dasongyu' element={<Logindasongyu />} />
        <Route path='/Detail-dasongyu' element={<Detaildasongyu />} />
        <Route path='/List-dasongyu' element={<Listdasongyu />} />

        <Route path="/login-geunhongLim" element={<LogingeunhongLim />} />
        <Route path="/main-geunhongLim" element={<MaingeunhongLim />} />
        <Route path="/aside-geunhongLim" element={<AsidegeunhongLim />} />

        <Route path='/login-jeongminlee' element={<Loginjeongminlee />} />
        <Route path='/detail-jeongminlee' element={<Detailjeongminlee/>}/>
        <Route path='/list-jeongminlee' element={<Listjeongminlee/>}/>
        <Route path='/main-jeongminlee' element={<Mainjeongminlee />} />

        <Route path="/login-jihokwon" element={<Loginjihokwon />} />
        <Route path="/list-jihokwon" element={<Listjihokwon />} />
        <Route path="/detail-jihokwon" element={<Detailjihokwon />} />

        <Route path='/login-minkyoungkim' element={<Loginminkyoungkim />} />
        <Route path='/main-minkyoungkim' element={<Mainminkyoungkim />} />
        <Route path='/detail-minkyoungkim' element={<Detailminkyoungkim />} />
        

        <Route path='/login-songyipark' element={<Loginsongyipark />} />
        <Route path='/list-songyipark' element={<Listsongyipark />} />
        <Route path='/detail-songyipark' element={<Detailsongyipark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
