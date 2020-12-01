const pool = require("../../config/database");


module.exports = {
    create: (data, callBack) => {
        console.log(data);
        pool.query(
        `insert into registration(name, lastName, gender, email, password, number)
                    values(?,?,?,?,?,?)`,
            [
                data.name,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                    
                }
                
                return callBack(null, results)
            }
            );

    },

    getUsers: callBack => {
        pool.query(
            `select id,name,lastName,gender,email,password,number from registration`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getUserByUserEmail: (email, callBack) => {
        pool.query(
          `select * from registration where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

    getUserByUserId: (id, callBack) => {
        pool.query(
            `select id,name,lastName,gender,email,password,number from registration where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },


    updateUser: (data, callBack) => {
        pool.query(
            `update registration set name=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
            [
                data.name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    deleteUser: (data,callBack) => {
        pool.query(
            `delete from registration where id = ?`,
            [
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },





    

};