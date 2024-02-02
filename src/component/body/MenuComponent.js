import React, { Component } from "react"
import MenuItem from "./MenuItem"
import { Button, Modal, ModalFooter } from "reactstrap"
import DishDetails from "./DishDetails";
import { connect } from "react-redux";
import { addComment } from "../../redux/actionCreators";

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    sample: state.sample
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  }
}

class MenuComponent extends Component {
  state = {
    selectedDish: null,
    modalOpen: false
  }

  onSelectedDish = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: true
    })
  }

  toogleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  render() {
    document.title = "Menu"
    const menu = this.props.dishes.map((dish) => {
      return <MenuItem dish={dish} key={dish.id} onSelectedDish={() => this.onSelectedDish(dish)} />
    })

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.props.comments.filter(comment => {
        return comment.dishId === this.state.selectedDish.id;
      })
      dishDetail = <DishDetails dish={this.state.selectedDish} comments={comments} addComment={this.props.addComment} />
    }

    return (
      <div className="container" >
        <div className="row row-content">
          {menu}
        </div>
        <Modal isOpen={this.state.modalOpen}>
          {dishDetail}
          <ModalFooter>
            <Button color="secondary" onClick={this.toogleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);