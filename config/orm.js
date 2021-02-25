// Import MySQL connection.
const connection = require('./connection.js');

const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
};

var orm = {
  
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM" + table + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  }, 

insertOne: function(table, burger_name, cb) {
    var queryString = "INSERT INTO" + table + " (burger_name) VALUE ('" + burger_name + "')";
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
},

}


