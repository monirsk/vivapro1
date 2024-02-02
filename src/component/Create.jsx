import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [time, setTime] = useState(0);
  const [exit, setExit] = useState(0);
  const [date, setDate] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65bc8416b51f9b29e931a644.mockapi.io/crud", {
        e_name: name,
        e_designation: designation,
        e_date: date,
        e_time: time,
        e_exit: exit,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="mb-2 mt-2">
              <Link to="/">
                <button className="btn btn-dark">Dashboard</button>
              </Link>
            </div>
            <div className=" bg-black text-white p-3 text-center">
              <h4>Vivasoft Employee Entry Time</h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Enter Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Employee Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="designation" className="form-label">
                  Enter Designation:
                </label>
                <input
                  type="text"
                  id="designation"
                  placeholder="Designation"
                  className="form-control"
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  placeholder="Date"
                  className="form-control"
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="entryTime" className="form-label">
                  Entry Time:
                </label>
                <input
                  type="number"
                  id="entryTime"
                  placeholder="Entry Time"
                  className="form-control"
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exitTime" className="form-label">
                  Exit Time:
                </label>
                <input
                  type="number"
                  id="exitTime"
                  placeholder="Exit Time"
                  className="form-control"
                  onChange={(e) => setExit(e.target.value)}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary bg-black">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
