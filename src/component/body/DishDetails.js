import { Card, CardBody, CardImg, CardText, CardTitle, Toast, ToastHeader } from 'reactstrap';

const DishDetails = ({ dish }) => {
  return (
    <div>
      <div className="py-3 rounded">
        <Toast>
          <ToastHeader>
            Your Dish Details
          </ToastHeader>
        </Toast>
      </div>
      <Card style={{ textAlign: 'left' }}>
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 200
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {dish.name}
          </CardTitle>
          <CardText>
            {dish.description}
          </CardText>
          <CardText style={{ color: 'green' }}>
            Category: {dish.category}
          </CardText>
          <CardText style={{ color: 'red' }}>
            Price: {dish.price}/=
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetails