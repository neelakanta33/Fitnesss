import "../styles/register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const SignUp = () => {
  let username1 = useRef();

  let email1 = useRef();
  let password1 = useRef();
  let confirmpassword1 = useRef();
  let age1 = useRef();

  let navigate = useNavigate();

  let users = (e) => {
    e.preventDefault();
    let username = username1.current.value;
    let email = email1.current.value;
    let password = password1.current.value;
    let age = age1.current.value;
    let gender;
    let admin;

    document.getElementsByName("gender").forEach((radio) => {
      if (radio.checked) {
        gender = radio.value;
      }
    });
    document.getElementsByName("trainer").forEach((radio) => {
      if (radio.checked) {
        admin = radio.value;
      }
    });
    console.log(gender);
    console.log(admin);
    let accountDetails = {
      username,
      email,
      password,
      age,
      gender,
    };
    let data1 = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accountDetails),
    };
    let api =
      admin === "user"
        ? "http://localhost:1006/users"
        : "http://localhost:1006/trainer";

    fetch(api, data1).then(() => {
      alert("data saved successfully");
      navigate("/");
    });
  };

  return (
    <section className="div1 mx-auto">
      <div className="block1">
        <form>
          <div className="top1">
            <h4 id="signin1">
              <b>Register</b>
            </h4>
            <input
              type="text"
              placeholder="Username"
              ref={username1}
              required
            />{" "}
            <br />
            <input type="email" placeholder="Email" ref={email1} required />
            <input
              type="password"
              placeholder="Password"
              ref={password1}
              required
            />
            <input
              type="password"
              placeholder="Confirmpassword"
              ref={confirmpassword1}
            />
            <input type="text" placeholder="Age" ref={age1} required />
            <fieldset id="fieldset">
              <legend id="gender">Gender</legend>
              <div className="tags1">
                <div className="male">
                  <input type="radio" name="gender" value="male" required />{" "}
                  <label htmlFor="">Male</label>
                </div>
                <div className="female">
                  <input type="radio" name="gender" value="female" required />
                  <label htmlFor="">female</label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend id="leg">Signup as</legend>
              <div className="tags1">
                <div className="user">
                  <input type="radio" name="trainer" value="user" required />
                  <label htmlFor="">User</label>
                </div>
                <div className="trainer">
                  <input type="radio" name="trainer" value="trainer" required />
                  <label htmlFor="">Trainer</label>
                </div>
              </div>
            </fieldset>
            <Link id="login1" onClick={users}>
              <b>Signup</b>
            </Link>
          </div>
        </form>
        <div className="bottom1">
          <p>Already have an account?</p>
          <div className="but">
            <Link id="signup1" to="/">
              <b>Signin here</b>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
