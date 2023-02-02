import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  // UseState For Input Fields
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //   Function that take email value
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  //   Function that take password value
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  let navigate = useNavigate();
  //   Login Handler
  const loginHandler = () => {
    // Check Validation
    if (email === "") {
      alert("Email Field Can Not Be Empty");
      document.getElementById("email").focus();
    } else if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        )
    ) {
      alert("Type Proper Email");
      document.getElementById("email").focus();
    } else if (pass === "") {
      alert("Password Field Can Not Be Empty");
      document.getElementById("pass").focus();
    } else {
      // Get Data From Local Storage
      let user = JSON.parse(localStorage.getItem(email));
      if (user.type === "Admin" && "token" in user === true) {
        alert(`Welcome Admin ${user.name}`);
        navigate("/dashboard");
      } else if ("token" in user === false) {
        alert("Token is not generated !!!");
      } else if (user.type === "User") {
        alert("User Can Not Go Into Dashboard");
        navigate("/");
      }
    }
  };
  return (
    <div>
      <center>
        <br></br>
        <h1>Login</h1>
        <br></br>
        <div style={{ width: "50%" }}>
          <div className="input-group mb-3">
            <input
              onChange={emailHandler}
              type="email"
              id="email"
              className="form-control"
              placeholder="Type Email..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              Email
            </span>
          </div>
          <div className="input-group mb-3">
            <input
              onChange={passHandler}
              id="pass"
              type="password"
              className="form-control"
              placeholder="Type Password..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              Password
            </span>
          </div>
          <br></br>
          <div className="d-grid gap-2 col-12 mx-auto">
            <button
              onClick={loginHandler}
              className="btn btn-success"
              type="button"
            >
              Login
            </button>
            <span>
              New User ? {"  "}
              <Link to={"/"} style={{ color: "blue" }}>
                {" "}
                Signup
              </Link>
            </span>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Login;
