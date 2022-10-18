module.exports = {
    HOST: "127.0.0.1",
    PORT: 3306,
    USER: "root",
    PASSWORD: "jz2002",
    DB: "first_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
