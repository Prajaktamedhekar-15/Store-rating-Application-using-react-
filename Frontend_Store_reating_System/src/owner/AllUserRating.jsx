

// export default AllRatingUser;

import React, { useState, useEffect } from "react";
import { allRatingData } from '../service/service.js';

let AllRatingUser = ({ user }) => {
  const [all, setAll] = useState([]);
  const [search, setSearch] = useState("");

  const AllUserInfo = async () => {
    const data = await allRatingData(user.id);
    setAll(data);
  };

  useEffect(() => {
    AllUserInfo();
  }, []);

  // Filter function
  const filteredData = all.filter((data) => {
    const searchText = search.toLowerCase();

    return (
      data.name.toLowerCase().includes(searchText) ||
      data.store.toLowerCase().includes(searchText) ||
      String(data.rating).toLowerCase().includes(searchText) ||
      new Date(data.created_at)
        .toLocaleDateString("en-GB")
        .toLowerCase()
        .includes(searchText)
    );
  });

  return (
    <div className="container mt-4">
      <div className="table-responsive shadow rounded p-3 bg-light">
        <h3 className="text-center text-danger mb-4">All User Ratings on Store</h3>

      
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search by User, Store, Rating or Date"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>User Name</th>
              <th>Store Name</th>
              <th>Rating</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.store}</td>
                  <td>{data.rating}</td>
                  <td>{new Date(data.created_at).toLocaleDateString("en-GB")}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRatingUser;
