import { useContext } from "react";
import { CarritoContext } from "../Context/CarritoContext";

export const CarritoPage = () => {
  const { listaCompras, disminuirCantidad, eliminarCompra, aumentarCantidad } =
    useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  const handleImpresion = () => {
    print();
  };

  return (
    <>
      <div className="flex flex-col w-11/12 m-auto">
        <table className="w-full text-center m-auto mt-4 text-black">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listaCompras.map((item) => (
              <tr key={item.id}>
                <th></th>
                <td>{item.title}</td>
                <td className="">
                  <button
                    className="bg-primary"
                    onClick={() => aumentarCantidad(item.id)}
                  >
                    🔼
                  </button>
                  <button className="bg-transparent disabled">
                    {item.cantidad}
                  </button>
                  <button
                    className="bg-primary"
                    onClick={() => disminuirCantidad(item.id)}
                  >
                    🔽
                  </button>
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="bg-red-600"
                    onClick={() => eliminarCompra(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            <th>TOTAL</th>
            <td></td>
            <td>${calcularTotal()}</td>
            <td></td>
          </tbody>
        </table>

        <button
          onClick={handleImpresion}
          disabled= {listaCompras < 1}
          className="w-full cursor-pointer bg-primary"
        >
          Comprar
        </button>
      </div>
    </>
  );
};
