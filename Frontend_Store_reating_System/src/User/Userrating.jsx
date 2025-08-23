import React, { useEffect, useState } from "react";
import { viewstore, addRating } from "../service/service.js";

const Userrating = ({ user }) => {
  const [store, setStore] = useState([]);
  const [rate, setRate] = useState({
    store_id: "",
    rating: "",
    user_id: ""
  });

  useEffect(() => {
    const storeDetail = async () => {
      const data = await viewstore();
      setStore(data);
    };
    storeDetail();
  }, []);

  useEffect(() => {
    if (user) {
      setRate((prev) => ({
        ...prev,
        user_id: user.id
      }));
    }
  }, [user]);

  const addReating = (e) => {
    setRate({ ...rate,
      [e.target.name]: e.target.value
    });
  };

  const handleStarClick = (starValue) => {
    setRate((prev) => ({...prev,
      rating: starValue
    }));
  };

  const saveRating = async () => {
    let result = await addRating(rate.store_id, rate.user_id, rate.rating);
    alert(result);
  };

  return (
    <div className="container my-5 p-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 border bg-light rounded shadow p-4">
          <h1 className="text-center">User Rating</h1>
          <p className="text-center text-muted">We Value Your Feedback</p>

          {/* Store selection */}
          <div className="form-group mb-3">
            <label htmlFor="store_id" className="form-label">
              Select Store Name
            </label>
            <select name="store_id" id="store_id" className="form-control" value={rate.store_id} onChange={addReating} >
              <option value="">Select option</option>
              {store.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>

          {/* Star rating */}
          <div className="form-group mb-3">
            <label className="form-label">Select Rating</label>
            <div className="d-flex align-items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleStarClick(star)} 
                style={{ fontSize: "2.2rem", color: star <= rate.rating ? "gold" : "gray", cursor: "pointer" }}>
                  ★
                </span>
              ))}
              <span className="ms-2">({rate.rating || "No Rating"})</span>
            </div>
          </div>

          {/* Submit */}
          <div className="form-group mb-3">
            <input type="button" className="form-control btn btn-primary" value="Submit" onClick={saveRating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userrating;
