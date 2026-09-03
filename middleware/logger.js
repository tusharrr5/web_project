const logger = (req, res, next) => {

    const log = `
Time   : ${new Date().toLocaleString()}
Method : ${req.method}
URL    : ${req.originalUrl}
IP     : ${req.ip}
----------------------------------
`;

    console.log(log);

    next();
};

module.exports = logger;