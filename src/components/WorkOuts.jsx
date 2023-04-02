import { useEffect, useState } from "react";
import Navbar1 from "./Navbar";
import "../styles/workouts.css";
import { useDispatch, useSelector } from "react-redux";
const WorkOuts = () => {
  let [workouts, setWorkouts] = useState(null);

  let user = useSelector((state) => {
    return state.user;
  });
  let userDetails = { ...user };
  if (userDetails.workouts == undefined) {
    userDetails.workouts = [];
  }
  let dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "da3e9d6194msh99ca5a70f09bf66p1531afjsncb0199344067",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      fetch("https://exercisedb.p.rapidapi.com/exercises", options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setWorkouts(data);
        })
        .catch((err) => console.error(err));
    }, 3000);
  }, []);

  let handleWorkOuts = (workout) => {
    userDetails.workouts.push(workout);

    //!update user obj to store and server
    dispatch({
      type: "workout_added",
      payload: userDetails,
    });

    fetch("http://localhost:1006/users/" + user.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    }).then(() => {
      alert("workoutadded");
    });

    console.log(userDetails);
  };

  let handleRemoveOuts = (wid) => {
    let start = userDetails.workouts.findIndex((w) => {
      return w.id == wid;
    });
    userDetails.workouts.splice(start, 1);

    //!update user obj to store and server
    dispatch({
      type: "workout_added",
      payload: userDetails,
    });

    fetch("http://localhost:1006/users/" + user.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    }).then(() => {
      alert("workoutremoved");
    });
  };
  return (
    <div className="workouts">
      <Navbar1 />
      <h1>All WorkOuts</h1>
      {workouts && (
        <div className="all-workouts">
          {workouts.map((workout) => {
            return (
              <div className="workout">
                <div className="workouttext">
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
                <div className="but">
                  {!userDetails.workouts.some((w) => {
                    return w.id == workout.id;
                  }) && (
                    <button
                      id="but"
                      onClick={() => {
                        handleWorkOuts(workout);
                      }}
                    >
                      Add{" "}
                    </button>
                  )}
                  {userDetails.workouts.some((w) => {
                    return w.id == workout.id;
                  }) && (
                    <button
                      id="but"
                      onClick={() => {
                        handleRemoveOuts(workout.id);
                      }}
                    >
                      Remove{" "}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {!workouts && <div className="loader"></div>}
    </div>
  );
};

export default WorkOuts;
