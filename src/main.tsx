import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReducerContextProvider } from "./use-context/reducer-context";
import Card from "./pages/Card";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./pages/product-detail";
import MainLayout from "./layouts/main-layout";
import Login from "./pages/login";
import Product from "./pages/Product";
import Categories from "./pages/categories/categories";
import CategoryId from "./pages/categories/categories-id";
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ReducerContextProvider>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<App />} />
            <Route path={"/product"} element={<Product />} />
            <Route path={"/card"} element={<Card />} />
            <Route path={"product/:id"} element={<ProductDetail />} />
            <Route path={"/categories"} element={<Categories />} />
            <Route path={"/categories/:slug"} element={<CategoryId />} />
          </Route>
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </ReducerContextProvider>
    </BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </StrictMode>
);
