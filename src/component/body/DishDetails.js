import { Card, CardBody, CardImg, CardText, CardTitle, Toast, ToastHeader } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = ({ dish }) => {
  return (
    <div>
      <div className="py-2 rounded">
        <Toast>
          <ToastHeader>
            Your Dish Details
          </ToastHeader>
        </Toast>
      </div>
      <Card style={{ textAlign: 'left', padding: 10 }} className="shadow-lg p-3 mb-5 rounded">
        <CardImg
          alt={dish.name}
          className='dishDetailImg'
          src={dish.image}
          style={{
            height: 300,
          }}
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