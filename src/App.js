import "./App.css";
import DashBoard from "./components/dashborad";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import Protect from "./protect";
import FitnessCalculator from "./components/fitnessCalculator";
import TrainerDashBoard from "./components/TrainerDashboard";
import SignUp from "./components/signUp";
import Login from "./components/login";
import WorkOuts from "./components/WorkOuts";
import MyWorkOuts from "./components/MyWorkOuts";
function App() {
  return (
    <div className="App">
      <BrowserRouter> 

         <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Protect child={<DashBoard/>}/>} />
          <Route path="/profile" element={<Protect child={<Profile/>}/>}/>
          <Route path="/fitnesscalculator" element={<Protect child={<FitnessCalculator/>}/>}/>
          <Route path="/trainerdashboard" element={<Protect child={<TrainerDashBoard/>}/>}/>
          <Route path="/workouts" element={<Protect child={<WorkOuts/>}/>}/>
          <Route path="/myworkouts" element={<Protect child={<MyWorkOuts/>}/>}/>





        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
