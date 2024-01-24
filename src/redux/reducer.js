import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  sample: 'hello'
}

export const Reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      sample: action.str
    }
  }
  return state;
}