import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <center>
        <br></br>
        <h1>Admin Dashboard</h1>
        <br></br>
        <div class="d-grid gap-2 col-6 mx-auto">
          <Link to={"/"} class="btn btn-success" type="button">
            Home
          </Link>
        </div>
      </center>
    </div>
  );
}

export default Dashboard;
