import { useContext } from "react";
import { ProductosContext } from "../Context/ProductosContext";
import { CardComp } from "../Components/CardComp";
import { CarritoContext } from "../Context/CarritoContext";

export const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);

  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };

  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <h1 className="text-slate-900 text-center text-4xl">
        Compra con los mejores
      </h1>

      <section className="w-full flex flex-wrap gap-4 justify-center p-5">
        {productos.map((producto) => {
          return (
            <CardComp
              key={producto.id}
              imagen={producto.image}
              titulo={producto.title}
              descripcion={producto.description}
              precio={producto.price}
              handleAgregar={() => handleAgregar(producto)}
              handleQuitar={() => handleQuitar(producto.id)}
            />
          );
        })}
      </section>
    </>
  );
};
