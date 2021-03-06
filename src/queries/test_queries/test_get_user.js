const databaseConnection = require('../../database/db_connection.js');

const getUser = cb => {
    databaseConnection.query('SELECT * FROM users', (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res.rows);
        }
    });
};

module.exports = getUser;