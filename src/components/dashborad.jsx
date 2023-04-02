import "../styles/dashboard.css";
import Navbar1 from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const DashBoard = () => {
  return (
    <>
      <section className="dashborad">
        <Navbar1 />
        <section className="text">
          <div className="txt1">
            <div className="txt">
              <h1>
                #1 Fitness App.Work Out <br /> Anytime. Anywhere.
              </h1>
              <p>
                Unlimited access to the world’s best workouts from celebrity
                trainers
              </p>
            </div>
          </div>
        </section>
        <section id="text1">
          <h2 id="res">Get FitOn. Get Results.</h2>
          <p>
            Join 13+ million members on the top digital health & wellness
            platform and stay toned, lose weight, get <br /> strong, reduce
            stress, and reach your goals.
          </p>
        </section>
        <section className="cards">
          <div className="c1" data-aos="zoom-in">
            <img src={"c1"} alt="" />
            <p>
              <b>Best Workouts</b>
            </p>
            <p>Train your mind and body with personalized fitness programs.</p>
          </div>
          <div className="c1" data-aos="zoom-in">
            <img src={"c2"} alt="" />
            <p>
              <b>Best Meditation</b>
            </p>
            <p>
              Reduce stress and be more mindful with soothing video meditations.
            </p>
          </div>
          <div className="c1" data-aos="zoom-in">
            <img src={"c3"} alt="" />
            <p>
              <b>Best Trainers</b>
            </p>
            <p>Work out with celebrities and world-class trainers.</p>
          </div>
          <div className="c1" data-aos="zoom-in">
            <img src={"c4"} alt="" />
            <p>
              <b>Always On</b>
            </p>
            <p>Anytime, anywhere. No equipment required.</p>
          </div>
        </section>
      </section>
    </>
  );
};

// let mapsStateToProps=(state)=>{
//   return {userdetails:state}
//   }

//   let mapsDispatchToProps=(dispatch)=>{
//     return {
//         remove_user:()=>{dispatch({type:"logout",payload:null})}
//     }
//     }

export default DashBoard;
