import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap"
const MenuItem = ({ dish, onSelectedDish }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <Card inverse className="mb-2" style={{ cursor: "pointer" }} color="dark" onClick={() => onSelectedDish(dish)}>
        <CardImg alt={dish.name} src={dish.image} style={{ height: 190, opacity: 0.3 }} width="100%" />
        <CardImgOverlay>
          <CardTitle tag="h3" className="fw-bold">
            {dish.name}
          </CardTitle>
          <CardTitle tag="h5">
            Catagory: {dish.category}
          </CardTitle>
          <CardTitle tag="h6" style={{ textAlign: "right", marginTop: 70 }}>
            DISH Code: {dish.category.substr(0, 3)}-{dish.id + 1001}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default MenuItem