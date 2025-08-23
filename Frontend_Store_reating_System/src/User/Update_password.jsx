import React, { useState } from "react";
import { updatePass } from "../service/service";

let UpdatePassword = ({ user }) => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { oldPassword, newPassword, confirmPassword } = form;

    // ✅ Password validation
    if (newPassword !== confirmPassword) {
      setError("❌ New password and confirm password do not match!");
      setMessage("");
      return;
    }

    if (newPassword.length < 8 || newPassword.length > 16) {
      setError("❌ Password must be between 8 and 16 characters.");
      setMessage("");
      return;
    }

    if (!/[A-Z]/.test(newPassword)) {
      setError("❌ Password must contain at least one uppercase letter.");
      setMessage("");
      return;
    }

    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(newPassword)) {
      setError("❌ Password must contain at least one special character.");
      setMessage("");
      return;
    }

    try {
      const res = await updatePass(user.id, newPassword, oldPassword);
      setMessage("✅ " + res.data);
      setError("");
     
      setForm({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError("❌ " + (err.response?.data || err.message));
      setMessage("");
    }
  };

  return (
    <div
      className="container mt-5 p-4 border rounded shadow bg-light"
      style={{ maxWidth: "500px" }}
    >
      <h2 className="mb-4 text-center">Update Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="oldPassword">Old Password</label>
          <input type="password" id="oldPassword" name="oldPassword" className="form-control" placeholder="Enter old password" value={form.oldPassword}  onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="newPassword">New Password</label>
          <input  type="password" id="newPassword" name="newPassword" className="form-control" placeholder="Enter new password" value={form.newPassword} onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input type="password"   id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm new password" value={form.confirmPassword} onChange={handleChange}/>
        </div>

        <button type="submit" className="btn btn-dark w-100 rounded-pill">
          Update Password
        </button>
      </form>

      {/* ✅ Success / Error Messages */}
      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default UpdatePassword;
