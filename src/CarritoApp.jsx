import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { ComprasPage } from "./Pages/ComprasPage";
import { CarritoPage } from "./Pages/CarritoPage";
import { ProductosProvider } from "./Context/ProductosProvider";
import { CarritoProvider } from "./Context/CarritoProvider";

const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/comprar" element={<ComprasPage />}></Route>
          <Route path="/carrito" element={<CarritoPage />}></Route>
          <Route path="/*" element={<ComprasPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </CarritoProvider>
    </ProductosProvider>
  );
};

export default CarritoApp;
