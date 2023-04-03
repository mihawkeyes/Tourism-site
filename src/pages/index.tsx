import { fetchActivities, fetchCategories, fetchHighlights } from "@/api/tour";
import HeaderImage from "@/components/HeaderImage";
import Highlight from "components/Highlight";
import { State } from "@/store/reducres";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ActionCreators from "@/store/actionCreators";
import { bindActionCreators } from "redux";
import Categories from "@/components/Categories/Categories";

export default function Home() {
  const state = useSelector((state: State) => {
    return state.tour;
  });

  const dispatch = useDispatch();
  const { changeHighlights, changeCategories } = bindActionCreators(
    ActionCreators.TourActionCreators,
    dispatch
  );
  useEffect(() => {
    const fetchData = async () => {
      const highlightData = await fetchHighlights();
      const categoriesData = await fetchCategories();
      changeHighlights(highlightData);
      changeCategories(categoriesData);
    };
    fetchData();
  }, []);
  return (
    <main className="flex flex-col">
      <HeaderImage />
      <Highlight highlights={state.highlights} />
      <Categories categories={state.categories} />
    </main>
  );
}
