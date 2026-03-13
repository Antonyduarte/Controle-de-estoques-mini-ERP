function response(status, message, affectedRows) {
    return {
        status: status,
        message: message,
        affectedRows: affectedRows,
        timeStamp: new Date().getTime()
    }
}
module.exports = { response }