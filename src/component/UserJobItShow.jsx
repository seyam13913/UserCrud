import React, { useEffect, useState } from "react";
import {
  useDeleteUserMutation,
  useGetUserApiQuery,
} from "../createRtk/createUserApi";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

const UserJobItShow = () => {
  const userJOb = useGetUserApiQuery();
  const usersData = userJOb.data;
  const [deletUserData] = useDeleteUserMutation();

  useEffect(() => {
    setItJobUserData(usersData);
  }, [usersData]);

  const [itJobUserData, setItJobUserData] = useState(usersData);
  const [inputData, setInputData] = useState("");
  const [updateData, setUpdateData] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setItJobUserData(usersData);
    }
    setInputData(inputValue);
  };

  const handleSubmit = (e) => {
    if (inputData) {
      const filterUser = usersData.filter((user) => {
        return user.name.toLowerCase().includes(inputData.toLowerCase());
      });
      setItJobUserData(filterUser);
    } else {
      setItJobUserData(usersData);
    }
  };

  const handleDelete = (id) => {
    deletUserData(id);
  };

  const handleEdit = (id) => {
    let filterUsers = usersData.find((user) => user.id === id);
    setUpdateData(filterUsers);
  };

  return (
    <div>
      <h2>
        <u>iT Job User's</u>
      </h2>
      <div class="input-search-control">
        <div class="input-fild-control">
          <div class=" d-flex " style={{ margin: ".3rem" }}>
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="Search Name"
              onChange={handleChange}
            ></input>

            <button
              class="btn btn-primary"
              style={{ margin: ".6rem" }}
              type="button"
              onClick={handleSubmit}
            >
              Button
            </button>
          </div>
        </div>
        <button
          class="add-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <h3>+</h3>
        </button>
      </div>
      <div class="container">
        {itJobUserData?.map((user) => {
          const { id, name, email, city, job } = user;
          return (
            <div class="card-user" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{email}</p>
                <p class="card-text">{city}</p>
                <p class="card-text">{job}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    class="btn btn-info me-md-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      handleEdit(id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-danger"
                    type="button"
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </button>
                </div>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <AddUser />
      <EditUser userEdit={updateData} />
    </div>
  );
};

export default UserJobItShow;
