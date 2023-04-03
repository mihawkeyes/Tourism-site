import { IActivities } from "@/store/reducres/tourReducer";
import styles from "./Activity.module.css";

interface IProps {
  activity: IActivities;
}

const Activity = ({ activity }: IProps) => {
  return (
    <div className="bg-[#E6F2F2] p-10 flex items-center flex-col gap-5 ">
      <div className="flex md:w-[50%]  p-5  bg-white rounded-[5px] gap-5 shadow border">
        <div
          className={`${styles.activitycontainer} p-5 rounded-[50%]  shadow border`}
          style={{ backgroundImage: `url(${activity.image}) ` }}
        ></div>
        <div>
          <h3>
            <strong className={`${styles.activitytitle}`}>
              {activity.name}
            </strong>
          </h3>
          <div className={`${styles.activitydescription}`}>
            {activity.description}
          </div>
        </div>
      </div>
      <div className="md:w-[50%] ">
        <h2 className={`${styles.activitytitle} py-5`}>Locations</h2>
        <ol className="flex flex-col gap-2 md:w-[50%] w-[100%]   flex-wrap">
          {activity.activities && activity.activities.map((act, index) => {
            return (
              <li
                key={index}
                className={`${styles.location} p-2 my-1 basis-0  bg-white shadow border `}
              >
                {act.name}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Activity;
