import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/userSideBar.css";

const Usidebar = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Toggle for small screens */}
      <button
        className="btn btn-primary d-md-none m-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        ☰ Menu
      </button>

      <aside
        className={`admin-sidebar p-3 ${showMenu ? "d-block" : "d-none"} d-md-block`}
      >
        <div className="accordion" id="adminAccordion">
          {/* Logo */}
          <div className="text-center mb-4">
            <h2>
              <Link to="/guser" state={{ user }} className="admin-logo" onClick={() => setShowMenu(false)}
              >
                👤 User Dashboard
              </Link>
            </h2>
          </div>

          {/* Close on small screens */}
          {showMenu && (
            <button
              className="btn btn-danger d-md-none mb-3 w-100"
              onClick={() => setShowMenu(false)}
            >
              ✖ Close
            </button>
          )}

          {/* Dashboard Accordion */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="studentHeading">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#studentCollapse"
                aria-expanded="false"
                aria-controls="studentCollapse"
              >
                Dashboard 👈
              </button>
            </h2>
            <div
              id="studentCollapse"
              className="accordion-collapse collapse"
              data-bs-parent="#adminAccordion"
            >
              <div className="accordion-body">
                <Link
                  to="/guser/userrating"
                  state={{ user }}
                  className="btn btn-outline-danger w-100"
                  onClick={() => setShowMenu(false)}
                >
                  🌟 User Rating Form 🌟
                </Link>
              </div>
            </div>
            <div
              id="studentCollapse"
              className="accordion-collapse collapse"
              data-bs-parent="#adminAccordion"
            >
              <div className="accordion-body">
                <Link to="/guser/update" state={{ user }} 
                        className="btn btn-outline-danger w-100" 
                        onClick={() => setShowMenu(false)} >
                        Update Password
                      </Link>

              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-3 text-center" style={{ marginTop: "400px" }}>
            <Link
              to="/login"
              className="btn w-50 bg-primary fw-bold text-light"
              onClick={() => setShowMenu(false)}
            >
              Logout
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Usidebar;
