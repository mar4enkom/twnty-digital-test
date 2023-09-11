import { Dispatch } from 'redux';
import { SolarModule } from '../../../app/types/types';

export const SELECT_MODULE = 'SELECT_MODULE';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const CLEAR_SELECTED_MODULES = 'CLEAR_SELECTED_MODULES';

export interface SelectModulePayload extends SolarModule {
  name: string;
};

type UpdateQuantityPayload = {
  name: string;
}

export interface SelectModuleAction {
  type: typeof SELECT_MODULE;
  payload: SelectModulePayload;
}

export interface IncrementQuantityAction {
  type: typeof INCREMENT_QUANTITY;
  payload: UpdateQuantityPayload;
}

export interface DecrementQuantityAction {
  type: typeof DECREMENT_QUANTITY;
  payload: UpdateQuantityPayload;
}

export interface ClearSelectedModulesAction {
  type: typeof CLEAR_SELECTED_MODULES;
  payload: UpdateQuantityPayload;
}

export type CheckoutActions = SelectModuleAction | IncrementQuantityAction | DecrementQuantityAction | ClearSelectedModulesAction;

export const selectModule = (selectedModule: SelectModulePayload) => (dispatch: Dispatch) => {
  dispatch({
    type: SELECT_MODULE,
    payload: selectedModule,
  });
};

export const incrementQuantity = (payload: UpdateQuantityPayload) => (dispatch: Dispatch) => {
  dispatch({
    type: INCREMENT_QUANTITY,
    payload,
  });
};

export const decrementQuantity = (payload: UpdateQuantityPayload) => (dispatch: Dispatch) => {
  dispatch({
    type: DECREMENT_QUANTITY,
    payload,
  });
};

export const clearSelectedModules = () => (dispatch: Dispatch) => {
  dispatch({
    type: CLEAR_SELECTED_MODULES,
  });
};