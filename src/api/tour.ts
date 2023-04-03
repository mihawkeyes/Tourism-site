import axios from "api/index";
import { AxiosError } from "axios";

export const fetchHighlights = async () => {
  try {
    const data = await axios.get("/highlights");
    if (data.status === 200) {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const data = await axios.get("/categories");
    return data.data;
  } catch (error) {
    throw error;
  }
};

interface IActivityInput {
  activity: string;
}

export const fetchActivities = async (activity: IActivityInput) => {
  try {
    const data = await axios.get(`/activities/${activity.activity}`);
    return data.data;
  } catch (error) {
    throw error;
  }
};
