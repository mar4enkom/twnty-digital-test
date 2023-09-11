import { RootState } from "../../../app/redux/rootReducer";
import { SolarModule } from "../../../app/types/types";
import { FETCH_SOLAR_MODULES_FAILURE, FETCH_SOLAR_MODULES_LOADING, FETCH_SOLAR_MODULES_SUCCESS, SolarModulesActions } from "./solarModulesActions";

export interface SolarModulesState {
  solarModules: Maybe<Record<string, SolarModule>>,
  loading: boolean;
  error: Error | null;
}

const defaultState = {
  solarModules: null,
  loading: true,
  error: null,
}

export const solarModulesReducer = (
  state: SolarModulesState = defaultState, 
  action: SolarModulesActions,
  root: RootState
) => {
  switch (action.type) {
    case FETCH_SOLAR_MODULES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SOLAR_MODULES_SUCCESS:
      return {
        ...state,
        solarModules: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_SOLAR_MODULES_FAILURE:
      return {
        ...state,
        solarModules: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};