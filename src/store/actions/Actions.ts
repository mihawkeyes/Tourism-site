import { IActivities, ICategories, IHighLights } from "store/reducres/tourReducer";
import { ActionType } from "store/actionTypes";


interface ISetActivitiesAction {
  type: ActionType.SET_ACTIVITIES;
  payload: {
    activities : IActivities
  };
}

interface ISetCategoriesAction {
  type: ActionType.SET_CATEGORIES;
  payload: {
    categories: Array<ICategories>;
  };
}

interface ISetHighlightsAction {
  type: ActionType.SET_HIGHLIGHTS;
  payload: {
    highlights: Array<IHighLights>;
  };
}

export type TourAction = ISetActivitiesAction | ISetCategoriesAction | ISetHighlightsAction;
