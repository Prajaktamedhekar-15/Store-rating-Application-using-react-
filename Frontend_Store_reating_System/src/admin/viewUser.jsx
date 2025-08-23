import React, { useEffect, useState } from 'react';
import { viewUsers, deleteUser } from "../service/service.js";

let ViewUser = ({ user }) => {
  let [view, setView] = useState([]);
  let [search, setSearch] = useState("");

  // fetch all users
  let viewUser = async () => {
    let users = await viewUsers();
    // sort ascending by name
    users.sort((a, b) => a.name.localeCompare(b.name));
    setView(users);
  };

  useEffect(() => {
    viewUser();
  }, []);

  // delete a user
  let deleteUserData = async (id) => {
    let result = await deleteUser(id);
    alert(result);
    // refresh list after delete
    viewUser();
  };

  // filter data based on search
  let filteredUsers = view.filter((data) => {
    return (
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.email.toLowerCase().includes(search.toLowerCase()) ||
      data.address.toLowerCase().includes(search.toLowerCase()) ||
      data.role.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <div className="container w-75 p-3 mt-5 border rounded shadow">
        <h1 className="text-center m-3 text-danger">All Register Users</h1>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by Name, Email, Address, or Role"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="table-responsive">
          <table className="table table-striped bg-light border shadow-lg">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Role</th>
                <th>🗑️</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((data) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                  <td>{data.role}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger p-1"
                      onClick={() => { deleteUserData(data.id); }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No matching users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
