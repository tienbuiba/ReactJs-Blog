const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  db.query(
    "INSERT INTO users (username, password,email) VALUES (?, ?, ?);",
    [username, password,email],
    (err, results) => {
      console.log(err);
      res.send(results);
    }
  );
});
// const createAccount = async (req, res, next) => {
//   const newAccount = {
//     username: req.body.username,
//     password: req.body.password,
//     display: req.body.display,
//     role: req.body.role
//   }

//   console.log('tao moi tai khoan', newAccount);
//   if (!newAccount.username) {
//     const result = {
//       status: 0,
//       message: 'Khong dc de trong ',
//     };
//   res.status(400).send(result);
//   };

//   if (!newAccount.password || newAccount.password.length < 6) {
//     const result = {
//       status: 0,
//       message: 'Mat khau phai dai hon 6 ki tu ',
//     };
//     res.status(400).send(result);
//   };
  
//   const message = await accountService.create(newAccount);
//   res.send({
//     status: 1,
//     message: message
//   });
  
// }
// const create = async (newAccount) => {
//   const checkExistedSQL = `
//     SELECT count(username) as can FROM account WHERE username = ? ;
//   `;
//   const exist = await db.queryOne(checkExistedSQL, [newAccount.username]);
//   if (exist.can > 0) {
//     return "Tai khoan da ton tai ";

//   } else {
//     const encryptedPassword =
//       await security.generatePassword(newAccount.password);
//     console.log(encryptedPassword);
//     const insertSQL = ` INSERT INTO account(username, password, role, display) VALUES ( ? ,? ,? ,?) ;
//     `;
//     await db.query(insertSQL, [
//       newAccount.username,
//        newAccount.role,
//       newAccount.display,
//       encryptedPassword
     
//     ]);

//     return "Tao tk thanh cong";
//   }
// }

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    username,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.length > 0) {
        if (password == results[0].password) {
          res.json({ loggedIn: true, username: username });
        } else {
          res.json({
            loggedIn: false,
            message: "Wrong username/password combo!",
          });
        }
      } else {
        res.json({ loggedIn: false, message: "User doesn't exist" });
      }
    }
  );
});

module.exports = router;