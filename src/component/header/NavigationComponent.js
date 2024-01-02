import { Navbar, NavbarBrand } from "reactstrap";
const NavigationComponent = () => {
  return (
    <div>
      <Navbar color="secondary" dark>
        <NavbarBrand href="/">
          Reactstrap
        </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default NavigationComponent;