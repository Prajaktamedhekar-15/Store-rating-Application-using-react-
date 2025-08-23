


// import React, { useState, useEffect } from 'react';
// import { ownerData, saveStore } from '../service/service.js';
// import '../style/addStore.css';

// let AddStore = ({ User }) => {
//   let [owner, setOwner] = useState([]);

//   let ownerDetail = async () => {
//     let data = await ownerData();
//     setOwner(data);
//   };

//   useEffect(() => {
//     ownerDetail();
//   }, []);

//   let [store, setStore] = useState({
//     sname: '',
//     s_address: '',
//     owner_id: ''
//   });

//   let setStoreData = (e) => {
//     setStore({
//       ...store,
//       [e.target.name]: e.target.value
//     });
//   };

//   let saveStoreDetail = async () => {
//     let result = await saveStore(store.sname, store.s_address, store.owner_id);
//     alert(result);

//   };

//   return (
//     <div className="addstore-container">
//       <div className="addstore-overlay"></div>

//       <div className="addstore-box">
//         <h1>Add Store</h1>

//         <div className="form">
//           <div className="form-group mb-3">
//             <label className="form-label">Store name</label>
//             <input type="text" className="form-control" name="sname" value={store.sname} placeholder="Enter the Store name"  onChange={setStoreData}/>
//           </div>

//           <div className="form-group mb-3">
//             <label className="form-label">Store Address</label>
//             <input type="text" className="form-control" name="s_address" value={store.s_address} placeholder="Enter the Store Address" onChange={setStoreData}/>
//           </div>

//           <div className="form-group mb-3">
//             <label className="form-label">Select Store Owner</label>
//             <select name="owner_id"   value={store.owner_id} className="form-control" onChange={setStoreData}>
//               <option value="">Select Owner</option>
//               {owner.map((data) => (
//                 <option key={data.id} value={data.id}>
//                   {data.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group mb-3 mt-4">
//             <input
//               type="button"
//               className="form-control btn btn-dark"
//               value="Add Store"
//               onClick={saveStoreDetail}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddStore;



import React, { useState, useEffect } from 'react';
import { ownerData, saveStore } from '../service/service.js';
import '../style/addStore.css';

let AddStore = ({ User }) => {
  let [owner, setOwner] = useState([]);
  let [errors, setErrors] = useState({});

  let ownerDetail = async () => {
    let data = await ownerData();
    setOwner(data);
  };

  useEffect(() => {
    ownerDetail();
  }, []);

  let [store, setStore] = useState({
    sname: '',
    s_address: '',
    owner_id: ''
  });

  let setStoreData = (e) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Validation function (no regex)
  let validate = () => {
    let err = {};

    // Store name: required, 5–100 chars
    if (!store.sname || store.sname.trim().length < 5 || store.sname.trim().length > 100) {
      err.sname = "Store name must be between 5 and 100 characters.";
    }

    // Store address: required, max 400 chars
    if (!store.s_address || store.s_address.trim().length === 0) {
      err.s_address = "Store address is required.";
    } else if (store.s_address.length > 400) {
      err.s_address = "Store address cannot exceed 400 characters.";
    }

    // Owner: must be selected
    if (!store.owner_id) {
      err.owner_id = "Please select a store owner.";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  let saveStoreDetail = async () => {
    if (validate()) {
      let result = await saveStore(store.sname, store.s_address, store.owner_id);
      alert(result);

      // Reset after save
      setStore({
        sname: '',
        s_address: '',
        owner_id: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="addstore-container">
      <div className="addstore-overlay"></div>

      <div className="addstore-box">
        <h1>Add Store</h1>

        <div className="form">
          <div className="form-group mb-3">
            <label className="form-label">Store name</label>
            <input
              type="text"
              className="form-control"
              name="sname"
              value={store.sname}
              placeholder="Enter the Store name"
              onChange={setStoreData}
            />
            {errors.sname && <small className="text-danger">{errors.sname}</small>}
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Store Address</label>
            <input type="text" className="form-control" name="s_address" value={store.s_address} placeholder="Enter the Store Address"onChange={setStoreData}/>
            {errors.s_address && <small className="text-danger">{errors.s_address}</small>}
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Select Store Owner</label>
            <select name="owner_id" value={store.owner_id} className="form-control" onChange={setStoreData} >
              <option value="">Select Owner</option>
              {owner.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
            {errors.owner_id && <small className="text-danger">{errors.owner_id}</small>}
          </div>

          <div className="form-group mb-3 mt-4">
            <input type="button"  className="form-control btn btn-dark" value="Add Store" onClick={saveStoreDetail}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStore;
