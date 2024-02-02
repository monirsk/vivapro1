import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [time, setTime] = useState(0);
  const [exit, setExit] = useState(0);
  const [date, setDate] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setDesignation(localStorage.getItem("designation"));
    setTime(localStorage.getItem("time"));
    setExit(localStorage.getItem("exit"));
    setDate(localStorage.getItem("date"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://65bc8416b51f9b29e931a644.mockapi.io/crud/${id}`, {
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
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-dark ">Dashboard</button>
            </Link>
          </div>
          <div className="bg-dark p-r  text-center text-white">Update data</div>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="">Enter Name: </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Employee Name"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Enter Designation: </label>
              <input
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                type="text"
                placeholder="Designation"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Date: </label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                placeholder="Date"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Entery Time: </label>
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="number"
                placeholder="Entry Time"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Exit Time: </label>
              <input
                value={exit}
                onChange={(e) => setExit(e.target.value)}
                type="number"
                placeholder="Exit Time"
                className="form-control"
              />
            </div>

            <br></br>
            <div className="d-grid">
              <input type="submit" value="Update" className="btn btn-dark" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
