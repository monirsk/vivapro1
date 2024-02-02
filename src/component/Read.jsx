import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://65bc8416b51f9b29e931a644.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://65bc8416b51f9b29e931a644.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }

  function setDataToStorage(id, name, date, designation, exit, time) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("date", date);
    localStorage.setItem("designation", designation);
    localStorage.setItem("exit", exit);
    localStorage.setItem("time", time);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row p-4">
        <div className="col-md-12">
          <div className="mb-2 mt-5">
            <Link to="/create">
              <button className="btn btn-dark">Create New User</button>
            </Link>
          </div>

          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Date</th>
                <th>Entry Time</th>
                <th>Exit Time</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_designation}</td>
                      <td>{item.e_date}</td>
                      <td>{item.e_time}</td>
                      <td>{item.e_exit}</td>
                      <td>
                        <Link to="/edit">
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              setDataToStorage(
                                item.id,
                                item.e_name,
                                item.e_date,
                                item.e_designation,
                                item.e_exit,
                                item.e_time
                              )
                            }
                          >
                            EDIT
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (window.confirm("Delete??"))
                              handleDelete(item.id);
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
