import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/fitnessCalc.css";
import Navbar1 from "./Navbar";

const FitnessCalculator = () => {
  let dispatch = useDispatch();
  let user = useSelector((state) => {
    return state.user;
  });
  console.log(user);

  let age = useRef();
  let weight = useRef();
  let height = useRef();
  let [calc, setCalc] = useState(false);
  let [healthData, setHealthData] = useState(null);

  let handleCalculate = (e) => {
    e.preventDefault();
    setCalc(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d0dc5d8c99msh4bf01a44d68df22p1be443jsnaeb2776dd446",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
      },
    };

    fetch(
      `https://fitness-calculator.p.rapidapi.com/bmi?age=${age.current.value}&weight=${weight.current.value}&height=${height.current.value}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setHealthData(data.data);
        setCalc(false);
      })
      .catch((err) => console.error(err));
  };
  let handleUpdateHealth = () => {
    dispatch({
      type: "updateHealth",
      payload: { bmi: healthData.bmi, health: healthData.health },
    });

    fetch("http://localhost:1006/users/" + user.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...user,
        bmi: healthData.bmi,
        health: healthData.health,
      }),
    });
    console.log(user);
    alert("helath data updated ");
  };

  return (
    <section>
      <Navbar1 />
      <div className="hl">
        <div className="fromfit">
          <form action="" className="formfit" onSubmit={handleCalculate}>
            <h3>Fitness Calculator</h3>
            <div className="age">
              <label htmlFor="">Age:</label>
              <input type="number" step="1" ref={age} />
            </div>

            <div className="height">
              <label htmlFor="">weight:</label>
              <input type="number" ref={weight} />
            </div>
            <div className="weight">
              <label htmlFor="">Height:</label>
              <input type="number" ref={height} />
            </div>

            <>
              <input
                type="submit"
                value={calc ? "Calculating...." : "calculate "}
                id="cal"
              />
            </>
          </form>
        </div>
        <div className="heal">
          {healthData && (
            <div className="health">
              <div className="healthdetails">
                <h1>BMI Rating : {healthData.bmi} </h1>

                <h1>Health : {healthData.health} </h1>

                <button onClick={handleUpdateHealth} id="cal1">
                  Save health details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FitnessCalculator;
