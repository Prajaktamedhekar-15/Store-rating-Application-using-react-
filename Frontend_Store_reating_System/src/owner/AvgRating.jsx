import React, { useState, useEffect } from "react";
import { avgRatingData } from "../service/service.js";

let AvgRating = ({ user }) => {
  const [avg, setAvg] = useState([]);
  const [search, setSearch] = useState("");

  const AvgDetail = async () => {
    let data = await avgRatingData(user.id);
    setAvg(data);
  };

  useEffect(() => {
    AvgDetail();
  }, []);

  // 🔎 Filter based on search
  const filteredData = avg.filter((data) => {
    const searchText = search.toLowerCase();

    return (
      data.name.toLowerCase().includes(searchText) ||
      data.address.toLowerCase().includes(searchText) ||
      String(data.avg).toLowerCase().includes(searchText) ||
      String(data.sum).toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="container mt-4">
      <div className="table-responsive shadow rounded p-3 bg-light">
        <h3 className="text-center text-danger mb-4">Average Rating of Stores</h3>

        {/* 🔎 Search Box */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search by Store, Address, Avg Rating or Total Rating"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Store</th>
              <th>Address</th>
              <th>Average Rating</th>
              <th>Total Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
                  <td>{data.avg}</td>
                  <td>{data.sum}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No  records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvgRating;
