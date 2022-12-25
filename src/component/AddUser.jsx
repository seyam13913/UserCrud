import React, { useState } from "react";
import { useAddUserMutation } from "../createRtk/createUserApi";

const AddUser = () => {
  const [addUserData] = useAddUserMutation();
  const [newUser, setNewUser] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserData(newUser);
    console.log(newUser);
  };

  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Add User
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  aria-label="name"
                  name="name"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  aria-label="email"
                  name="email"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Job Name"
                  aria-label="job name"
                  name="job"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="City"
                  aria-label="city"
                  name="city"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
