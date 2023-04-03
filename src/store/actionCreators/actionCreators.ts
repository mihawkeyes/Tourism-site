import {
  IActivities,
  ICategories,
  IHighLights,
} from "store/reducres/tourReducer";
import { Dispatch } from "redux";
import { ActionType } from "store/actionTypes";
import { TourAction } from "store/actions/Actions";

const changeHighlights = (highlights: Array<IHighLights>) => {
  return (dispatch: Dispatch<TourAction>) => {
    dispatch({
      type: ActionType.SET_HIGHLIGHTS,
      payload: { highlights },
    });
  };
};

const changeActivities = (activities: Array<IActivities>) => {
  return (dispatch: Dispatch<TourAction>) => {
    dispatch({
      type: ActionType.SET_ACTIVITIES,
      payload: { activities },
    });
  };
};

const changeCategories = (categories: Array<ICategories>) => {
  return (dispatch: Dispatch<TourAction>) => {
    dispatch({
      type: ActionType.SET_CATEGORIES,
      payload: { categories },
    });
  };
};
export const TourActionCreators = {
  changeActivities,
  changeCategories,
  changeHighlights,
};
