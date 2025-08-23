import React from 'react';

let OwnerDash = ({ user }) => {
  return (
    <div className='container-fluid py-5 px-3' >
      <div className="mx-auto bg-light text-center p-4 shadow rounded" style={{ maxWidth: "500px"}}>
        <h2>Welcome to</h2>
        <h2 className="text-primary">Owner Dashboard</h2>
        <p className="mt-3 text-muted">Hello {user?.name || "Owner"}</p>
      </div>
    </div>
  );
};

export default OwnerDash;
