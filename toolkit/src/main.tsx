import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import DashMain from './pages/DashMain';
import Page404 from './pages/Page404';
import Dashboard from './pages/sub-pages/Dashboard/Dashboard.tsx';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Lang from './pages/sub-pages/Lang/Lang.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<DashMain />}>
          <Route index element={<Dashboard />} />
          <Route path="/main/lang/:langString" element={<Lang />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    </Provider>
)
