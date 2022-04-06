import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";

import { Login } from "./pages/Login.jsx";
import { PaginaTarefas } from "./pages/PaginaTarefas.jsx";

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" exact />
        <Route element={<PaginaTarefas />} path="/PaginaTarefas/" />
      </Routes>
    </BrowserRouter>
  );
}
