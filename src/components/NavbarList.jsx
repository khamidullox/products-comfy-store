let listNav = [
  { name: "Home", link: "/" },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Products",
    link: "/prodacts",
  },
  {
    name: "Cart",
    link: "/cart",
  },
  false && [
    {
      name: "Chekout",
      link: "/chekout",
    },
    {
      name: "Oredes",
      link: "/orders",
    },
  ],
];
import { Link } from "react-router-dom";
function NavbarList() {
  return (
    <>
      {listNav.flat().map((nav, id) => {
        return (
          <li key={id} className="">
            <Link to={nav.link}>{nav.name}</Link>
          </li>
        );
      })}
    </>
  );
}

export default NavbarList;
