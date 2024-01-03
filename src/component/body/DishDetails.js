import { Card, CardBody, CardImg, CardText, CardTitle, Toast, ToastHeader } from 'reactstrap';
import LoadComments from './LoadComments';

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
            height: 235
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5" className='fw-bold'>
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
          <LoadComments comments={dish.comments} />
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetails