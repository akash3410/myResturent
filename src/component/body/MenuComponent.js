import React, { useState } from "react"
import MenuItem from "./MenuItem"
import DISHES from "../../data/data"
import { Toast, ToastHeader } from "reactstrap";
import DishDetails from "./DishDetails";
import FakeItem from "./FakeItem";

const MenuComponent = () => {
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
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="py-3 rounded">
              <Toast>
                <ToastHeader>
                  Our menu Card
                </ToastHeader>
              </Toast>
            </div>
            {menu}
          </div>
          <div className="col-md-7">
            {dishDetail}
          </div>
        </div>
      </div>
    </div>
  )
}
export default MenuComponent