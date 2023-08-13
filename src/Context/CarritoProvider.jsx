import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const estadoInicial = [];

export const CarritoProvider = ({ children }) => {
  const comprasReducer = (estado = estadoInicial, action = {}) => {
    switch (action.type) {
      case "[COMPRA] Agregar compra":
        return [...estado, action.payload];

      case "[COMPRA] Aumentar compra":
        return estado.map((item) => {
          const cant = item.cantidad + 1;

          if (item.id === action.payload) {
            return { ...item, cantidad: cant };
          } else {
            return item
          }
        });

      case "[COMPRA] Disminuir Compra":
        return estado.map((item) => {
          const cant = item.cantidad - 1;

          if (item.id === action.payload && item.cantidad > 1) {
            return { ...item, cantidad: cant };
          } else {
            return item;
          }
        });

      case "[COMPRA] Eliminar Compra":
        return estado.filter((compra) => compra.id !== action.payload);
      default:
        return estado;
    }
  };
  const [listaCompras, dispatch] = useReducer(comprasReducer, estadoInicial);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;

    const action = {
      type: "[COMPRA] Agregar compra",
      payload: compra,
    };

    dispatch(action);
  };

  const eliminarCompra = (id) => {
    const action = {
      type: "[COMPRA] Eliminar Compra",
      payload: id,
    };

    dispatch(action);
  };

  const aumentarCantidad = (id) => {
    const action = {
      type: "[COMPRA] Aumentar compra",
      payload: id,
    };

    dispatch(action);
  };

  const disminuirCantidad = (id) => {
    const action = {
      type: "[COMPRA] Disminuir Compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        aumentarCantidad,
        disminuirCantidad,
        agregarCompra,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
