class apiRes{
    constructor(status, message, affectedRows, data) {
        this.status = status,
        this.message = message,
        this.affectedRows = affectedRows
        this.data = data
    }
}


module.exports = { apiRes }
