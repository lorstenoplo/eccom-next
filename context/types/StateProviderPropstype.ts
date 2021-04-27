import { Reducer, Dispatch } from "react";
import { ContextDefaultType } from "./defaultValue";

export interface Actions {
  type: string;
  value: any;
}

export type StateProviderPropstype = {
  reducer: Reducer<ContextDefaultType, Actions>;
  initialState: ContextDefaultType;
};

export interface InitContextProps {
  state: ContextDefaultType;
  dispatch: Dispatch<Actions>;
}
