import "../styles/signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

const Login = ({ add_user }) => {
  
  let email1 = useRef();
  let password1 = useRef();
  let userKind;
  let navigate = useNavigate();

  let handlelogin = (e) => {
    document.getElementsByName("admin").forEach((radio) => {
      if (radio.checked) {
        userKind = radio.value;
      }
    });
    console.log(userKind);

    e.preventDefault();

    let api =
      userKind === "user"
        ? "http://localhost:1006/users"
        : "http://localhost:1006/trainer";

    async function fetchCode() {
      let res = await fetch(api);
      let data = await res.json();

      let userdetails = data.find((user) => {
        return email1.current.value === user.email;
      });

      if (userdetails == undefined) {
        alert("invalid email !");
      } else if (userdetails.password != password1.current.value) {
        alert("wrong password ! please type valid password");
      } else {
        add_user(userdetails);
        alert("login successfull");
        navigate(userKind == "user" ? "/home" : "/trainerdashboard");
      }
    }
    fetchCode();
  };

  return (
    <section className="div mx-auto">
      <div className="block">
        <div className="top">
          <h4 id="signin">
            <b>Sign In</b>
          </h4>
          <hr />
          <input type="email" placeholder="Email" ref={email1} required />{" "}
          <br />
          <input
            type="password"
            placeholder="password"
            ref={password1}
            required
          />
          <fieldset>
            <legend id="leg">Signup as</legend>
            <div className="tags">
              <div className="user">
                <label htmlFor="">
                  <input
                    type="radio"
                    name="admin"
                    value="user"
                    className="us"
                  />{" "}
                  User
                </label>
              </div>
              <div className="trainer">
                <label htmlFor="">
                  {" "}
                  <input
                    type="radio"
                    name="admin"
                    value="trainer"
                    className="us"
                  />
                  Trainer
                </label>
              </div>
            </div>
          </fieldset>
          <button id="login" onClick={handlelogin}>
            <b>Login</b>
          </button>
        </div>
        <div className="bottom">
          <p>Don't have an account?</p>

          <Link to="/signup" id="signup">
            <b>Signup here</b>
          </Link>
        </div>
      </div>
    </section>
  );
};

let mapsStateToProps = (state) => {
  return { ...state };
};

let mapsDispatchToProps = (dispatch) => {
  return {
    add_user: (user) => {
      dispatch({ type: "add_user", payload: user });
    },
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(Login);
