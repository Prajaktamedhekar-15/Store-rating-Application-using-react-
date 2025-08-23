let conn=require("../config/db.js");

exports.registerUser=(name,email,password,address,role)=>{

    return new Promise((resolve,reject)=>{
           conn.query("insert into users (name, email, password, address, role) values(?,?,?,?,?)",[name,email,password,address,role],(err,result)=>{
            if(err){
                    reject(err);
                    
            }else{
                resolve(result);
               
            }
           });     
    })
}

exports.viewusers=()=>{

    return new Promise((resolve,reject)=>{
           conn.query("select * from users where role!=?",['admin'],(err,result)=>{
            if(err){
                    reject(err);
                    
            }else{
                resolve(result);
               
            }
           });     
    })
}

exports.logindb=(email,password)=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from users where email=? and password=?",[email,password],(err,result)=>{
            if(err){
                    reject(err);
            }else{
                resolve(result);
                console.log("result");
            }
    });
    });
    
}


exports.ownerData=()=>{

    return new Promise((resolve,reject)=>{
           conn.query("select * from users where role=?",['owner'],(err,result)=>{
            if(err){
                    reject(err);
                    
            }else{
                resolve(result);
            }
           });     
    })  
}
exports.addstore=(name,address,owner_id)=>{
      return new Promise((resolve,reject)=>{
        conn.query("insert into stores values('0',?,?,?)",[name,address,owner_id],(err,result)=>{
            if(err)
            {
                reject (err);
            }
            else
                {
               resolve(result);
            }
        });
    });
}


exports.viewStore = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT s.id,s.name,s.address,u.name as owner  FROM stores s join users u on u.id=s.owner_id", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports.deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    conn.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


exports.addRating = (store_id, user_id, rating) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ratings (store_id , user_id, rating, created_at) VALUES (?, ?, ?, CURDATE())`;
        conn.query(query, [store_id, user_id, rating], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
 


 exports.avgRating = (id) => {
  return new Promise((resolve, reject) => {
    conn.query("select s.name,s.address,avg(r.rating) as avg,sum(r.rating) as sum from stores s join ratings r on r.store_id=s.id join users u on u.id=s.owner_id where owner_id=? group by s.name,s.address",[id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


 exports.allRating = (id) => {
  return new Promise((resolve, reject) => {
    conn.query("select u.name,s.name as store,r.rating,r.created_at from users u join ratings r on  r.user_id=u.id join stores s on s.id=r.store_id where s.owner_id=? ",[id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};





 exports.deleteStore = (id) => {
  return new Promise((resolve, reject) => {
    conn.query("delete from stores where id=?",[id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};



exports.totalUser = () => {
  return new Promise((resolve, reject) => {
    conn.query("select count(id)as count from users", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports.totalStore = () => {
  return new Promise((resolve, reject) => {
    conn.query("select count(id)as count from Stores", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


exports.getUserById = (id,newPassword) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]); // single user
      }
    });
  });
};

// update password
exports.updatePass = (id, newPass) => {
  return new Promise((resolve, reject) => {
    conn.query("UPDATE users SET password = ? WHERE id = ?", [newPass, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};