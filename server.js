const express = require("express");
const mysqi = require("mysql");
const bodyparser = require("body-parser");

const app = express(); //url
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const connection = mysql.createconnection({
  //koneksi mysql
  host: "localhost",
  user: "root",
  passwors: "",
  database: "xampp",
});

connection,
  connect((err) => {
    //ngirimin formasi konek atau tidak ke app kita
    if (err) {
      console.error("terjadi kesalahan dalam kondisi ke mysql:, err.stack");
      return;
    }
    console.log("koneksi mysql berhasil dengan id" + connection.threadID);
  });

app.set("view engine", "ejs");

//ini adalah routing(create,read,update,delate)

//read
app.get("/", (req, res) => {
  const query = "SELECT * FROM users";
  connection.query(query, (err, results) => {
    res.render("index", { users: results });
  });
});

app.listen(3000, () => {
  console.log(
    "server berjalan diport 3000, buka melalui http://localhost:3000"
  );
});
