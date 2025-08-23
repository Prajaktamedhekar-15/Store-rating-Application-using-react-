import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/adminSide.css';

let AdminSide = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Toggle button for small screens */}
      <button
        className="btn btn-primary d-md-none m-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        ☰ Menu
      </button>

      <aside className={`admin-sidebar p-3 ${showMenu ? 'd-block' : 'd-none'} d-md-block`}>
        <div className="accordion" id="adminAccordion">
          <div className="text-center mb-4">
            <h3>
              <Link to="/admin" state={{ user }} className="admin-logo" onClick={() => setShowMenu(false)}>
                📊 Admin Panel
              </Link>
            </h3>
          </div>

          {/* Close button on mobile */}
          {showMenu && (
            <button
              className="btn btn-danger d-md-none mb-3 w-100"
              onClick={() => setShowMenu(false)}
            >
              ✖ Close
            </button>
          )}

          {/* User Section */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="UserHeading">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#UserCollapse" aria-expanded="false" aria-controls="UserCollapse">
                User
              </button>
            </h2>
            <div id="UserCollapse" className="accordion-collapse collapse" data-bs-parent="#adminAccordion">
              <div className="accordion-body">
                <Link to="/admin/addUser" state={{ user }} className="btn btn-outline-danger w-100 mb-2" onClick={() => setShowMenu(false)}>
                  Add User
                </Link>
                <Link to="/admin/viewUser" state={{ user }} className="btn btn-outline-danger w-100" onClick={() => setShowMenu(false)}>
                  View User
                </Link>
              </div>
            </div>
          </div>

          {/* Store Section */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="StoreHeading">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#StoreCollapse" aria-expanded="false" aria-controls="StoreCollapse">
                Store
              </button>
            </h2>
            <div id="StoreCollapse" className="accordion-collapse collapse" data-bs-parent="#adminAccordion">
              <div className="accordion-body">
                <Link to="/admin/addStore" state={{ user }} className="btn btn-outline-danger w-100 mb-2" onClick={() => setShowMenu(false)}>
                  Add Store
                </Link>
                <Link to="/admin/viewStore" state={{ user }} className="btn btn-outline-danger w-100" onClick={() => setShowMenu(false)}>
                  View Store
                </Link>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <center>
              <Link to="/login" className="btn mt-4 w-50 bg-primary fw-bold text-light" onClick={() => setShowMenu(false)}>
                Logout
              </Link>
            </center>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSide;
