import { useRef } from "react";
import Navbar1 from "./Navbar";
import "../styles/TrainerDashBoard.css";

const TrainerDashBoard = () => {
  let WorkOutName = useRef();
  let Muscle = useRef();
  let Equipment = useRef();
  let gif = useRef();
  let bodypt = useRef();

  let handleAddWorkOut = (e) => {
    e.preventDefault();
    let workout = {
      bodyPart: bodypt.current.value,
      equipment: Equipment.current.value,
      gifUrl: gif.current.value,
      name: WorkOutName.current.value,
      target: Muscle.current.value,
    };
    let data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workout),
    };
    fetch("http://localhost:1006/workouts", data).then(() => {
      alert("New workout added succesfully");
      window.location.reload();
    });
  };

  return (
    <div className="trainerdashboard">
      <Navbar1 />
      <h1>Add new Workout</h1>
      <div className="formt">
        <form action="" onSubmit={handleAddWorkOut}>
          <div className="part">
            <input type="text" placeholder="body part" ref={bodypt} />
          </div>
          <div className="name">
            <input type="text" placeholder="workout name" ref={WorkOutName} />
          </div>
          <div className="muscle">
            <input type="text" placeholder="Muscle" ref={Muscle} />
          </div>
          <div className="equip">
            <input type="text" placeholder="Equipment" ref={Equipment} />
          </div>
          <div className="gif">
            <input type="url" placeholder="workout gif reference" ref={gif} />
          </div>
          <input type="submit" value="Add workouts" />
        </form>
      </div>
    </div>
  );
};

export default TrainerDashBoard;
