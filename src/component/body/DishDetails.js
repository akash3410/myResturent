import { Card, CardBody, CardImg, CardText, CardTitle, Toast, ToastHeader } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = props => {
  return (
    <div>
      <div className="p-2 rounded">
        <Toast>
          <ToastHeader>
            Your Dish Details
          </ToastHeader>
        </Toast>
      </div>
      <Card style={{ textAlign: 'left' }} className="shadow-lg p-3 rounded">
        <CardImg
          alt={props.dish.name}
          className='dishDetailImg'
          src={props.dish.image}
          style={{
            height: 300,
          }}
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5" className='fw-bold'>
            {props.dish.name}
          </CardTitle>
          <CardText>
            {props.dish.description}
          </CardText>
          <CardText style={{ color: 'green' }}>
            Category: {props.dish.category}
          </CardText>
          <CardText style={{ color: 'red' }}>
            Price: {props.dish.price}/=
          </CardText>
          <LoadComments comments={props.comments} />
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetails