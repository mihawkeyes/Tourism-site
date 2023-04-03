import { fetchActivities } from "@/api/tour";
import Activity from "@/components/Activity";
import HeaderImage from "@/components/HeaderImage";
import ActionCreators from "@/store/actionCreators";
import { State } from "@/store/reducres";
import { IActivities } from "@/store/reducres/tourReducer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const ActivityPage = () => {
  const state = useSelector((state: State) => {
    return state.tour;
  });

  const dispatch = useDispatch();
  const { changeActivities } = bindActionCreators(
    ActionCreators.TourActionCreators,
    dispatch
  );
  const router = useRouter();
  const { activity } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      if (activity) {
        try {
          const activiiessData = await fetchActivities({
            activity: typeof activity === "string" ? activity : "Surfing",
          });
          changeActivities(activiiessData);
        } catch (error) {
            console.log(error)
          router.push('/404')
        }
      }
    };
    fetchData();
  }, [activity]);

  return (
    <main>
      <HeaderImage image={state.activities.image} />
      <Activity activity={state.activities} />
    </main>
  );
};

export default ActivityPage;
