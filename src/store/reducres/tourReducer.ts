import { ActionType } from "store/actionTypes";
import { TourAction } from "store/actions/Actions";

export interface IHighLights {
  title: string;
  description: string;
  image: string;
}

export interface ICategories {
  name: string;
  activities: Array<Object>;
}

export interface IActivityObject {
  name: string;
}

export interface IActivities {
  name: string;
  description: string;
  image: string;
  activities: Array<IActivityObject>;
}

interface ITourState {
  highlights: Array<IHighLights>;
  categories: Array<ICategories>;
  activities: IActivities;
}

const defaultActivities = {
  name: "",
  description: "",
  image: "",
  activities: [],
};

const initialState: ITourState = {
  highlights: [],
  categories: [],
  activities: { ...defaultActivities },
};

const TourReducer = (state: ITourState = initialState, action: TourAction) => {
  switch (action.type) {
    case ActionType.SET_HIGHLIGHTS: {
      const newstate = { ...state };
      newstate.highlights = [...action.payload.highlights];
      return newstate;
    }
    case ActionType.SET_ACTIVITIES: {
      const newstate = { ...state };
      newstate.activities = { ...action.payload.activities };
      return newstate;
    }
    case ActionType.SET_CATEGORIES: {
      const newstate = { ...state };
      newstate.categories = [...action.payload.categories];
      return newstate;
    }
    default: {
      return state;
    }
  }
};

export default TourReducer;
