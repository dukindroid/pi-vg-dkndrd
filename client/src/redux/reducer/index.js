// Importa las actions types que necesites acá:

import { CREATE_HOUSE, DELETE_HOUSE, GET_ALL_HOUSES, GET_HOUSE } from '../actions'

const initialState = {
  houses: [],
  house: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
    case GET_ALL_HOUSES:
      console.log('Tenemos ' + state.houses.length + ' casas en el store.')
      if (state.houses.length === 0) {
        return {
          ...state,
          houses: action.payload
        }
      }
      return state
    case GET_HOUSE:
      return {
        ...state,
        house: action.payload
      }
    case CREATE_HOUSE:
      return {
        ...state,
        houses: [...state.houses, action.payload]
      }
    case DELETE_HOUSE:
      return {
        ...state,
        houses: state.houses.filter(house => house.id !== action.payload)
      }
    default: return state
  };
}

export default rootReducer
