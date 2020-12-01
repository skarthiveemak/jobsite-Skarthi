const { create, getUserByUserId, getUsers, updateUser, deleteUser, getUserByUserEmail } = require("./user.service");

const {genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "datbase connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data: results
            });
        });
    },

    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id,(err,results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getUsers: (req, res) => {
        getUsers((err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data:results
            });
        });
    },

    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "failed to update user"
                });
            }
            return res.json({
                success:1,
                message: "updated successfullly"
            });
        });
    },

    deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if(!results) {
            return res.json({
                success:0,
                message: "record not found"
            });
        }
        return res.json({
            success: 1,
            message: "deleted succesfullly"
        });
    });
    },


    // login
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
           if (err) {
               console.log(err);
           }
           if (!results) {
               return res.json({
                   success:0,
                   data: "Invalid Email or Password"
               });
           }
           const result = compareSync(body.password, results.password);
           if (result) {
               results.password = undefined;
               const jsonwebtoken = sign({ result: results}, "qwe1234", {
                   expiresIn: "1h"
               });
               return res.json({
                   success:1,
                   message: "login success",
                   token: jsonwebtoken
               });
            
           } else {
               return res.json({
                   success:0,
                   data: "Invalid Email or Password"
               });
           }

        });
    }

};