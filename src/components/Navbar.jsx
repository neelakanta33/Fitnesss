import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar1 = () => {
  let [menu, setMenu] = useState(false);
  let dispatch = useDispatch();
  let { pathname: path } = useLocation();
  console.log(path);
  return (
    <div className="nav">
      <a href="/home">
        <div className="logo">
          <a>Fit Bit </a>
          <i class="bx bx-dumbbell"></i>
        </div>
      </a>

      {path == "/trainerdashboard" && (
        <div className="links">
          <ul>
            <li>
              <a href="/workouts">Workouts</a>
            </li>
          </ul>
        </div>
      )}
      {path != "/trainerdashboard" && (
        <div className="links">
          <ul>
            <li>
              <a href="http://">Trainers</a>
            </li>
            <li>
              <a href="/workouts">Workouts</a>
            </li>
            <li>
              <a href="/myworkouts">My Workouts</a>
            </li>
            <li>
              <a href="/fitnesscalculator">Fitness calculator</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      )}
      <div className="logout">
        <a
          href="/"
          onClick={() => {
            dispatch({ type: "logout", payload: null });
          }}
        >
          Logout
        </a>
      </div>
      <div className="menu"></div>
      <div
        className="hamberger"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <i class="bx bx-menu">=</i>
      </div>

      {menu && (
        <div className="menu">
          <Link to="">Trainer</Link>
          <Link to="">Workouts</Link>
          <Link to="">My workouts</Link>
          <Link href="/fitnesscalculator">Fitness Calculator</Link>
          <Link href="/profile">Profile</Link>
          <Link id="log">Logout</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar1;
