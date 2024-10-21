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

    async create(data) {
        const result = await this.executeQuery(`INSERT INTO ${this.table} SET ?`, data);
        return result.insertId;
    }

    async findAll() {
        const results = await this.executeQuery(`SELECT * FROM ${this.table}`)
        return results;
    }

    async findOne(w, v) {
        const results = await this.executeQuery(`SELECT * FROM ${this.table} WHERE ${w}="${v}"`)
        return results[0];
    }

    async findMany(w, v) {
        const results = await this.executeQuery(`SELECT * FROM ${this.table} WHERE ${w}=${v}`)
        return results; 
    }

    async findById(id) {
        return this.findOne("id", id);
    }
}

module.exports = BaseSQLModel;
