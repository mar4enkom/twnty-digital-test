import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export type AppDispatch = Dispatch<any>;

export const useAppDispatch: () => AppDispatch = useDispatch;
