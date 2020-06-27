import Immutable from 'immutable'
import * as ActionType from 'actions/orgs'

export const initialState = Immutable.fromJS({
  isLoading: false,
  id: ''
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_ORGS:
      return state.set('isLoading', true)

    case ActionType.GET_ORGS_SUCCESS:
      return state.merge(
        Object.assign({}, action.payload, {
          isLoading: false,
          id: action.id
        })
      )

    default:
      return state
  }
}
