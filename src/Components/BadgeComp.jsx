import React, { useContext } from "react";
import { Badge, Switch } from "@nextui-org/react";
import { CartIcon } from "./CartIcon";
import { CarritoContext } from "../Context/CarritoContext";

export default function BadgeComp() {
  const [isInvisible, setIsInvisible] = React.useState(false);

  const {listaCompras } = useContext(CarritoContext)

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <Badge
          color="danger"
          content={listaCompras.length}
          isInvisible={isInvisible}
          shape="circle"
        >
          <CartIcon className="text-black hover:text-sky-700" size={30} />
        </Badge>
      </div>
      <Switch
        isSelected={!isInvisible}
        onValueChange={(value) => setIsInvisible(!value)}
      >
      
      </Switch>
    </div>
  );
}
