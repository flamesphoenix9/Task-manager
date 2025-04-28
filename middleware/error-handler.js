const { CustomError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    res.status(500).json({ msg: 'Something went wrong, please try again' })
    console.log("Yes");
  }

module.exports = errorHandlerMiddleware;