import React, { useEffect, useState } from "react";
import { useUpdateUserMutation } from "../createRtk/createUserApi";

const EditUser = ({ userEdit }) => {
  const [data, setChangeData] = useState("");

  const [updateUser] = useUpdateUserMutation();
  useEffect(() => {
    setChangeData(userEdit);
  }, [userEdit]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChangeData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      updateUser(data);
    }
  };

  const { name, email, city, job } = data;
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-body">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    aria-label="name"
                    name="name"
                    value={name}
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
                    value={email}
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
                    value={job}
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
                    value={city}
                    onChange={handleChange}
                  ></input>
                </div>
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
              Update User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
