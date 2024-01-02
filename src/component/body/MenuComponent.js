import React, { useState } from "react"
import MenuItem from "./MenuItem"
import DISHES from "../../data/data"
import { Toast, ToastHeader } from "reactstrap"

const MenuComponent = () => {
  const [dishes] = useState(DISHES);
  const menu = dishes.map((dish) => {
    return <MenuItem dish={dish} key={dish.id} />
  })
  return (
    <div>
      <div className="container">
        <div className="py-3 rounded">
          <Toast>
            <ToastHeader>
              Our menu Card
            </ToastHeader>
          </Toast>
        </div>
        <div className="row">
          {menu}
        </div>
      </div>
    </div>
  )
}

export default MenuComponent