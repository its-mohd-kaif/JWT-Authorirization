import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  // UseState For Input Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [pass, setPass] = useState("");
  let navigate = useNavigate();
  //  Function that holds name value
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  //   Function that holds email value
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  //   Function that holds type value
  const typeHandler = (e) => {
    setType(e.target.value);
  };
  //   Function that holds pass value
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const signupHandler = () => {
    // Check Validation
    if (name === "") {
      alert("Name Field Can Not Be Empty");
      document.getElementById("name").focus();
    } else if (email === "") {
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
    } else if (type === "") {
      alert("Type Field Can Not Be Empty");
      document.getElementById("type").focus();
    } else if (pass === "") {
      alert("Password Field Can Not Be Empty");
      document.getElementById("pass").focus();
    } else {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }),
      })
        .then((res) => res.json())
        .then((val) => {
          // Set User Data and Token into LocalStorage
          let obj = {
            name: name,
            email: email,
            type: type,
            pass: pass,
            token: val.token,
          };
          alert("Signup Successfully");
          localStorage.setItem(email, JSON.stringify(obj));
          setName("");
          setEmail("");
          setType("");
          setPass("");
          navigate("/login");
        });
    }
  };
  return (
    <div>
      <center>
        <br></br>
        <h1>Sign up</h1>
        <br></br>
        <div style={{ width: "50%" }}>
          <div className="input-group mb-3">
            <input
              onChange={nameHandler}
              id="name"
              type="text"
              className="form-control"
              placeholder="Type Name..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              Name
            </span>
          </div>
          <div className="input-group mb-3">
            <input
              onChange={emailHandler}
              id="email"
              type="email"
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
            <select
              defaultValue={"DEFAULT"}
              onChange={typeHandler}
              id="type"
              className="form-select"
              aria-label="Default select example"
            >
              <option value="">--Select--</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <span className="input-group-text" id="basic-addon2">
              Type
            </span>
          </div>
          <div className="input-group mb-3">
            <input
              onChange={passHandler}
              type="password"
              id="pass"
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
              onClick={signupHandler}
              className="btn btn-success"
              type="button"
            >
              Signup
            </button>
            <span>
              Already have a account{"  "}
              <Link to={"/login"} style={{ color: "blue" }}>
                {" "}
                Login
              </Link>
            </span>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Signup;
