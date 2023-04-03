import { combineReducers } from "redux";
import TourReducer from "store/reducres/tourReducer";

const reducer = combineReducers({
  tour: TourReducer,
});

export default reducer;

export type State = ReturnType<typeof reducer>
