import React from "react"
import './App.css';
import 'dayjs/locale/zh-cn';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./App1"
import IndexHome from "./IndexHome"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}></Route>
          <Route path="home" element={<IndexHome/>}></Route>
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
