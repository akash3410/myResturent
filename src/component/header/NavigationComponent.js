import { Navbar, NavbarBrand } from "reactstrap";
const NavigationComponent = () => {
  return (
    <div>
      <Navbar color="secondary" dark className="p-1">
        <NavbarBrand href="/">
          PETUK-RESTORA
        </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default NavigationComponent;