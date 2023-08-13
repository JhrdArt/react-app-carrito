import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useState } from "react";



export const CardComp = ({ id, descripcion, imagen, precio, titulo, handleAgregar, handleDisminuir, handleQuitar, handleAumentar}) => {
  
  const [agregado, setAgregado] = useState(false);

  const clickAgregar = () => {
    handleAgregar()
    setAgregado(true);
  };

  const clickQuitar = () => {
    handleQuitar()
    setAgregado(false);
  };

  return ( 
    <Card key={id} className="w-2/5 py-4 flex-row ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col justify-between items-start w-80">
        <h4 className="font-bold text-base">{titulo}</h4>
        <h5 className="text-default-500 font-semibold">${precio}</h5>
        <p className="text-tiny capitalize font-bold">{descripcion}</p>
        {agregado ? (
       <button
          className=" w-full hover:bg-red-900 hover:text-white transition-colors duration-700 mt-3"
          type="button"
          onClick={clickQuitar}
        >
          Quitar del carrito
        </button>
      ) : (
        <button
        className=" w-full hover:bg-slate-900 hover:text-white transition-colors duration-700 mt-3 "
        type="button"
        onClick={clickAgregar}
      >
        Agregar al carrito
      </button>
      )}
      </CardHeader>
      <CardBody className="overflow-visible py-2 w-40 object-fill">
        <img className="w-40 m-auto" src={imagen} alt="" />
      </CardBody>

      
    </Card>
  );
}
