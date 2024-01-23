import React, { useState } from "react"
import MenuItem from "./MenuItem"
import DISHES from "../../data/data"
import { Toast, ToastHeader } from "reactstrap";
import DishDetails from "./DishDetails";
import FakeItem from "./FakeItem";

const MenuComponent = () => {
  document.title = "Menu"
  const [dishes] = useState(DISHES);
  const [selectedDish, SetSelectedDish] = useState(null);
  const onSelectedDish = (dish) => {
    SetSelectedDish(dish);
  }
  const menu = dishes.map((dish) => {
    return <MenuItem dish={dish} key={dish.id} onSelectedDish={onSelectedDish} />
  })
  const dishDetail = selectedDish ? <DishDetails dish={selectedDish} /> : <FakeItem />;
  return (
    <div className="ps-5 dishrightPadding menu-margin">
      <div className="row">
        <div className="col-md-4">
          <div className="py-2 rounded">
            <Toast>
              <ToastHeader>
                Our menu Card
              </ToastHeader>
            </Toast>
          </div>
          {menu}
        </div>
        <div className="col-md-8">
          {dishDetail}
        </div>
      </div>
    </div>
  )
}
export default MenuComponent