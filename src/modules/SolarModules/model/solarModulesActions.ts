import { SolarModulesState } from "./solarModulesReducer";
import { queryFetcher } from "../../../utils/queryFetcher";
import { getError } from "../../../utils/getError";
import { AppDispatch } from "../../../app/hooks/useAppDispatch";

export const FETCH_SOLAR_MODULES_LOADING = 'FETCH_SOLAR_MODULES_LOADING';
export const FETCH_SOLAR_MODULES_SUCCESS = 'FETCH_SOLAR_MODULES_SUCCESS';
export const FETCH_SOLAR_MODULES_FAILURE = 'FETCH_SOLAR_MODULES_FAILURE';

interface FetchSolarModulesLoading {
  type: typeof FETCH_SOLAR_MODULES_LOADING;
  payload: SolarModulesState["solarModules"];
}

interface FetchSolarModulesSuccess {
  type: typeof FETCH_SOLAR_MODULES_SUCCESS;
  payload: SolarModulesState["solarModules"];
}

interface FetchSolarModulesError {
  type: typeof FETCH_SOLAR_MODULES_FAILURE;
  payload: Error;
}

export type SolarModulesActions = FetchSolarModulesLoading | FetchSolarModulesError | FetchSolarModulesSuccess;

export const fetchSolarModulesLoading = () => async(dispatch: AppDispatch) => {
  dispatch({ type: FETCH_SOLAR_MODULES_LOADING });
}

export const fetchSolarModulesSuccess = (payload: SolarModulesState["solarModules"]) => async(dispatch: AppDispatch) => {
  dispatch({
    type: FETCH_SOLAR_MODULES_SUCCESS,
    payload
  });
}

export const fetchSolarModulesError = (payload: Error) => async(dispatch: AppDispatch) => {
  dispatch({
    type: FETCH_SOLAR_MODULES_FAILURE,
    payload
  });
}

export const fetchSolarModules = () => async(dispatch: AppDispatch) => {
  dispatch(fetchSolarModulesLoading());
  
  try {
    const response = await queryFetcher<SolarModulesState["solarModules"]>("/");
    dispatch(fetchSolarModulesSuccess(response))
  } catch(e: unknown) {
      const error = getError(e);
      dispatch(fetchSolarModulesError(error));      
  }
};