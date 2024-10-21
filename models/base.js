const conn = require("../utils/db");

class BaseSQLModel {
    constructor(table) {
        this.table = table;
    }

    executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            conn.query(query, params, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async findAll() {
        const results = await this.executeQuery(`SELECT * FROM ${this.table}`)
        return results;
    }

    async findOne(w, v) {
        const results = await this.executeQuery(`SELECT * FROM ${this.table} WHERE ${w}=${v}`)
        return results[0];
    }
}

module.exports = BaseSQLModel;
