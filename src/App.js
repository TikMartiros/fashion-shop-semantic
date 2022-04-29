import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import LoginPage from "./components/login/LoginPage";
import Products from "./components/products/Products";
import DataTable from "./components/dataTable/DataTable";

function App(slides) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={ <Products/> } />
          <Route path="/login" element={ <LoginPage />} />
          <Route path="/dashboard" element={ <Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
