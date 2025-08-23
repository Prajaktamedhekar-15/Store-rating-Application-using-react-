import React, { useState } from "react";
import '../style/OwnerSide.css';
import { Link } from "react-router-dom";

let OwnerSide = ({ user }) => {
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

      {/* Sidebar */}
      <aside className={`admin-sidebar p-3 ${showMenu ? 'd-block' : 'd-none'} d-md-block`}>
        <div className="accordion" id="ownerAccordion">

          {/* Logo */}
          <div className="text-center mb-4">
            <Link to="/owner" state={{ user }} className="admin-logo fs-4" onClick={() => setShowMenu(false)}>
              👲 Owner Dashboard
            </Link>
          </div>

          {/* Close button on small screens */}
          {showMenu && (
            <button className="btn btn-danger d-md-none mb-3 w-100" onClick={() => setShowMenu(false)}>
              ✖ Close
            </button>
          )}

          {/* User Section */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#userCollapse" aria-expanded="false" aria-controls="userCollapse">
                👨‍💻 User
              </button>
            </h2>
            <div id="userCollapse" className="accordion-collapse collapse" data-bs-parent="#ownerAccordion">
              <div className="accordion-body">
                <Link to="/owner/allUser" state={{ user }} className="btn btn-outline-danger w-100" onClick={() => setShowMenu(false)}>
                  View User
                </Link>
              </div>
            </div>
          </div>

          {/* Store Section */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#storeCollapse" aria-expanded="false" aria-controls="storeCollapse">
                🏪 Store
              </button>
            </h2>
            <div id="storeCollapse" className="accordion-collapse collapse" data-bs-parent="#ownerAccordion">
              <div className="accordion-body">
                <Link to="/owner/avg" state={{ user }} className="btn btn-outline-danger w-100 mb-2" onClick={() => setShowMenu(false)}>
                  View Store
                </Link>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-3 text-center" style={{ marginTop: "350px" }}>
            <Link to="/login" className="btn w-50 bg-primary fw-bold text-light" onClick={() => setShowMenu(false)}>
              Logout
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default OwnerSide;
