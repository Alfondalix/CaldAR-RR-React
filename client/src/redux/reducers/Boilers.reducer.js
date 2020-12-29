import { ADD_BOILER, DELETE_BOILER, EDIT_BOILER } from '../types/boilerTypes';
import boilers from '../../pages/boilers/Boilers.json';

const boilersReducer = (state = boilers, action) => {
  switch (action.type) {
    case ADD_BOILER: {
      return [...state, action.payload];
    }
    case DELETE_BOILER: {
      return [...state.filter((boiler) => boiler.id !== action.payload)];
    }
    case EDIT_BOILER: {
      return [
        ...state.map((boiler) => {
          if (boiler.id === action.payload.id) {
            boiler = action.payload;
          }
          return boiler;
        }),
      ];
    }
    default: {
      return state;
    }
  }
};

export default boilersReducer;