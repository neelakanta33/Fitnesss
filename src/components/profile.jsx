import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/profile.css";

const Profile = () => {
  //!alternative way to mapsStateToProps()
  const user = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="profile">
          <h1>USER PROFILE PAGE </h1>
          <div className="name">
            <h1>Username: {user.username} </h1>
          </div>{" "}
          <div className="email">
            <h1>Email : {user.email} </h1>
          </div>
          <div className="lg">
            <div className="logout">
              <Link
                to="/"
                onClick={() => {
                  dispatch({ type: "logout", payload: null });
                }}
              >
                logout
              </Link>
            </div>
            <div className="logout">
              <Link to="/home">go back to dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
