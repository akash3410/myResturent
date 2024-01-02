import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap"
const MenuItem = ({ dish }) => {
  return (
    <div className="col-md-4">
      <Card inverse className="mb-1" color="dark">
        <CardImg alt={dish.name} src={dish.image} style={{ height: 270, opacity: 0.5 }} width="100%" />
        <CardImgOverlay>
          <CardTitle tag="h5" className="fw-bold"> {dish.name} </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default MenuItem