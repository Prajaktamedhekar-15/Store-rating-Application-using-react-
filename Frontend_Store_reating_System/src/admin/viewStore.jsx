import React, { useState, useEffect } from 'react';
import { viewstore, deleteStore } from '../service/service.js';

let ViewStore = ({ user }) => {
  let [store, setStore] = useState([]);
  let [search, setSearch] = useState("");

  let storeDetail = async () => {
    let data = await viewstore();
    // sort ascending by store name
    data.sort((a, b) => a.name.localeCompare(b.name));
    setStore(data);
  };

  useEffect(() => {
    storeDetail();
  }, []);

  let deleteStoreData = async (id) => {
    let result = await deleteStore(id);
    alert(result);
    // refresh list after delete
    storeDetail();
  };

  // filter data based on search
  let filteredStores = store.filter((data) => {
    return (
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.address.toLowerCase().includes(search.toLowerCase()) ||
      data.owner.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <div className="container w-75 mt-5 p-3 border rounded shadow-lg">
        <h1 className="text-center text-danger m-3">Store Name and its Owner</h1>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by Store Name, Address, or Owner"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="table-responsive">
          <table className="table table-striped bg-light">
            <thead>
              <tr>
                <th>Store Name</th>
                <th>Address</th>
                <th>Owner</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredStores.map((data) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
                  <td>{data.owner}</td>
                  <td>
                    <button type="button" className="btn btn-danger p-1" onClick={() => { deleteStoreData(data.id); }}>Delete </button>
                  </td>
                </tr>
              ))}
              {filteredStores.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    No matching stores found
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

export default ViewStore;
