import { useSelector } from "react-redux";
import Navbar1 from "./Navbar";
import "../styles/myworkouts.css";

const MyWorkOuts = () => {
  let user = useSelector((state) => {
    return state.user;
  });
  return (
    <div className="myworkouts">
      <Navbar1 />
      <h1>MY WORK OUTS</h1>
      <div className="myworkouts">
        {user && (
          <div className="all-workouts">
            {user.workouts.map((workout) => {
              return (
                <div className="workout">
                  <img
                    src={workout.gifUrl}
                    alt="image not found"
                    height="200px"
                    width="200px"
                  />
                  <h6>Workout name : {workout.name} </h6>
                  <p>Body part : {workout.bodyPart}</p>
                  <p>Equipment : {workout.equipment}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWorkOuts;
