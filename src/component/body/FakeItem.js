import { Card, CardBody, CardImg, CardText, CardTitle, Toast, ToastHeader } from 'reactstrap';

const FakeItem = () => {
  return (
    <div>
      <div className="py-2 rounded">
        <Toast>
          <ToastHeader>
            Click on your DISH to See Your Dish details..
          </ToastHeader>
        </Toast>
      </div>
      <Card style={{ textAlign: 'left' }} >
        <CardImg
          alt="Your DISH"
          src="/"
          style={{
            height: 200
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Name...........
          </CardTitle>
          <CardText>
            Description.....
          </CardText>
          <CardText style={{ color: 'green' }}>
            Catagory...........
          </CardText>
          <CardText style={{ color: 'red' }}>
            Price...................
          </CardText>
          <div className="fst-italic">
            <h4 className="fw-bold fst-italic">Comments</h4>
            <hr />
            <h5 className="fw-bold">Commented By...</h5>
            <p>Comment.....</p>
            <p>Ratting.....</p>
            <p>Date.....</p>
            <hr />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default FakeItem