import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Protect = ({child,userdetails}) => {
  return (
    <>
      <div>
        {userdetails != null ? (child ) : (
          <Navigate to="/" replace />
        )}
      </div>
    </>
  );
};
let mapsStateToProps = (state) => {
  return { userdetails: state };
};
export default connect(mapsStateToProps)(Protect);
