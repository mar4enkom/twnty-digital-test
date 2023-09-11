import { SELECT_MODULE, DECREMENT_QUANTITY, INCREMENT_QUANTITY, CheckoutActions, CLEAR_SELECTED_MODULES } from './checkoutActions';
import { SolarModule } from '../../../app/types/types';
import { RootState } from '../../../app/redux/rootReducer';

interface SelectedModule extends SolarModule {
  selectedQuantity: number;
};
export type CheckoutState = Record<string, SelectedModule>;

export const checkoutReducer = (
  state: CheckoutState = {},
  action: CheckoutActions,
  root: RootState
) => {
  switch (action.type) {
    case SELECT_MODULE: {
      const selectedModule = action.payload;
      const { name, ...rest } = selectedModule;

      const selectedQuantity = name in state ? state[name].selectedQuantity + 1 : 1;
      if(rest.quantity > 0 && selectedQuantity <= rest.quantity) {
        return {
          ...state,
          [name]: {
            ...rest,
            selectedQuantity,
          }
        };
      }
      return state;
    }
    case DECREMENT_QUANTITY: {
      const { name } = action.payload;
      const moduleToUpdate = state[name];
      if(moduleToUpdate.selectedQuantity > 1) { 
        return {
          ...state,
          [name]: {
            ...moduleToUpdate,
            selectedQuantity: moduleToUpdate.selectedQuantity - 1
          }
        }
      } else if(moduleToUpdate.selectedQuantity === 1) {
        const stateCopy = {...state};
        delete stateCopy[name];
        return stateCopy;
      }

      return state;
    }
    case INCREMENT_QUANTITY: {
      const { name } = action.payload;
      const moduleToUpdate = state[name];
      if(moduleToUpdate.selectedQuantity < moduleToUpdate.quantity) { 
        return {
          ...state,
          [name]: {
            ...moduleToUpdate,
            selectedQuantity: moduleToUpdate.selectedQuantity + 1
          }
        }
      } 
      return state;
    }
    case CLEAR_SELECTED_MODULES: 
      return {};
    default:
      return state;
  }
};

