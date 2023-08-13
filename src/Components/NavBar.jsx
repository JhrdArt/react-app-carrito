import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import BadgeComp from "./BadgeComp";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar className=" bg-transparent backdrop-brightness-75" isBordered>
      <NavbarBrand>
        <NavLink className="text-slate-950 hover:text-sky-700" to="/">
          <p className="font-bold text-inherit">COMPRA+</p>
        </NavLink>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <NavLink className="text-slate-950 hover:text-sky-700" to="/comprar">
            Comprar
          </NavLink>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <NavLink className="text-slate-950  hover:text-sky-700" href="#">
            Login
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavLink to="/carrito">
        <BadgeComp />
      </NavLink>
    </Navbar>
  );
}
